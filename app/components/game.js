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

    // if (typeof(actions[m]) != 'undefined') {
    //   console.log('found');
    // }
  }

  const getThing = (o) => {
    console.log(o);
  }

  const addToInventory = (id, remove) => {





      for (let i in things[id].locs) {
        if (character.location == things[id].locs[i]) {
          if (remove != false) {
            things[id].locs.splice(i, 1)
          }
          character.inventory.push(id)
        }
      }

      console.log(things[id]);

    console.log(character.inventory);

  }

  const listInventory = () => {
    console.log(character.inventory);
  }


  return {
    getThing: getThing,
    addToInventory: addToInventory,
    gatherActions: gatherActionsAtLocation,
    listInventory: listInventory,
    playerMove: playerMove,
  }
}
