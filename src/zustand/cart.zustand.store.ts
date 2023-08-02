import {create} from 'zustand'

import { Item } from '../../typings';
export type TempOrderState={
	tempOrder:Item[],
    addToTempOrder: (items:any)=> void;
	setInitialTempOrder: (order:	Item) => void;
	//setLoading: (bool: boolean) => void;
	//setError: (err: string) => void;
	//setUser: (user: User) => void;
}

export const useCartStore = create<TempOrderState>((set) => ({
	tempOrder:[],
	addToTempOrder: (items:any) => set((state:TempOrderState) => ({ tempOrder: [...state.tempOrder, items] })),
	setInitialTempOrder: (order:Item) => set(state => ({ tempOrder: [order] })),
}))