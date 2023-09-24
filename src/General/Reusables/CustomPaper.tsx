import { Paper, PaperProps } from '@mui/material';
import React, { ReactNode } from 'react';


interface CustomPaperProps extends PaperProps {
  children: ReactNode;
}

const CustomPaper: React.FC<CustomPaperProps> = ({ children, sx, ...rest }) => {
  const defaultSx = {
    borderRadius: 5,
    boxShadow: 3,
    padding: 2,
  };

  return (
    <Paper sx={{ ...defaultSx, ...sx }} {...rest}>
            {children}
    </Paper>
  );
};

export default CustomPaper;