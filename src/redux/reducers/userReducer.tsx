import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserMain, UserOtp, UserProfile } from "../../utils/dataTypes/auth";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    account_type: "",
  } as UserProfile,
  otp: {
    email: ""
  },
  parent: {}
} as UserMain

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    saveEmail: (state, action: PayloadAction<UserOtp>) => {
      state.otp = action.payload;
    },
    saveParent: (state, action: PayloadAction<any>) => {
      state.parent = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { saveUser, resetUser, saveEmail, saveParent } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;