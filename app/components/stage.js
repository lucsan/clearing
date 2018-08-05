const stage = () => {

  const makeDisplays = () => {
    el(undefined, 'display', 'playerDetails').div()
    el(undefined, 'display', 'charactersDetails').div()
    el(undefined, 'display', 'Inventory').div()
    el(undefined, 'display', 'playArea').div()
    el(undefined, 'display', 'controls').div()
    el(undefined, 'display', 'testArea').div()
  }

  return {
    makeDisplays: makeDisplays,
  }
}
