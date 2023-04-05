import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Создание asyncThunk для отправки запроса на бэкэнд
export const updateProfile = createAsyncThunk(
  "profile/update",
  async (data) => {
    const response = await axios.put("/api/profile", data);
    return response.data;
  }
);

// Создание slice с reducer и asyncThunk
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    dateOfBirth: "",
    citizenOf: "",
    phoneNumber: "",
    countryOfTaxResidence: "",
    legalStatus: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
      country: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      // Обновляем поля профиля в сторе
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export default profileSlice.reducer;
