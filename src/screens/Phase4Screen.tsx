import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PHASE4_ITEMS_MOTHER, PHASE4_ITEMS_NEWBORN, PHASE4_ITEMS_FEEDING, PHASE4_ITEMS_TOOLS, PHASE4_ROUTINE, PHASE4_HYGIENE, PHASE4_WARNING_BABY, PHASE4_WARNING_MOTHER } from '../data/phase4';
import { PhaseReminderBanner, Checkbox, InfoCard } from '../components/SharedComponents';
import { useChecklist } from '../hooks/useChecklist';
import { useTranslation } from 'react-i18next';

export default function Phase4Screen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const TABS = t('phase4.tabs', { returnObjects: true }) as string[];

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <NewItemsTab />;
      case 1: return <RoutineTab />;
      case 2: return <HygieneTab />;
      case 3: return <WarningsTab />;
      case 4: return <TrackerTab />;
      default: return null;
    }
  };

  return (
    <View className="flex-1 bg-themeBg">
      <View className="bg-themeWhite pt-12 pb-2 border-b-[0.5px] border-themeBorder px-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-3 w-10 h-10 -ml-2 items-center justify-center">
          <Text className="text-[28px] text-textPrimary leading-8">←</Text>
        </TouchableOpacity>
        <Text className="text-[24px] font-bold text-textPrimary tracking-[-0.5px] mb-1">{t('phase4.title')}</Text>
        <Text className="text-[12px] text-textSecondary leading-5">{t('phase4.desc')}</Text>
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
              className={`px-4 py-2 mr-2 rounded-full border-[0.5px] ${activeTab === idx ? 'bg-[#C97B20] border-[#C97B20]' : 'bg-themeWhite border-[#E2D6D8]'}`}
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
  const { i18n } = useTranslation();
  const [checked, toggle] = useChecklist('p4_checked');

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
          borderColor="#C97B20"
        />
      );
    })}
    </View>
  );
  
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {renderSection("Mother's Care", PHASE4_ITEMS_MOTHER)}
      {renderSection("Newborn Care", PHASE4_ITEMS_NEWBORN)}
      {renderSection("Breastfeeding Support", PHASE4_ITEMS_FEEDING)}
      {renderSection("Warning Sign Tools", PHASE4_ITEMS_TOOLS)}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 2: MOTHER ROUTINE
