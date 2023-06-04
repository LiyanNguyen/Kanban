import { create } from 'zustand'

interface ISnackbarStore {
  openSnackbar: boolean
  setOpenSnackbar: (val: boolean) => void
}

export const snackbarStore = create<ISnackbarStore>((set) => ({
  openSnackbar: false,
  setOpenSnackbar: (val) => set(() => ({ openSnackbar: val })),
}))
