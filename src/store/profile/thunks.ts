import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../services/profile";

export const fetchProfile = createAsyncThunk(
  "profile/getProfile",
  async (url: string, { rejectWithValue }
  ) => {
    try {
      const response = await getProfile(url);
      if (!response) {
        return rejectWithValue("Get error");
      }
      if (!response.data) {
        return rejectWithValue("Get no data returned");
      }
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });