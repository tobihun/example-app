import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    isAuthenticated: boolean;
    token: string | undefined
}

const initialState: UserState = {
    isAuthenticated: false,
    token: undefined
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, token: PayloadAction<string>) {
            state.isAuthenticated = true;
            state.token = token.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
