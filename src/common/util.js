const getPairPlayers = (playersList, sumHeights) => {
  const arrPairPlayers = [];
  const numSumHeights = Number(sumHeights);

  for (let i = 0; i < playersList.length - 1; i += 1) {
    const player1Height = Number(playersList[i].h_in);

    for (let j = i + 1; j < playersList.length; j += 1) {
      if (player1Height + Number(playersList[j].h_in) === numSumHeights) {
        arrPairPlayers.push([playersList[i], playersList[j]]);
      }
    }
  }

  return arrPairPlayers;
};

const isValidPlayerHeight = (height) => {
  let isError = false;
  let valueError = '';

  if (!height.length) {
    return [isError, valueError];
  }

  const numHeight = Number(height);
  if (Number.isNaN(numHeight)) {
    isError = true;
    valueError = 'Please validate your number!';
    return [isError, valueError];
  }

  if (numHeight < 1) {
    isError = true;
    valueError = 'Are you crazy?';
    return [isError, valueError];
  }

  if (numHeight < 100) {
    isError = true;
    valueError = 'Hey! NBA players are not exactly petite!';
    return [isError, valueError];
  }

  if (numHeight > 180) {
    isError = true;
    valueError = 'Hey! NBA players are human!';
    return [isError, valueError];
  }

  return [isError, valueError];
};

export { isValidPlayerHeight, getPairPlayers };
