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

  const findThingsInInventory = (list) => {
    let found = {}
    for (id in list) {
      for (t of character.inventory) {
        found[list[id]] = false
        if (list[id] == t.id) {
          found[list[id]] = true
          break
        }
      }
    }
    return found
  }

  const combineThings = (required, produces) => {
    found = findThingsInInventory(required)
    let missing = ''
    for (t in found) {
      if (found[t] === false) {
        missing += things[t].desc + ' '
      }
    }
    if (missing.length > 0) {
      console.log('missing', missing);
      return `missing; ${missing}`
    }

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

    }
    stage().inventory(character.inventory)
  }

  return {
    things: loadThings,
    inventory: loadInventory,
    create: combineThings,
  }
}
