import { Button, ButtonProps, CircularProgress } from "@mui/material";
import React from "react"; 

interface loadingButtonProps extends ButtonProps {
    loading: boolean,
}

const LoadingButton: React.FC<loadingButtonProps> = ({children, loading, ...rest}) => {
    return (
        <Button {...rest} disabled={loading}>{!loading ? children : <CircularProgress/>}</Button>
    )
};

export default LoadingButton;