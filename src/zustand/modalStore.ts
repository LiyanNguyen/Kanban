import { create } from 'zustand'

interface IModalStore {
  openTaskModal: boolean
  setOpenTaskModal: (val: boolean) => void
}

export const modalStore = create<IModalStore>((set) => ({
  openTaskModal: false,
  setOpenTaskModal: (val) => set(() => ({ openTaskModal: val })),
}))
