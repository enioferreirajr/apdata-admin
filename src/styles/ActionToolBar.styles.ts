// src/styles/ActionToolBar.styles.ts
import { styled, Box } from '@mui/material';

export const StyledToolbar = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[1],
  minHeight: '48px',
}));
