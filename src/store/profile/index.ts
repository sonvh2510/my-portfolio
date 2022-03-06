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
    address: "",
    age: 0,
    avatar: "/images/avatar.jpeg",
    email: "sonvh2510@gmail.com",
    name: "Vũ Hoàng Sơn",
    phone: "",
    residence: "Việt Nam",
    socials: [
      {
        type: "LinkedIn",
        url: "https://www.linkedin.com/in/sonvh2510"
      },
      {
        type: "Github",
        url: "https://github.com/sonvh2510"
      },
      {
        type: "Facebook",
        url: "https://www.facebook.com/sonvh2510"
      }
    ],
    title: "Frontend Developer",
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
          socials: [],
          address: "",
          age: 0,
          email: "",
        };
        state.loading = false;
      });
  },
});

// export const {} = profileSlice.actions;
export default profileSlice.reducer;