// -------------------------------------------------------------
const RoutineTab = () => {
  const { i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {PHASE4_ROUTINE.map((stage, idx) => (
        <View key={idx} className="bg-themeWhite mx-4 mb-4 border-[0.5px] border-themeBorder rounded-xl p-5 shadow-sm border-l-[4px] border-l-[#F48B9E]">
          <Text className="text-[16px] font-bold text-themePrimary mb-3">{i18n.language === 'ne' ? stage.stageNe : stage.stage}</Text>
          {(i18n.language === 'ne' ? stage.pointsNe : stage.points).map((pt, i) => (
            <View key={i} className="flex-row items-start mb-2.5">
              <Text className="text-[16px] text-themePrimary mr-2 leading-6">•</Text>
              <Text className="text-[14px] text-textSecondary leading-[22px] flex-1">{pt}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 3: HYGIENE
// -------------------------------------------------------------
const HygieneTab = () => {
  const { i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {PHASE4_HYGIENE.map((item, idx) => (
        <InfoCard key={idx} title={i18n.language === 'ne' ? item.titleNe : item.title} detail={i18n.language === 'ne' ? item.detailNe : item.detail} borderColor="#1C6B9E" bgColor="#EAF3FA" />
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 4: WARNING SIGNS
// -------------------------------------------------------------
const WarningsTab = () => {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView className="flex-1 pt-4" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      <Text className="text-[14px] font-bold text-textSecondary uppercase tracking-[1px] px-4 mb-2 mt-2">{t('phase4.baby_warning')}</Text>
      {PHASE4_WARNING_BABY.map((item, idx) => (
        <InfoCard key={idx} title={i18n.language === 'ne' ? item.titleNe : item.title} detail={i18n.language === 'ne' ? item.detailNe : item.detail} borderColor="#DE8E94" bgColor="#FCEDED" prefix="!" />
      ))}
      <View className="h-6" />
      <Text className="text-[14px] font-bold text-textSecondary uppercase tracking-[1px] px-4 mb-2">{t('phase4.mother_warning')}</Text>
      {PHASE4_WARNING_MOTHER.map((item, idx) => (
        <InfoCard key={idx} title={i18n.language === 'ne' ? item.titleNe : item.title} detail={i18n.language === 'ne' ? item.detailNe : item.detail} borderColor="#DE8E94" bgColor="#FCEDED" prefix="!" />
      ))}
    </ScrollView>
  );
};

// -------------------------------------------------------------
// SUB-SECTION 5: TRACKER
// -------------------------------------------------------------
type FeedType = 'Left breast' | 'Right breast' | 'Bottle';
interface FeedLog { id: string; time: number; type: FeedType; duration: number }
interface SleepLog { id: string; start: number; end: number | null; type: 'baby'|'mother' }

const TrackerTab = () => {
  const { t } = useTranslation();
  const [feeds, setFeeds] = useState<FeedLog[]>([]);
  const [sleeps, setSleeps] = useState<SleepLog[]>([]);
  
  const [feedMenu, setFeedMenu] = useState(false);
  const [feedDur, setFeedDur] = useState(10); // mins

  useEffect(() => {
    AsyncStorage.getItem('feeds_log').then(v => v && setFeeds(JSON.parse(v)));
    AsyncStorage.getItem('sleep_log').then(v => v && setSleeps(JSON.parse(v)));
  }, []);

  const saveFeeds = async (newFeeds: FeedLog[]) => {
    setFeeds(newFeeds);
    await AsyncStorage.setItem('feeds_log', JSON.stringify(newFeeds));
  };

  const saveSleeps = async (newSleeps: SleepLog[]) => {
    setSleeps(newSleeps);
    await AsyncStorage.setItem('sleep_log', JSON.stringify(newSleeps));
  };

  const addFeed = (type: FeedType) => {
    const newLog: FeedLog = { id: Date.now().toString(), time: Date.now(), type, duration: feedDur };
    saveFeeds([newLog, ...feeds]);
    setFeedMenu(false);
  };

  const toggleSleep = (type: 'baby'|'mother') => {
    const active = sleeps.find(s => s.type === type && s.end === null);
    if (active) {
      saveSleeps(sleeps.map(s => s.id === active.id ? { ...s, end: Date.now() } : s));
    } else {
      const newSleep: SleepLog = { id: Date.now().toString(), start: Date.now(), end: null, type };
      saveSleeps([newSleep, ...sleeps]);
    }
  };

  const resetData = () => {
    Alert.alert('Reset Tracker?', 'This will clear all logs.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear All', style: 'destructive', onPress: () => { saveFeeds([]); saveSleeps([]); } }
    ]);
  };

  const lastFeed = feeds[0];
  const timeSinceFeed = lastFeed ? Math.round((Date.now() - lastFeed.time) / 60000) : null;
  const activeBabySleep = sleeps.find(s => s.type === 'baby' && s.end === null);
  const activeMotherSleep = sleeps.find(s => s.type === 'mother' && s.end === null);

  const formatDur = (ms: number) => {
    const m = Math.round(ms / 60000);
    const h = Math.floor(m / 60);
    return h > 0 ? `${h}h ${m%60}m` : `${m}m`;
  };

  return (
    <ScrollView className="flex-1 pt-4 pb-20 px-4" showsVerticalScrollIndicator={false}>
      <View className="flex-row justify-between mb-2">
        <Text className="text-[18px] font-bold text-textPrimary tracking-[-0.2px]">{t('phase4.feeding_log')}</Text>
        <TouchableOpacity onPress={resetData}><Text className="text-[12px] font-bold text-textMuted uppercase mt-1">{t('phase4.reset')}</Text></TouchableOpacity>
      </View>
      
      {feedMenu ? (
        <View className="bg-themeWhite border-[0.5px] border-themeBorder rounded-xl p-4 mb-4 shadow-sm items-center">
          <Text className="text-[14px] font-bold text-textSecondary uppercase mb-3">{t('phase4.duration_mins')}</Text>
          <View className="flex-row items-center mb-5">
            <TouchableOpacity onPress={() => setFeedDur(Math.max(1, feedDur-1))} className="w-10 h-10 bg-themeBg rounded-lg items-center justify-center"><Text className="text-[20px] font-bold">-</Text></TouchableOpacity>
            <Text className="text-[24px] font-extrabold w-16 text-center text-[#F48B9E]">{feedDur}</Text>
            <TouchableOpacity onPress={() => setFeedDur(feedDur+1)} className="w-10 h-10 bg-themeBg rounded-lg items-center justify-center"><Text className="text-[20px] font-bold">+</Text></TouchableOpacity>
          </View>
          <View className="flex-row gap-2 w-full">
            <TouchableOpacity onPress={() => addFeed('Left breast')} className="flex-1 bg-[#EAF3FA] py-3 rounded-lg border-[0.5px] border-[#1C6B9E]"><Text className="text-center text-[#1C6B9E] font-bold text-[12px]">{t('phase4.left')}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addFeed('Right breast')} className="flex-1 bg-[#EAF3FA] py-3 rounded-lg border-[0.5px] border-[#1C6B9E]"><Text className="text-center text-[#1C6B9E] font-bold text-[12px]">{t('phase4.right')}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addFeed('Bottle')} className="flex-1 bg-themeBg py-3 rounded-lg border-[0.5px] border-themeBorder"><Text className="text-center text-textSecondary font-bold text-[12px]">{t('phase4.bottle')}</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setFeedMenu(true); }} className="bg-[#F48B9E] py-4 rounded-xl items-center mb-4 shadow-sm">
          <Text className="text-[16px] font-bold text-themeWhite">{t('phase4.log_feed')}</Text>
        </TouchableOpacity>
      )}

      {lastFeed && !feedMenu && (
        <View className="mb-6 bg-themeWhite border-[0.5px] border-themeBorder rounded-xl p-3 shadow-sm border-l-[3px] border-l-[#F48B9E]">
           <Text className="text-[13px] text-textSecondary font-medium">{t('phase4.last_feed')} <Text className="font-bold text-themePrimary">{timeSinceFeed && timeSinceFeed > 60 ? `${Math.floor(timeSinceFeed/60)}h ${timeSinceFeed%60}m` : `${timeSinceFeed} ${t('phase4.mins')}`} {t('phase4.ago')}</Text> ({lastFeed.type === 'Bottle' ? t('phase4.bottle') : lastFeed.type === 'Left breast' ? t('phase4.left') : t('phase4.right')})</Text>
        </View>
      )}

      {feeds.slice(0, 5).map(f => (
        <View key={f.id} className="flex-row justify-between mb-2 pb-2 border-b-[0.5px] border-[#F2EBEC] px-1">
          <Text className="text-[13px] text-textSecondary">{new Date(f.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
          <Text className="text-[13px] font-semibold text-textPrimary">{f.type === 'Bottle' ? t('phase4.bottle') : f.type === 'Left breast' ? t('phase4.left') : t('phase4.right')}</Text>
          <Text className="text-[13px] text-themePrimary font-bold">{f.duration} {t('phase4.min')}</Text>
        </View>
      ))}

      <View className="h-[0.5px] bg-[#EAE2E3] my-6" />

      {/* SLEEP TRACKER */}
      <Text className="text-[18px] font-bold text-textPrimary tracking-[-0.2px] mb-4">{t('phase4.sleep_log')}</Text>
      
      <View className="flex-row gap-4 mb-4">
        <TouchableOpacity onPress={() => toggleSleep('baby')} className={`flex-1 py-4 rounded-xl border-[1.5px] items-center ${activeBabySleep ? 'bg-[#FFF5F0] border-[#F77F6E]' : 'bg-themeWhite border-[#EAE2E3]'} shadow-sm`}>
          <Text className={`text-[15px] font-bold mb-1 ${activeBabySleep ? 'text-[#F77F6E]' : 'text-textPrimary'}`}>{activeBabySleep ? t('phase4.baby_sleeping') : t('phase4.baby_awake')}</Text>
          <Text className="text-[11px] text-textSecondary">{activeBabySleep ? t('phase4.tap_to_wake') : t('phase4.tap_to_sleep')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => toggleSleep('mother')} className={`flex-1 py-4 rounded-xl border-[1.5px] items-center ${activeMotherSleep ? 'bg-[#EAF3FA] border-[#1C6B9E]' : 'bg-themeWhite border-[#EAE2E3]'} shadow-sm`}>
          <Text className={`text-[15px] font-bold mb-1 ${activeMotherSleep ? 'text-[#1C6B9E]' : 'text-textPrimary'}`}>{activeMotherSleep ? t('phase4.mother_sleeping') : t('phase4.mother_awake')}</Text>
          <Text className="text-[11px] text-textSecondary">{activeMotherSleep ? t('phase4.tap_to_wake') : t('phase4.tap_to_sleep')}</Text>
        </TouchableOpacity>
      </View>

      {sleeps.filter(s => s.end !== null).slice(0, 5).map(s => (
        <View key={s.id} className="flex-row justify-between mb-2 pb-2 border-b-[0.5px] border-[#F2EBEC] px-1">
           <Text className={`text-[11px] font-bold uppercase rounded p-1 ${s.type==='baby'?'bg-[#FFF5F0] text-[#F77F6E]':'bg-[#EAF3FA] text-[#1C6B9E]'}`}>{s.type}</Text>
           <Text className="text-[13px] text-textSecondary">{new Date(s.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {new Date(s.end!).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
           <Text className="text-[13px] font-semibold text-textPrimary">{formatDur(s.end! - s.start)}</Text>
        </View>
      ))}
      <View className="h-20" />
    </ScrollView>
  );
};
