import { create } from 'zustand'

interface IboardStore {
  boards: string[]
  boardIndex: number
  setBoards: (newBoards: string[]) => void
  setBoardIndex: (newBoardIndex: number) => void
}

export const boardStore = create<IboardStore>((set) => ({
  boards: ['Platform Launch', 'Marketing Plan', 'Roadmap',],
  boardIndex: 0,
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
  setBoardIndex: (newBoardIndex) => set(() => ({ boardIndex: newBoardIndex })),
}))

