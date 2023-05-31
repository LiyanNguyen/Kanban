import { create } from 'zustand'
import { column } from '../types/column'
import { BoardData } from '../data/BoardData'

interface IboardStore {
  boardData: column
  boards: string[]
  boardIndex: number
  setBoards: (newBoards: string[]) => void
  setBoardIndex: (newBoardIndex: number) => void
  setBoardData: (newBoardIndex: column) => void
}

export const boardStore = create<IboardStore>((set) => ({
  boardData: BoardData, //fake data first, same data for all boards for now
  boards: ['Platform Launch', 'Marketing Plan', 'Roadmap',],
  boardIndex: 0,
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
  setBoardIndex: (newBoardIndex) => set(() => ({ boardIndex: newBoardIndex })),
  setBoardData: (newBoardData) => set(() => ({ boardData: newBoardData })),
}))

