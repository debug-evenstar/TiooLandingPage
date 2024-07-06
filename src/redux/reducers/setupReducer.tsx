import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomInput, SetupSlicePayload } from "../../utils/dataTypes/auth";

const initialState = {
  naming: [] as CustomInput[],
  types: [] as string[]
} as SetupSlicePayload

export const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {
    saveNaming: (state, action: PayloadAction<CustomInput[]>) => {
      state.naming = action.payload;
    },
    saveTypes: (state, action: PayloadAction<string[]>) => {
        state.types = action.payload;
      },
    resetSetup: (state) => {
      state = initialState;
    },
  },
});

export const { saveNaming, saveTypes ,resetSetup } = setupSlice.actions;

export default setupSlice.reducer;