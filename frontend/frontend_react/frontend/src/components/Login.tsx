import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { apiRequests } from "../services/api";
import { userActions } from "../features/user";
import { Box, Button, TextField, Typography } from "@mui/material";
import { StyledLoginContainer } from "../styles/styledLoginContainer";

const Login = () => {
    const [helperText, setHelperText] = useState<string | undefined>(undefined);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useAppDispatch();

    const [postLogin, { isLoading, isSuccess, isError, data: dataPostLogin }] =
        apiRequests.usePostLoginMutation();

    const handleLogin = () => {
        postLogin({ username, password });
    };
    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value);
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    useEffect(() => {
        if (isLoading) {
            setHelperText("Waiting");
        } else if (isSuccess && dataPostLogin?.token) {
            dispatch(userActions.login(dataPostLogin.token));
            setHelperText("Login successfull");
        } else if (isError) {
            setHelperText("Login failed. Incorrect username or password?");
        }
    }, [isLoading, isSuccess, isError]);

    return (
        <StyledLoginContainer>
            <Box
                sx={{
                    backgroundColor: "secondary.light",
                    padding: (theme) => theme.spacing(4),
                    borderRadius: (theme) => theme.spacing(1),
                    boxShadow: (theme) => theme.shadows[3],
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    height={40}
                    sx={{ marginBottom: (theme) => theme.spacing(2) }}
                >
                    Example App
                </Typography>
                <TextField
                    type="text"
                    label="Username"
                    value={username}
                    onChange={handleChangeUsername}
                    fullWidth
                    sx={{ marginBottom: (theme) => theme.spacing(2) }}
                />
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}
                    fullWidth
                    helperText={helperText}
                    sx={{ marginBottom: (theme) => theme.spacing(2) }}
                />
                <Button
                    variant="contained"
                    onClick={handleLogin}
                    fullWidth
                    disabled={isLoading}
                    sx={{ marginBottom: (theme) => theme.spacing(2) }}
                >
                    Login
                </Button>
            </Box>
        </StyledLoginContainer>
    );
};

export default Login;
