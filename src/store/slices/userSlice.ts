import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string;
};

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.dateOfBirth = action.payload.dateOfBirth || "";
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
