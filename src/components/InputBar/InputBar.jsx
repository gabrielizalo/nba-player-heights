import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import { isValidPlayerHeight } from '../../common/util';

const SearchBar = function SearchBar({ setSumHeights }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [inputTextIsError, setInputIsError] = useState(false);
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputTextValueError, setInputTextValueError] = useState('');

  const handleButtonClick = () => {
    setSumHeights(inputTextValue);
  };

  const handleTextInputChange = (event) => {
    setInputTextValue(event.target.value);
  };

  const handleTextInputKeyPress = (event) => {
    if (event.key === 'Enter' && !buttonDisabled) {
      handleButtonClick();
    }
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
              variant="Body1"
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
              onKeyPress={handleTextInputKeyPress}
              type="number"
              value={inputTextValue}
            />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'left' }}>
            <Button
              color="error"
              disabled={buttonDisabled}
              onClick={handleButtonClick}
              variant="outlined"
            >
              Search Players
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

SearchBar.propTypes = {
  setSumHeights: PropTypes.func.isRequired
};

export default SearchBar;
