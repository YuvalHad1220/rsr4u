import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return <h1>an error was logged in console</h1>;
};

export default ErrorPage;