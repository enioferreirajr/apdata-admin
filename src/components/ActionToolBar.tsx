// src/components/ActionToolbar.tsx
import React from 'react';
import { Typography } from '@mui/material';
import { StyledToolbar } from '../styles/ActionToolBar.styles';
import { ActionToolbarProps } from '../types/IActionToolBar';

const ActionToolbar: React.FC<ActionToolbarProps> = ({ title, children }) => {
  return (
    <StyledToolbar>
      <Typography variant="h6">{title}</Typography>
      <div>{children}</div>
    </StyledToolbar>
  );
};

export default ActionToolbar;
