const game = () => {
  const playerMove = (m) => {
    playarea().loadResponses(m)
  }

  return {
    playerMove: playerMove,
  }
}
