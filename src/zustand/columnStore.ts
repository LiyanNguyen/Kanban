import { create } from 'zustand'

interface IColumnStore {
  todoColumnID: string
  setTodoColumnID: (val: string) => void
}

export const columnStore = create<IColumnStore>((set) => ({
  todoColumnID: '',
  setTodoColumnID: (val) => set(() => ({ todoColumnID: val })),
}))

