import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("userData/fetch", async () => {
  const response = await axios.get("https://api.example.com/user");
  return response.data;
});
