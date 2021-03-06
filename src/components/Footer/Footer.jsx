import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

import nbaPlayerHeightsLogoGitHub from '../../assets/nba-player-heights-icon-github.png';

const Footer = function Footer() {
  const metaAppVersion = document.querySelector('meta[name="app-version"]').content;
  const appVersion = metaAppVersion !== '%APP_VERSION%' ? `v${metaAppVersion}` : 'v#';
  const metaBuildVersion = document.querySelector('meta[name="build-version"]').content;
  const appYear =
    metaBuildVersion !== '%BUILD_VERSION%' ? metaBuildVersion.substring(0, 4) : '2021';

  return (
    <Grid item sx={{ marginTop: 5 }}>
      <footer>
        <Typography variant="body1" align="center">
          Just a simple React exercise by &nbsp;
          <Link href="https://twitter.com/gabrielizalo">Gabriel Porras</Link> - {appYear}
          {appVersion && (
            <span>
              {' '}
              -{' '}
              <Link href="https://github.com/gabrielizalo/nba-player-heights/releases">
                {appVersion}
              </Link>
            </span>
          )}
          <br />
          <Link href="https://github.com/gabrielizalo/nba-player-heights">
            <img alt="NBA Players Heights GitHub" src={nbaPlayerHeightsLogoGitHub} />
          </Link>
        </Typography>
      </footer>
    </Grid>
  );
};

export default Footer;
