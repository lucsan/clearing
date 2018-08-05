const thingsHandler = () => {

  const loadThings = () => {
    let things = thingsList
    for (id in things) {
      things[id].id = id
      things[id].drop = () => {console.log(`You can drop this ${id} when I've coded it.`)}
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

  const createThingwithThings = (id1, id2) => {

  }

  return {
    things: loadThings,
    inventory: loadInventory,
    create: createThingwithThings,
  }
}
