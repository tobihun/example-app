import { Box, Button, Grid, Typography } from "@mui/material";
import { apiRequests } from "../services/api";
import { userActions } from "../features/user";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";

const Header = () => {
    const dispatch = useAppDispatch();

    const [
        postLogout,
        { isLoading, isSuccess, isError, data: dataPostLogout },
    ] = apiRequests.usePostLogoutMutation();

    const handleLogout = () => {
        postLogout({});
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(userActions.logout());
        }
    }, [isSuccess]);

    return (
        <Box
            height={90}
            sx={{ backgroundColor: "secondary.main", flexGrow: 1 }}
        >
            <Grid container>
                <Grid item xs={10}>
                    <Typography
                        variant="h4"
                        align="left"
                        sx={{ padding: (theme) => theme.spacing(3) }}
                    >
                        Content
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        onClick={handleLogout}
                        fullWidth
                        disabled={isLoading}
                        size="small"
                        sx={{ margin: (theme) => theme.spacing(3.5) }}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
