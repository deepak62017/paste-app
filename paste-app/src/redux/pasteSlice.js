import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pates")
    ?
    JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.
        pastes));

      toast.success("Paste created successfully")
    },
    updateToPastes: (state, action) => {

    },
    resetAllPastes: (state, action) => {

    },
    removeFrompastes: (state, action) => {

    }
  },
})


export const { addToPaste, updateToPastes, resetAllPastes, removeFrompastes } = pasteSlice.actions

export default pasteSlice.reducer