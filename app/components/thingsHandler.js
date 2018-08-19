const thingsHandler = () => {

/*
  Things in inventory
  Things in hand (head, chest, etc)
  Things in room

  Thing location, action, combines, property


*/


  //
  // const bag = (id) => {
  //   console.log(`you can hold the ${id} when I code hold.`);
  // }

  const loadThing = (thing) => {
    if (thing.locs == undefined) thing.locs = []
    if (thing.actions == undefined) thing.actions = {}
    if (thing.actions.inv == undefined) thing.actions.inv = {}
    if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { actions().drop(thing.id) }
    //if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { removeThingFromInventory(thing.id, 'env') }
    //if (thing.actions.inv.hold == undefined) thing.actions.inv.hold = () => { removeThingFromInventory(thing.id, 'bod') }
  }

  const loadThings = () => {
    log('loading things')
    let things = thingsList
    for (id in things) {
      let thing = things[id]
      thing.id = id
      loadThing(thing)
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

  const moveThingFromContainerToContainer = (id, currentId, targetId) => {
    if (removeThingFromContainer(id, currentId) === false) return
    addThingToContainer(id, targetId)
    tools().storeData(character.name, character)
    stage().displayThingsInContainers()
  }

  const removeThingFromContainer = (id, containerId) => {
    switch (containerId) {
      case 'inv': return removeThing(id, character.inventory)
      case 'env': return removeThing(id, character.places[character.location])
      case 'bod': return removeThing(id, character.body)
      default: return false
    }
  }

  const addThingToContainer = (id, containerId) => {
    switch (containerId) {
      case 'inv': addThing(id, character.inventory)
      case 'env': addThing(id, character.places[character.location])
      case 'bod': addThing(id, character.body)
      default: return
    }
  }

  const addThing = (id, container) => {
    container.push(id)
  }

  const removeThing = (id, container) => {
    for (let i in container) {
      if (container[i] == id) {
        container.splice(i, 1)
        return true
      }
    }
    return false
  }

  // const removeThingFromInventory = (id, newLocation) => {
  //   for (let i in character.inventory) {
  //     if (character.inventory[i] == id) {
  //       character.inventory.splice(i, 1)
  //       return true
  //     }
  //   }
  //   return false
  // }
  //
  // const removeThingFromLocation = (id) => {
  //   for (let i in character.places[character.location]) {
  //     if (character.places[character.location][i] == id) {
  //       character.places[character.location].splice(i, 1)
  //       return true
  //     }
  //   }
  //   return false
  // }


  // const addThingToInventory = (id, currentContainer) => {
  //   if (removeThingFromLocation(id, currentContaner) === false) return
  //   character.inventory.push(id)
  //
  //   tools().storeData(character.name, character)
  //   stage().placeThingsAtLocation()
  //   stage().displayThingsInList(character.inventory, 'inv', 'Inventory')
  // }

  // const addThingsToBody = (id) => {
  //   character.body.push(id)
  // }

  // const addThingToLocation = (id) => {
  //   character.places[character.location].push(id)
  // }

  // const addThingsToList = (listOfThingsToAdd, listToAddThingsTo = []) => {
  //   for (t in listOfThingsToAdd) {
  //     let thing = things[t]
  //     if (thing.locs != null) {
  //       for (l of thing.locs) {
  //         if (l == 'inv') {
  //           listToAddThingsTo.push(thing)
  //         }
  //       }
  //     }
  //   }
  //   return listToAddThingsTo
  // }

  // const loadInventory = () => {
  //    return addThingsToList(things)
  // }

  // const removeThingFromInventory = (id, newLocation) => {
  //   if (newLocation == undefined || newLocation == 'inv') return
  //   let thing = things[id]
  //   let items = character.inventory
  //   for (let i in items) {
  //     if (items[i] == id) {
  //       character.inventory.splice(i, 1)
  //       break
  //     }
  //   }
  //   switch (newLocation) {
  //     case 'env': addThingToLocation(id)
  //     case 'bod': ''
  //   }
  //
  //   stage().displayThingsInList(character.inventory, 'inv', 'Inventory')
  //   stage().placeThingsAtLocation()
  //   console.log(`You can drop this ${thing.id} when I've coded it.`)
  // }

  // const removeThingFromLocation = (id) => {
  //   let items = character.places[character.location]
  //   for (let i in items) {
  //     if (items[i] == id) {
  //       character.places[character.location].splice(i, 1)
  //       return true
  //     }
  //   }
  //   return false
  // }

  const CheckCanBePickedUp = () => {

  }


  const addInventoryActions = (thing) => {
    thing.actions.inv['wear'] = () => {console.log('put in bod');}
  }

  const findThingsInInventory = (list) => {
    let found = {}
    for (i in list) {
      found[list[i]] = character.inventory.find(e => { return e == list[i] })
    }
    return found
  }

  const combineThings = (product) => {
    //console.log(product);
    found = findThingsInInventory(product.combines.needs)
    //console.log(found);
    let missing = ''
    for (t in found) {
      if (found[t] === undefined) {
        missing += things[t].desc + ' '
      }
    }

    if (missing.length > 0) {
      stage().respond(`missing; ${missing}`)
      return
    }

console.log('combining');


  // Remove destroyed items.
  for (let i in character.inventory) {
    if (found[character.inventory[i]]) {
      character.inventory.splice(i, 1)
    }
  }

  // add new item
  character.inventory.push(product.id)

  stage().displayThingsInList(character.inventory, 'inv', 'Inventory')

  }

  return {
    things: loadThings,
    combos: loadCombos,
    //inventory: loadInventory,
    combine: combineThings,
    //listActions: listActions,
    //addThingToInventory: addThingToInventory,
    moveThingFromContainerToContainer: moveThingFromContainerToContainer,
  }
}
