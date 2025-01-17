import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "RoBiN",
    email: "robin@gmail.com",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
})

export default userSlice.reducer;