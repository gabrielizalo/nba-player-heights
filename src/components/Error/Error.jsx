import React from 'react';
import PropTypes from 'prop-types';

import { Alert, Grid } from '@mui/material';

const Error = function Header({ error }) {
  return (
    <Grid item sx={{ marginBottom: 10, marginTop: 10 }}>
      <Alert variant="filled" severity="error">
        There is an error with the request. Please return later.
        <br />
        {error.message}
      </Alert>
    </Grid>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
