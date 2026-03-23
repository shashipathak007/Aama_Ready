import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ToastAndroid,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ... Checkbox props
interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onToggle();
      }}
      className={`w-6 h-6 rounded-md border-2 items-center justify-center ${
        checked ? 'bg-themePrimary border-themePrimary' : 'bg-themeWhite border-themePrimary'
      }`}
      activeOpacity={0.7}
    >
      {checked && <Text className="text-themeWhite text-[14px] font-bold -mt-[1px]">✓</Text>}
    </TouchableOpacity>
  );
};

// ... ProgressHeaderProps
interface ProgressHeaderProps {
  title: string;
  current: number;
  total: number;
  label?: string;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  title,
  current,
  total,
  label,
}) => {
  const pct = total > 0 ? (current / total) * 100 : 0;
  const displayLabel = label || `${current} of ${total} ready`;

  return (
    <View className="bg-themeWhite px-4 pt-4 pb-3 border-b-[0.5px] border-themeBorder">
      <View className="flex-row justify-between items-center mb-2.5">
        <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px]">{title}</Text>
        <Text className="text-[12px] text-textSecondary font-medium">{displayLabel}</Text>
      </View>
      <View className="h-1.5 bg-[#EAE2E3] rounded-full overflow-hidden">
        <View className="h-1.5 bg-themePrimary rounded-full" style={{ width: `${pct}%` }} />
      </View>
      {pct === 100 && total > 0 && (
        <View className="mt-2.5 bg-greenBg py-2.5 px-3.5 rounded-lg items-center">
          <Text className="text-greenText text-[14px] font-semibold">✓ All done! You are ready.</Text>
        </View>
      )}
    </View>
  );
};

// ... CategoryBadgeProps
interface CategoryBadgeProps {
  label: string;
  textColor: string;
  bgColor: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  label,
  textColor,
  bgColor,
}) => {
  return (
    <View className="px-2 py-[3px] rounded-full self-start" style={{ backgroundColor: bgColor }}>
      <Text className="text-[11px] font-semibold" style={{ color: textColor }}>{label}</Text>
    </View>
  );
};

// ... SegmentedControlProps
interface SegmentedControlProps {
  tabs: string[];
  activeIndex: number;
  onTabPress: (index: number) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  tabs,
  activeIndex,
  onTabPress,
}) => {
  return (
    <View className="flex-row bg-[#EAE2E3] rounded-xl p-[3px] mx-4 my-3">
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-2.5 items-center rounded-lg ${
              isActive ? 'bg-themeWhite' : ''
            }`}
            style={
              isActive
                ? {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                  }
                : {}
            }
            onPress={() => onTabPress(index)}
            activeOpacity={0.7}
          >
            <Text
              className={`text-[14px] font-semibold ${
                isActive ? 'text-textPrimary' : 'text-textMuted'
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// ... ResetButtonProps
interface ResetButtonProps {
  onPress: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="px-3 py-1.5" activeOpacity={0.6}>
      <Text className="text-[12px] text-textMuted font-medium">Reset all</Text>
    </TouchableOpacity>
  );
};

// Phase Reminder Banner
export const PhaseReminderBanner: React.FC = () => {
  return (
    <View className="bg-themePrimaryLight px-4 py-3 border-b-[0.5px] border-themePrimary">
      <Text className="text-[12px] text-themePrimary font-semibold leading-5 text-center">
        💡 Everything from your Phase 1 hospital bag carries forward. Only new items are listed here.
      </Text>
    </View>
  );
};

// Copy to Clipboard Utility
export const ShareButton: React.FC<{ content: string; color?: string }> = ({ content, color = '#F48B9E' }) => {
  const handleCopy = async () => {
    await Clipboard.setStringAsync(content);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    }
  };
  return (
    <TouchableOpacity onPress={handleCopy} className="p-2 -mr-2" activeOpacity={0.7}>
      <Text className="text-[14px]" style={{ color }}>◎ Copy</Text>
    </TouchableOpacity>
  );
};

// Generic Info Card with Expand/Collapse and Share
interface InfoCardProps {
  title: string;
  detail: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  prefix?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  detail,
  borderColor = '#F48B9E',
  bgColor = '#FEF7F9',
  textColor = '#2D2325',
  prefix,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View
      className="bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder border-l-[3px] overflow-hidden"
      style={{ borderLeftColor: borderColor }}
    >
      <TouchableOpacity
        className="flex-row items-center p-3.5"
        activeOpacity={0.7}
        onPress={toggle}
      >
        {prefix && (
          <View className="w-5 h-5 rounded-full mr-2.5 items-center justify-center" style={{ backgroundColor: borderColor }}>
            <Text className="text-[10px] font-bold text-themeWhite">{prefix}</Text>
          </View>
        )}
        {!prefix && (
          <View className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: borderColor }} />
        )}
        <Text className="text-[14px] font-semibold text-textPrimary flex-1 leading-5">
          {title}
        </Text>
        <Text className="text-[16px] text-textMuted ml-1">{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      
      {expanded && (
        <View className="px-3.5 pt-3 pb-2.5 border-t-[0.5px] border-t-themeBorder" style={{ backgroundColor: bgColor }}>
          <View className="flex-row justify-between items-start mb-1">
            <Text className="text-[12px] font-bold uppercase tracking-[0.5px] mb-1.5" style={{ color: borderColor }}>Details</Text>
            <ShareButton content={`${title}\n\n${detail}`} color={borderColor} />
          </View>
          <Text className="text-[14px] leading-[21px] pb-1.5" style={{ color: textColor }}>
            {detail}
          </Text>
        </View>
      )}
    </View>
  );
};
