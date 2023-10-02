import { Paper, PaperProps } from '@mui/material';
import React from 'react';

const CustomPaper: React.FC<PaperProps> = ({ children, sx, ...rest }) => {
  const defaultSx = {
    borderRadius: 3,
    boxShadow: 1.2,
    padding: 2,
  };

  return (
    <Paper sx={{ ...defaultSx, ...sx }} {...rest}>
            {children}
    </Paper>
  );
};

export default CustomPaper;