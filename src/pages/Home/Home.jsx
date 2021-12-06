import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Box, Container, Grid } from '@mui/material';

import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InputBar from '../../components/InputBar/InputBar';
import Loading from '../../components/Loading/Loading';
import PlayersList from '../../components/PlayersList/PlayersList';
import nbaPlayersHBackground from '../../assets/nba-player-heights-bg.jpg';

const Home = function Home() {
  const [sumHeights, setSumHeights] = useState('');
  const { isLoading, isError, data, error } = useQuery('playersHeights', () =>
    fetch('https://mach-eight.uc.r.appspot.com/').then((res) => res.json())
  );

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
          {isError && !isLoading && <Error error={error} />}
          {isLoading && !isError && <Loading />}
          {!isLoading && !isError && (
            <>
              <InputBar setSumHeights={setSumHeights} />
              {sumHeights && data && data?.values.length > 0 && (
                <PlayersList playersList={data.values} sumHeights={sumHeights} />
              )}
            </>
          )}
          <Footer />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
