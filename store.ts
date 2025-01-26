import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { replace } from './navigationRef'

interface AuthState {
  isAuthenticated: boolean
  userEmail: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  userEmail: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.userEmail = action.payload

      // Navigate to HomeScreen
      replace('Home') // Use the new replace function
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.userEmail = null

      // Navigate to LoginScreen
      replace('Login') // Use the new replace function
    },
  },
})

export const { login, logout } = authSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
