import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../services/profile";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (arg: void, { rejectWithValue }
  ) => {
    try {
      const response = await getProfile("/profile");
      if (!response || !response.data) {
        return rejectWithValue("Get no data returned");
      }
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });