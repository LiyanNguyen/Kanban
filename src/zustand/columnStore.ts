import { create } from 'zustand'
import { column } from '../types/column'
import { BoardData } from '../data/BoardData'

interface IColumnStore {
  columns: column
  todoColumnID: string

  setColumns: (val: column) => void
  setTodoColumnID: (val: string) => void
}

export const columnStore = create<IColumnStore>((set) => ({
  columns: BoardData,
  todoColumnID: '',
  
  setColumns: (val) => set(() => ({ columns: val })),
  setTodoColumnID: (val) => set(() => ({ todoColumnID: val })),
}))

