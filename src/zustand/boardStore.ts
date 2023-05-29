import { create } from 'zustand'
import { task } from '../types/task'
import boardData from '../data/boardData'

interface IboardStore {
  boardData: task []
  boards: string[]
  boardIndex: number
  setBoards: (newBoards: string[]) => void
  setBoardIndex: (newBoardIndex: number) => void
}

export const boardStore = create<IboardStore>((set) => ({
  boardData: boardData, //fake data first, same data for all boards for now
  boards: ['Platform Launch', 'Marketing Plan', 'Roadmap',],
  boardIndex: 0,
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
  setBoardIndex: (newBoardIndex) => set(() => ({ boardIndex: newBoardIndex })),
}))

