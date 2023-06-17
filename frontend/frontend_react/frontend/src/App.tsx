import { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import Content from "./components/Content";
import Login from "./components/Login";
import Header from "./components/Header";

const App = () => {
    const user = useAppSelector(state => state.user)

    useEffect(() => {}, [user.isAuthenticated])

    if (user.isAuthenticated) {
        return (
            <>
                <Header/>
                <Content/>
            </>
        )
    } else {
        return (
            <Login/>
        )
    }
};

export default App;
