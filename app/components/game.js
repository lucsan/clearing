const game = () => {

  // const playerMove = (m) => {
  //   let r = analyse(m)
  //   playarea().loadResponses(r)
  // }

  const playerMove = (m) => {
    // Check player can move to that exit
    // find place exit leads to
    // move player

  }

  const analyse = (m) => {
    let response = ""


    response = m
    return response
  }

  const gatherActionsAtLocation = () => {
    let actions = {}
    for (o in things) {
      let t = things[o]
      if (typeof(t.actions) != 'undefined') {
        if (typeof(t.locs) != 'undefined') {
          for (let l of t.locs) {
            if (l == character.location) {
              for (a in t.actions) {
                actions[a] = t.actions[a]
              }
            }
          }
        }
      }
    }
    return actions
  }

  const getThing = (o) => {
    console.log(o);
  }

  return {
    getThing: getThing,
    gatherActions: gatherActionsAtLocation,
    playerMove: playerMove,
  }
}
