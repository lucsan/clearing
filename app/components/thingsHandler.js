const thingsHandler = () => {

/*
  Things in inventory
  Things in hand (head, chest, etc)
  Things in room

  Thing location, action, combines, property


*/


  const loadThings = () => {
    log('loading things')
    let things = thingsList
    for (id in things) {
      things[id].id = id
      if (things[id].locs == undefined) { things[id].locs = [] }
      //things[id].drop = () => {console.log(`You can drop this ${id} when I've coded it.`)}
    }
    return things
  }

  const loadCombos = () => {

    for (id in things) {
      if (things[id].combines == undefined ) continue
      let thing = things[id]
      for (needs of thing.combines.needs) {
        if (things[needs]['used in'] == undefined) { things[needs]['used in'] = [] }
        things[needs]['used in'].push(id)
      }
    }
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
      for (t in character.inventory) {
        let thing = character.inventory[t]
        found[list[id]] = false
        if (list[id] == thing.id) {
          found[list[id]] = true
          break
        }
      }
    }
    return found
  }

  const addToInventory = (id, remove) => {
    let thing = things[id]
    for (let loc in thing.locs) {
      if (character.location == thing.locs[loc]) {
        if (remove != false) {
          addInventoryActions(thing)
          thing.locs.splice(loc, 1)
          thing.locs.push('inv')
        }
        character.inventory[id] = thing
      }
    }
    playarea().placeThingsAtLocation()
    stage().displayThingsInList(character.inventory, 'inv', 'Inventory')
  }

  const addInventoryActions = (thing) => {
    thing.actions.inv['wear'] = () => {console.log('put in bod');}
  }

  const combineThings = (product) => {
    found = findThingsInInventory(product.combines.needs)
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

console.log('combining');

  // for (i in product.combines.destroys) {
  //   let id = product.combines.destroys[i]
  //   console.log(character.inventory[id]);
  //   // for (let l in character.inventory[id].locs) {
  //   //   character.inventory[id].locs
  //   // }
  //   .splice()
  //   //.splice()
  // }
  //   console.log(character.inventory);

// console.log(character.inventory.lint);
//     for (let i in required) {
//       let id = required[i]
//       console.log(id);
//       delete character.inventory.id
//     }
// console.log(character.inventory.lint);
    // for (id in required) {
    //   for (t in character.inventory) {
    //     if (required[id] == character.inventory[t].id) {
    //       character.inventory.splice(i, 1)
    //     }
    //   }
    // }

    // for (id in produces) {
    //   for (i in things) {
    //     if (i == produces[id]) {
    //       character.inventory.push(things[i])
    //       break
    //     }
    //   }
    // }

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
    combos: loadCombos,
    inventory: loadInventory,
    combine: combineThings,
    listActions: listActions,
    addToInventory: addToInventory,
  }
}
