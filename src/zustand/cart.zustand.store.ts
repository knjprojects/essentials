import { Item } from '../../typings';
import {create} from 'zustand'
import { configurePersist } from 'zustand-persist';
//this fikle adds data to zustand state manam=ger=, then immediately afterwarsds,
//creates universal local values for offline storage on device using async storage.


//import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-community/async-storage'
const { persist, purge } = configurePersist({
	storage:AsyncStorage, // use `AsyncStorage` in react native
	rootKey: 'root', // optional, default value is `root`
  })

export type TempOrderState = {
  tempOrder: Item[];
  addToTempOrder: (items: Item) => void;
  setInitialTempOrder: (order: Item) => void;
};

export const useCartStore = create<TempOrderState>(
	
	(set) => ({
  tempOrder: [],
  addToTempOrder: (items: Item) =>
    set((state: TempOrderState) => {
      // Update the state
      const updatedTempOrder = [...state.tempOrder, items];
      // Save the updated state to AsyncStorage
      AsyncStorage.setItem('tempOrder', JSON.stringify(updatedTempOrder)).catch((error) => {
        console.error('Error saving tempOrder to AsyncStorage:', error);
      });
      return { tempOrder: updatedTempOrder };
    }),
  setInitialTempOrder: (order: Item) =>
    set((state) => {
      // Set the initial order
      const initialTempOrder = [order];
      // Save the initial order to AsyncStorage
      AsyncStorage.setItem('tempOrder', JSON.stringify(initialTempOrder)).catch((error) => {
        console.error('Error saving initial tempOrder to AsyncStorage:', error);
      });
      return { tempOrder: initialTempOrder };
    }),
}));

