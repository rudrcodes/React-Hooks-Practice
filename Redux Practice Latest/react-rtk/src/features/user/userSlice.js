import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//function to perform async operations
//We don't have to take care of generating actions for fullfilled,pending or rejected requests.
//createAsyncThunk generates fullfilled,pending or rejected actions
export const fetchUsers = createAsyncThunk("user/fetchUsers", () =>
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.data;
  })
);
// const funct = () => ({
//   // console.log("rudr")

//   a: 2,
// });
// console.log(funct());

//slice
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export default userSlice.reducer;
