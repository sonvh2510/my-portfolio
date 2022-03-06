import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfile } from "./thunks";
import { Profile } from "../../interfaces/profile.interface";

interface ProfileState {
  loading: boolean,
  data: Profile
}

const profileState: ProfileState = {
  loading: false,
  data: {
    name: "",
    title: "",
    avatar: "",
    socials: []
  }
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state: ProfileState) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state: ProfileState, action: PayloadAction<Profile>) => {
        state.data = { ...action.payload };
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state: ProfileState) => {
        state.data = {
          name: "",
          avatar: "",
          title: "",
          socials: []
        };
        state.loading = false;
      });
  },
});

// export const {} = profileSlice.actions;
export default profileSlice.reducer;