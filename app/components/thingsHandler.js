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

  const combineThings = (required, produces) => {
    let found = {}
    for (id in required) {
      //console.log(required[id]);
      for (t of character.inventory) {
        //console.log(t.id);
        found[required[id]] = false
        if (required[id] == t.id) {
          found[required[id]] = true
          break
        }
      }
    }
    console.log('found ', found);
    let missing = ''
    for (t in found) {
      if (found[t] === false) {
        missing += t + ','
      }
    }
    if (missing.length > 0) {
      console.log('missing', missing);
      return `missing $${missing}`
    }

    // add new things to inv
    // remove required things from inv
//console.log(character.inventory);
    for (id in required) {
      for (i in character.inventory) {
        if (required[id] == character.inventory[i].id) {
          character.inventory.splice(i, 1)
        }
      }
    }
    for (id in produces) {
      for (i in things) {
        if (i == produces[id]) {
          character.inventory.push(things[i])
          break
        }
      }
      //
    }
    console.log(character.inventory);
    stage().inventory(character.inventory)
  }

  return {
    things: loadThings,
    inventory: loadInventory,
    create: combineThings,
  }
}
