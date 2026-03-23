import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BAG_ITEMS } from '../data/bagItems';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [phase1Progress, setPhase1Progress] = useState(0);

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
      <View className="bg-themeWhite px-5 pt-8 pb-4 border-b-[0.5px] border-themeBorder flex-row justify-between items-center">
        <View>
          <Text className="text-[28px] font-extrabold text-textPrimary tracking-[-0.5px]">Aama Ready</Text>
          <Text className="text-[14px] text-textSecondary mt-1">Your pregnancy preparation guide</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-4 pt-6 pb-20" showsVerticalScrollIndicator={false}>
        {/* PHASE 1 Card */}
        <PhaseCard
          number={1}
          title="Hospital Bag & Prep"
          desc="Pack your bags and save important contacts"
          progressText={`${phase1Progress}% completed`}
          color="#F48B9E"
          onPress={() => navigation.navigate('Phase1Stack')}
          isLocked={false}
          completedMsg="Hospital bag ready. You are prepared."
          isComplete={phase1Progress === 100}
        />

        {/* PHASE 2 Card */}
        <PhaseCard
          number={2}
          title="Labour has started"
          desc="Decision tree, breathing guide, ride to hospital"
          progressText="Wait until time comes"
          color="#F77F6E"
          onPress={() => navigation.navigate('Phase2Screen')}
          isLocked={false}
          completedMsg="You made it to the hospital. Well done."
          isComplete={false}
        />

        {/* PHASE 3 Card */}
        <PhaseCard
          number={3}
          title="Post-Delivery"
          desc="Recovery in the hospital and baby basics"
          progressText="Review while resting"
          color="#48AD8F"
          onPress={() => navigation.navigate('Phase3Screen')}
          isLocked={false}
          completedMsg="Ready to go home with your baby."
          isComplete={false}
        />

        {/* PHASE 4 Card */}
        <PhaseCard
          number={4}
          title="Home Care"
          desc="Mother's routine, baby tracker, warning signs"
          progressText="Your essential guide at home"
          color="#E69E45"
          onPress={() => navigation.navigate('Phase4Screen')}
          isLocked={false}
          completedMsg="You are doing an incredible job."
          isComplete={false}
        />
        
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}

const PhaseCard = ({
  number, title, desc, progressText, color, onPress, isLocked, completedMsg, isComplete
}: any) => {
  return (
    <View className="mb-4">
      <TouchableOpacity
        className="bg-themeWhite rounded-2xl border-[0.5px] border-themeBorder border-l-[6px] p-5 shadow-sm"
        style={{ borderLeftColor: color, opacity: isLocked ? 0.6 : 1 }}
        onPress={isLocked ? undefined : onPress}
        activeOpacity={0.8}
      >
        <View className="flex-row justify-between items-start mb-2">
          <View className="bg-themeBg px-2.5 py-[3px] rounded-full flex-row items-center border-[0.5px] border-themeBorder" style={{ borderColor: color + '40' }}>
            <Text className="text-[11px] font-extrabold uppercase tracking-[0.5px]" style={{ color }}>
              Phase {number}
            </Text>
          </View>
          {isLocked && <Text className="text-[16px]">🔒</Text>}
        </View>

        <Text className="text-[20px] font-bold text-textPrimary tracking-[-0.3px] mb-1.5 leading-6">
          {title}
        </Text>
        
        <Text className="text-[14px] text-textSecondary leading-[21px] mb-5">
          {desc}
        </Text>

        <View className="flex-row justify-between items-center rounded-lg bg-themeBg p-3">
          <Text className="text-[12px] font-semibold text-textSecondary">
            {isLocked ? '🔒 Complete Phase 1 first' : progressText}
          </Text>
          {!isLocked && (
            <View className="w-6 h-6 rounded-full items-center justify-center" style={{ backgroundColor: color + '20' }}>
              <Text className="text-[14px] leading-5" style={{ color }}>›</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {isComplete && (
        <Text className="text-center text-[12px] font-bold text-greenText mt-3 ml-1 tracking-[0.2px]">
          ✨ {completedMsg}
        </Text>
      )}
    </View>
  );
};
