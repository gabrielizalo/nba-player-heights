import React from 'react';
import { Alert, CircularProgress, Grid } from '@mui/material';

const Loading = function Header() {
  return (
    <Grid item sx={{ marginBottom: 10, marginTop: 10 }}>
      <Alert variant="outlined" severity="info">
        Loading...
        <br />
        <br />
        <CircularProgress />
      </Alert>
    </Grid>
  );
};

export default Loading;
