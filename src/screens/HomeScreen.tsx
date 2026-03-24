import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BAG_ITEMS } from '../data/bagItems';

export default function HomeScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<any>();
  const [phase1Progress, setPhase1Progress] = useState(0);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ne' : 'en';
    i18n.changeLanguage(newLang);
  };
  const checkProgress = useCallback(async () => {
    try {
      const bagVal = await AsyncStorage.getItem('bag_checked');
      if (bagVal) {
        const parsed = JSON.parse(bagVal);
        const total = BAG_ITEMS.length;
        const complete = parsed.length;
        setPhase1Progress(Math.round((complete / total) * 100));
      } else {
        setPhase1Progress(0);
      }
    } catch {}
  }, []);

  useFocusEffect(
    useCallback(() => {
      checkProgress();
    }, [checkProgress])
  );



  return (
    <View className="flex-1 bg-themeBg">
      <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 20, paddingTop: 52, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: '#E2D6D8' }}>
        <View className="flex-row justify-between items-center mb-2">
          <Text style={{ fontSize: 30, fontWeight: '900', color: '#1E1517', letterSpacing: -0.8 }}>{t('home.title')}</Text>
          <TouchableOpacity onPress={toggleLanguage} style={{ backgroundColor: '#F0E6E8', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 }}>
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#1E1517' }}>{i18n.language === 'en' ? 'नेपाली' : 'English'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 14, color: '#5A5254', fontWeight: '500' }}>{t('home.subtitle')}</Text>
      </View>
      <ScrollView className="flex-1 px-4 pt-5 pb-20" showsVerticalScrollIndicator={false}>
        {/* PHASE 1 Card */}
        <PhaseCard
          number={1}
          phaseText={t('home.phase')}
          title={t('home.phase1_title')}
          desc={t('home.phase1_desc')}
          progressText={t('home.phase1_progress', { progress: phase1Progress })}
          color="#E8637B"
          onPress={() => navigation.navigate('Phase1Stack')}
          isLocked={false}
          completedMsg={t('home.phase1_complete')}
          isComplete={phase1Progress === 100}
          lockedMsg={t('home.locked_msg')}
        />

        {/* PHASE 2 Card */}
        <PhaseCard
          number={2}
          phaseText={t('home.phase')}
          title={t('home.phase2_title')}
          desc={t('home.phase2_desc')}
          progressText={t('home.phase2_progress')}
          color="#E05C44"
          onPress={() => navigation.navigate('Phase2Screen')}
          isLocked={false}
          completedMsg={t('home.phase2_complete')}
          isComplete={false}
          lockedMsg={t('home.locked_msg')}
        />

        {/* PHASE 3 Card */}
        <PhaseCard
          number={3}
          phaseText={t('home.phase')}
          title={t('home.phase3_title')}
          desc={t('home.phase3_desc')}
          progressText={t('home.phase3_progress')}
          color="#2F9E72"
          onPress={() => navigation.navigate('Phase3Screen')}
          isLocked={false}
          completedMsg={t('home.phase3_complete')}
          isComplete={false}
          lockedMsg={t('home.locked_msg')}
        />

        {/* PHASE 4 Card */}
        <PhaseCard
          number={4}
          phaseText={t('home.phase')}
          title={t('home.phase4_title')}
          desc={t('home.phase4_desc')}
          progressText={t('home.phase4_progress')}
          color="#C97B20"
          onPress={() => navigation.navigate('Phase4Screen')}
          isLocked={false}
          completedMsg={t('home.phase4_complete')}
          isComplete={false}
          lockedMsg={t('home.locked_msg')}
        />
        
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}

const PhaseCard = ({
  number, phaseText, title, desc, progressText, color, onPress, isLocked, completedMsg, isComplete, lockedMsg
}: any) => {
  return (
    <View className="mb-4">
      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#E2D6D8',
          borderLeftWidth: 5,
          borderLeftColor: color,
          padding: 18,
          shadowColor: color,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
          elevation: 4,
          opacity: isLocked ? 0.6 : 1,
        }}
        onPress={isLocked ? undefined : onPress}
        activeOpacity={0.8}
      >
        <View className="flex-row justify-between items-start mb-2">
          <View style={{ backgroundColor: color + '18', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: color + '50' }}>
            <Text style={{ fontSize: 11, fontWeight: '800', color, letterSpacing: 0.5 }}>
              {phaseText} {number}
            </Text>
          </View>
          {isLocked && <Text className="text-[16px]">🔒</Text>}
        </View>

        <Text style={{ fontSize: 20, fontWeight: '800', color: '#1E1517', letterSpacing: -0.4, marginBottom: 6, lineHeight: 26 }}>
          {title}
        </Text>
        
        <Text style={{ fontSize: 14, color: '#5A5254', lineHeight: 21, marginBottom: 14 }}>
          {desc}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FAF5F6', borderRadius: 10, padding: 12 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#5A5254' }}>
            {isLocked ? lockedMsg : progressText}
          </Text>
          {!isLocked && (
            <View style={{ width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: color + '25' }}>
              <Text style={{ fontSize: 16, lineHeight: 22, color, fontWeight: '700' }}>›</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {isComplete && (
        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#1D5C38', marginTop: 10, letterSpacing: 0.2 }}>
          ✨ {completedMsg}
        </Text>
      )}
    </View>
  );
};
