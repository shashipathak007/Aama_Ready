import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PHASE3_ITEMS_MOTHER, PHASE3_ITEMS_BABY, PHASE3_ITEMS_DISCHARGE, NEWBORN_BASICS, MOTHER_RECOVERY, DISCHARGE_CHECKLIST } from '../data/phase3';
import { PhaseReminderBanner, Checkbox, InfoCard } from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';
import { useTranslation } from 'react-i18next';

export default function Phase3Screen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const TABS = t('phase3.tabs', { returnObjects: true }) as string[];

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <NewItemsTab />;
      case 1: return <BabyBasicsTab />;
      case 2: return <MotherRecoveryTab />;
      case 3: return <DischargeTab />;
      default: return null;
    }
  };

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-12 pb-2 border-b-[0.5px] border-themeBorder px-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-3 w-10 h-10 -ml-2 items-center justify-center">
          <Text className="text-[28px] text-textPrimary leading-8">←</Text>
        </TouchableOpacity>
        <Text className="text-[24px] font-bold text-textPrimary tracking-[-0.5px] mb-1">{t('phase3.title')}</Text>
        <Text className="text-[12px] text-textSecondary leading-5">{t('phase3.desc')}</Text>
      </View>
      <PhaseReminderBanner />
      
      <View className="px-1 py-1 bg-themeWhite border-b-[0.5px] border-themeBorder">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}>
          {TABS.map((tab, idx) => (
            <TouchableOpacity
              key={tab}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setActiveTab(idx);
              }}
              className={`px-4 py-2 mr-2 rounded-full border-[0.5px] ${activeTab === idx ? 'bg-[#2F9E72] border-[#2F9E72]' : 'bg-themeWhite border-[#E2D6D8]'}`}
            >
              <Text className={`text-[13px] font-bold ${activeTab === idx ? 'text-themeWhite' : 'text-textSecondary'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View className="flex-1">
        {renderContent()}
      </View>
    </View>
  );
}

// -------------------------------------------------------------
// SUB-SECTION 1: NEW ITEMS
// -------------------------------------------------------------
const NewItemsTab = () => {
  const { t, i18n } = useTranslation();
  const [checked, toggle] = useChecklist('p3_items_checked');

  const renderSection = (title: string, data: any[]) => (
    <View className="mb-6">
      <Text className="text-[14px] font-bold text-textSecondary uppercase tracking-[1px] px-4 mb-2 mt-2">{title}</Text>
    {data.map((item) => {
      const isChecked = checked.has(item.id);
      return (
        <InfoCard
          key={item.id}
          title={i18n.language === 'ne' ? item.nameNe : item.name}
          detail={i18n.language === 'ne' ? item.whyNe : item.why}
          checked={isChecked}
          onCheck={() => toggle(item.id)}
          borderColor="#2F9E72"
        />
      );
    })}
    </View>
  );
  
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {renderSection('Mother', PHASE3_ITEMS_MOTHER)}
      {renderSection('Baby', PHASE3_ITEMS_BABY)}
      {renderSection('Discharge', PHASE3_ITEMS_DISCHARGE)}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 2: NEWBORN BASICS
// -------------------------------------------------------------
const BabyBasicsTab = () => {
  const { i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {NEWBORN_BASICS.map((item, idx) => (
        <InfoCard key={idx} title={i18n.language === 'ne' ? item.titleNe : item.title} detail={i18n.language === 'ne' ? item.detailNe : item.detail} borderColor="#1C6B9E" bgColor="#EAF3FA" />
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 3: MOTHER RECOVERY
// -------------------------------------------------------------
const MotherRecoveryTab = () => {
  const { i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {MOTHER_RECOVERY.map((item, idx) => (
        <InfoCard key={idx} title={i18n.language === 'ne' ? item.titleNe : item.title} detail={i18n.language === 'ne' ? item.detailNe : item.detail} borderColor="#F77F6E" bgColor="#FFF5F0" />
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 4: DISCHARGE CHECKLIST
// -------------------------------------------------------------
const DischargeTab = () => {
  const { t, i18n } = useTranslation();
  const [checked, toggle] = useChecklist('p3_discharge_checked');
  
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      <Text className="text-[14px] font-bold text-textSecondary uppercase tracking-[1px] px-4 mb-4 mt-2">{t('phase3.done_these')}</Text>
      {DISCHARGE_CHECKLIST.map((item, idx) => {
        const isChecked = checked.has(item.id);
        return (
          <TouchableOpacity 
            key={item.id} 
            className={`flex-row items-center mx-4 p-4 border-[0.5px] border-themeBorder mb-3 rounded-xl ${isChecked ? 'bg-[#EBF5ED] border-[#6EB88B]' : 'bg-themeWhite'}`}
            onPress={() => toggle(item.id)}
            activeOpacity={0.7}
          >
            <Checkbox checked={isChecked} onToggle={() => toggle(item.id)} />
            <Text className={`text-[15px] flex-1 ml-3 leading-6 ${isChecked ? 'text-textMuted' : 'text-textPrimary font-semibold'}`}>{i18n.language === 'ne' ? item.nameNe : item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
