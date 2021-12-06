import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Grid, Typography } from '@mui/material';

import { getPairPlayers } from '../../common/util';

const PlayersList = function Header({ playersList, sumHeights }) {
  const [arrFoundPlayers, setArrFoundPlayers] = useState([]);
  const [arrFoundPlayersToPaint, setArrFoundPlayersToPaint] = useState([]);

  useEffect(() => {
    if (sumHeights) {
      const foundPlayers = getPairPlayers(playersList, sumHeights);
      const foundPlayersToPaint = foundPlayers.slice(0, 50);
      setArrFoundPlayers(foundPlayers);
      setArrFoundPlayersToPaint(foundPlayersToPaint);
    }
  }, [sumHeights]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #cc2b31',
        borderTop: '1px solid #cc2b31',
        color: 'white',
        p: 2,
        width: '100%'
      }}
    >
      <Alert severity="error">
        <strong>Number of Players:</strong> {playersList?.length}
        &nbsp; - &nbsp; <strong>Number of Pairs Found:</strong> {arrFoundPlayers?.length}
      </Alert>

      {arrFoundPlayersToPaint.map((player) => (
        <Grid item xs={6}>
          <Typography
            gutterBottom
            key={`${player[0].first_name}-${player[1].first_name}`}
            sx={{
              borderBottom: '1px dotted gray',
              color: '#cc2b31',
              paddingBottom: '10px',
              paddingTop: '10px',
              textDecoration: 'bold'
            }}
            variant="body2"
          >
            {player[0].first_name} {player[0].last_name}{' '}
            <small>
              <em>({player[0].h_in} inches)</em>
            </small>{' '}
            - {player[1].first_name} {player[1].last_name}{' '}
            <small>
              <em>({player[1].h_in} inches)</em>
            </small>
          </Typography>
        </Grid>
      ))}

      {arrFoundPlayers.length > arrFoundPlayersToPaint.length && (
        <Alert
          severity="info"
          sx={{
            marginBottom: '10px',
            marginTop: '10px'
          }}
        >
          Because of the big list we print only{' '}
          <strong>{arrFoundPlayersToPaint.length} players</strong>.
        </Alert>
      )}
    </Grid>
  );
};

PlayersList.propTypes = {
  playersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  sumHeights: PropTypes.string.isRequired
};

export default PlayersList;
