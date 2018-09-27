const thingsHandler = () => {

/**
  Things in inventory
  Things in hand (head, chest, etc)
  Things in room

  Thing location, action, combines, property


*/

  const loadThing = (thing) => {
    if (thing.locs == undefined) thing.locs = []
    if (thing.actions == undefined) thing.actions = {}
    if (thing.actions.inv == undefined) thing.actions.inv = {}
    if (thing.actions.bod == undefined) thing.actions.bod = {}
    if (thing.actions.env == undefined) thing.actions.env = {}
    if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { actions().drop(thing.id) }
    if (thing.actions.inv.hold == undefined) thing.actions.inv.hold = () => { actions().hold(thing.id) }
    if (thing.actions.inv.inspect == undefined) thing.actions.inv.inspect = () => { stage().respond(thing.desc) }
    if (thing.actions.bod.bagit == undefined) thing.actions.bod.bagit = () => { actions().bagit(thing.id) }
    if (thing.actions.env.look == undefined) thing.actions.env.look = () => { stage().respond(thing.desc) }



    //if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { removeThingFromInventory(thing.id, 'env') }
    //if (thing.actions.inv.hold == undefined) thing.actions.inv.hold = () => { removeThingFromInventory(thing.id, 'bod') }
  }

  const loadThings = () => {
    log('loading things')
    let things = thingsList
    for (let id in things) {
      let thing = things[id]
      thing.id = id
      loadThing(thing)
    }
    return things
  }

  const loadCombos = () => {
    for (let id in things) {
      if (things[id].combines == undefined ) continue
      let thing = things[id]
      for (let needs of thing.combines.needs) {
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
      case 'inv': return addThing(id, character.inventory)
      case 'env': return addThing(id, character.places[character.location])
      case 'bod': return addThing(id, character.body)
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

  const addInventoryActions = (thing) => {
    thing.actions.inv['wear'] = () => {console.log('put in bod');}
  }

  const findThingsInInventory = (list) => {
    let found = {}
    for (let i in list) {
      found[list[i]] = character.inventory.find(e => { return e == list[i] })
    }
    return found
  }

  const combineThings = (product) => {
    //console.log(product);
    found = findThingsInInventory(product.combines.needs)
    //console.log(found);
    let missing = ''
    for (let t in found) {
      if (found[t] === undefined) {
        missing += things[t].desc + ', '
      }
    }

    if (missing.length > 0) {
      missing = missing.slice(0, -2) + '.'
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
    tools().storeData(character)
    stage().displayThingsInContainers()
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
