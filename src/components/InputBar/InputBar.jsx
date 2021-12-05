import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import isValidPlayerHeight from '../../common/utils';

const SearchBar = function SearchBar() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [inputTextIsError, setInputIsError] = useState(false);
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputTextValueError, setInputTextValueError] = useState('');

  const handleTextInputChange = (event) => {
    setInputTextValue(event.target.value);
  };

  const validatePlayerHeight = () => {
    const [isError, valueError] = isValidPlayerHeight(inputTextValue);
    setInputIsError(isError);
    setInputTextValueError(valueError);
    setButtonDisabled(!inputTextValue.length || isError);
  };

  useEffect(() => {
    validatePlayerHeight(inputTextValue);
  }, [inputTextValue]);

  return (
    <Grid item sx={{ paddingBottom: 3, width: 1 }}>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #0253a5',
          borderTop: '1px solid #0253a5',
          color: 'white',
          p: 2
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4} sx={{ textAlign: 'right' }}>
            <Typography
              gutterBottom
              style={{ color: '#0253a5', textDecoration: 'bold' }}
              variant="p"
            >
              Desired sum of heights (Ex: 139):
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'left' }}>
            <TextField
              autoFocus
              error={inputTextIsError}
              fullWidth
              helperText={inputTextValueError}
              id="sumHeights"
              label="Players Heights"
              onChange={handleTextInputChange}
              type="number"
              value={inputTextValue}
            />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'left' }}>
            <Button color="error" disabled={buttonDisabled} variant="outlined">
              Search Players
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SearchBar;
