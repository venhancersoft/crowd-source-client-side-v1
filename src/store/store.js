import create from 'zustand'
import {persist} from 'zustand/middleware';

export const useStore = create(persist(set => ({
    auth: null,
    setStoreState: (newState) => set((state) => ({...state, ...newState})),
}),{
    name: 'crowd-source',
    getStorage: () => sessionStorage,
}))