const thingsHandler = () => {

  const loadThings = () => {
    let things = thingsList
    for (t in things) {
      things[t].id = t
    }
    return things
  }

  const loadInventory = () => {
    let inv = []
    for (t in things) {
      let thing = things[t]
      if (thing.locs != null) {
        for (l of thing.locs) {
          if (l == 'inv') {
            inv.push(thing)
          }
        }
      }
    }
    return inv
  }

  return {
    things: loadThings,
    inventory: loadInventory,
  }
}
