import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

const initialState = {
  connected: false,
  address: '',
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connect: (state, action: PayloadAction<typeof initialState>) => {
      state.connected = action.payload.connected
      state.address = action.payload.address
      return state
    },
  },
})

export const { connect } = walletSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWallet = (state: RootState) => state.wallet

export default walletSlice.reducer
