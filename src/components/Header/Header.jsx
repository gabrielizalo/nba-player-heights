import React from 'react';
import { Grid } from '@mui/material';

import nbaPlayerHeightsHeader from '../../assets/nba-player-heights-header.jpg';

const Header = function Header() {
  return (
    <Grid item sx={{ marginBottom: 2 }}>
      <header>
        <img alt="NBA Player Heights" src={nbaPlayerHeightsHeader} width="100%" />
      </header>
    </Grid>
  );
};

export default Header;
