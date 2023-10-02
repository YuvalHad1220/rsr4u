import { Button, ButtonProps, CircularProgress } from "@mui/material";
import React, { useState } from "react"; 

interface loadingButtonProps extends ButtonProps {
    loading: boolean,
}

const LoadingButton: React.FC<loadingButtonProps> = ({children, loading, ...rest}) => {
    const [loading1, setLoading] = useState(false);

    const onClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    };

    return (
        <Button {...rest} onClick={onClick} disabled={loading1}>{!loading1 ? children : <CircularProgress/>}</Button>
    )
};

export default LoadingButton;