const game = () => {
  const playerMove = (m) => {
    let r = analyse(m)
    playarea().loadResponses(r)
  }

  const analyse = (m) => {
    let response = ""

    let actions = {}
    for (o in things) {
      if (typeof(things[o].actions) != 'undefined') {
        for (a in things[o].actions) {
          actions[a] = a
        }
      }
    }
    
    if (typeof(actions[m]) != 'undefined') {
      console.log('found');
    }


    response = m
    return response
  }

  return {
    playerMove: playerMove,
  }
}
