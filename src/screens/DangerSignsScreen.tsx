import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { DANGER_SIGNS, TIER_CONFIG, DangerTier } from '../data/dangerSigns';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TIERS: DangerTier[] = ['go_now', 'call_doctor', 'wait_home'];

export default function DangerSignsScreen({ isEmbedded }: { isEmbedded?: boolean }) {
  const [activeTier, setActiveTier] = useState<DangerTier>('go_now');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  const tierSigns = DANGER_SIGNS.filter((s) => s.tier === activeTier);
  const config = TIER_CONFIG[activeTier];

  const switchTier = useCallback(
    (tier: DangerTier) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setActiveTier(tier);
      setExpandedId(null);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    },
    []
  );

  const toggleExpand = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-2 pb-[14px] border-b-[0.5px] border-themeBorder px-4">
        {!isEmbedded && (
          <>
            <Text className="text-[22px] font-bold text-textPrimary tracking-[-0.3px] mb-1 mt-12">Danger Signs</Text>
            <Text className="text-[12px] text-textMuted mb-[14px]">
              Know when to act — every minute matters
            </Text>
          </>
        )}
        {isEmbedded && (
          <Text className="text-[12px] text-textMuted mb-[14px] mt-2">
            Know when to act — every minute matters
          </Text>
        )}
        <View className="flex-row gap-2">
          {TIERS.map((tier) => {
            const tc = TIER_CONFIG[tier];
            const isActive = activeTier === tier;
            return (
              <TouchableOpacity
                key={tier}
                className={`flex-1 flex-row items-center justify-center py-2.5 px-2 rounded-lg ${
                  isActive ? 'border-[1.5px]' : 'border-[0.5px]'
                }`}
                style={{
                  backgroundColor: isActive ? tc.bg : '#FFFFFF',
                  borderColor: isActive ? tc.border : '#EAE2E3',
                }}
                activeOpacity={0.7}
                onPress={() => switchTier(tier)}
              >
                <View
                  className="w-2 h-2 rounded-full mr-1.5"
                  style={{ backgroundColor: tc.border }}
                />
                <Text
                  className={`text-[12px] ${isActive ? 'font-bold' : 'font-semibold'}`}
                  style={{ color: isActive ? tc.text : '#A69B9D' }}
                >
                  {tc.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="flex-row justify-between items-center px-4 py-3 mt-3 mx-4 rounded-lg"
          style={{ backgroundColor: config.bg }}
        >
          <Text className="text-[16px] font-bold" style={{ color: config.text }}>
            {activeTier === 'go_now' && '🚨 '}
            {activeTier === 'call_doctor' && '📞 '}
            {activeTier === 'wait_home' && '🏠 '}
            {config.label}
          </Text>
          <Text className="text-[12px] font-medium" style={{ color: config.text }}>
            {tierSigns.length} signs
          </Text>
        </View>

        {tierSigns.map((sign) => {
          const isExpanded = expandedId === sign.id;
          return (
            <TouchableOpacity
              key={sign.id}
              className="bg-themeWhite mx-4 mt-2 rounded-xl border-[0.5px] border-themeBorder border-l-[3px] overflow-hidden"
              style={{ borderLeftColor: config.border }}
              activeOpacity={0.7}
              onPress={() => toggleExpand(sign.id)}
            >
              <View className="flex-row items-start p-3.5">
                <View className="w-2 h-2 rounded-full mt-[5px] mr-2.5" style={{ backgroundColor: config.border }} />
                <Text className="text-[14px] font-semibold text-textPrimary flex-1 leading-5">{sign.title}</Text>
                <Text className="text-[14px] text-textMuted ml-2 mt-[2px]">{isExpanded ? '▲' : '▼'}</Text>
              </View>
              {isExpanded && (
                <View className="px-3.5 py-3 border-t-[0.5px] border-t-themeBorder" style={{ backgroundColor: config.bg }}>
                  <Text className="text-[14px] leading-[21px]" style={{ color: config.text }}>
                    {sign.explanation}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
