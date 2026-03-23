import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageKey = 
  | 'bag_checked' 
  | 'docs_checked' 
  | 'contacts_checked'
  | 'p2_checked'
  | 'p3_items_checked'
  | 'p3_discharge_checked'
  | 'p4_checked';

export function useChecklist(key: StorageKey): [Set<number>, (id: number) => void, () => void] {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(key).then((val) => {
      if (val) {
        try {
          const arr: number[] = JSON.parse(val);
          setChecked(new Set(arr));
        } catch {}
      }
      setLoaded(true);
    });
  }, [key]);

  const toggle = useCallback(
    (id: number) => {
      setChecked((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        AsyncStorage.setItem(key, JSON.stringify([...next]));
        return next;
      });
    },
    [key]
  );

  const resetAll = useCallback(() => {
    setChecked(new Set());
    AsyncStorage.removeItem(key);
  }, [key]);

  return [checked, toggle, resetAll];
}
