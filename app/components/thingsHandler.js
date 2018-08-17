const thingsHandler = () => {

/*
  Things in inventory
  Things in hand (head, chest, etc)
  Things in room

  Thing location, action, combines, property


*/


  const loadThings = () => {
    let things = thingsList
    for (id in things) {
      things[id].id = id
      //things[id].drop = () => {console.log(`You can drop this ${id} when I've coded it.`)}
    }
    return things
  }

  const addThingsToList = (listOfThingsToAdd, listToAddThingsTo = []) => {
    for (t in listOfThingsToAdd) {
      let thing = things[t]
      if (thing.locs != null) {
        for (l of thing.locs) {
          if (l == 'inv') {
            listToAddThingsTo.push(thing)
          }
        }
      }
    }
    return listToAddThingsTo
  }

  const loadInventory = () => {
     return addThingsToList(things)
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

  const addToInventory = (id, remove) => {

    for (let i in things[id].locs) {
      if (character.location == things[id].locs[i]) {
        if (remove != false) {
          things[id].locs.splice(i, 1)
        }
        character.inventory[id] = things[id]
      }
    }
    playarea().placeThingsAtLocation()
    stage().displayThingsInList(character.inventory, 'inv', 'Inventory')
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


  const listNeeds = (thing) => {

  }

  const listActions = (thing) => {
    if (thing.actions == undefined) return
    return thing.actions
    // let actions = {}
    // if (thing.actions == undefined) return actions
    // for (let action in thing.actions) {
    //   actions.action = thing.actions[action]})
    // }
    // console.log(actions);
    // return actions
  }



  return {
    things: loadThings,
    inventory: loadInventory,
    create: combineThings,
    listActions: listActions,
    addToInventory: addToInventory,
  }
}
