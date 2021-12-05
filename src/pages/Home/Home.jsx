import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import nbaPlayersHBackground from '../../assets/nba-player-heights-bg.jpg';

const Home = function Home() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${nbaPlayersHBackground})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container maxWidth="md">
        <Grid
          alignItems="center"
          container
          direction="column"
          justifyContent="center"
          sx={{
            p: 2
          }}
        >
          <Header />
          <Footer />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
