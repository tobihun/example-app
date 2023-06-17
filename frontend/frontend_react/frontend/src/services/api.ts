import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export interface PostAuth {
    token: string;
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set("Authorization", "token " + token);
            }
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (build) => ({
        // Authentication, posting username and password -> get token
        postLogin: build.mutation<PostAuth,{ username: string; password: string }>({
            query: (args) => ({
                url: "auth/login/",
                method: "POST",
                body: { username: args.username, password: args.password },
            }),
        }),
        postLogout: build.mutation({
            query: (args) => ({
                url: "auth/logout/",
                method: "POST",
            }),
        }),
    }),
});

export const apiRequests = apiSlice;
