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



  const addToInventory = (id, remove) => {
    if (removeFromLocation(id) === false) return
    character.inventory.push(id)
    tools().storeData(character.name, character)
    stage().placeThingsAtLocation()
    stage().displayThingsInList(character.inventory, 'inv', 'Inventory')
  }

  const removeFromLocation = (id) => {
    let items = character.places[character.location]
    for (let i in items) {
      if (items[i] == id) {
        character.places[character.location].splice(i, 1)
        return true
      }
    }
    return false
  }

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

  // const listActions = (thing) => {
  //   if (thing.actions == undefined) return
  //   return thing.actions
  //   // let actions = {}
  //   // if (thing.actions == undefined) return actions
  //   // for (let action in thing.actions) {
  //   //   actions.action = thing.actions[action]})
  //   // }
  //   // console.log(actions);
  //   // return actions
  // }



  return {
    things: loadThings,
    combos: loadCombos,
    inventory: loadInventory,
    combine: combineThings,
    //listActions: listActions,
    addToInventory: addToInventory,
  }
}
