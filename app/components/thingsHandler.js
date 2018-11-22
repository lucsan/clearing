const thingsHandler = (mediator) => {
// TODO: Change name to propsDept

/**
  Things in inventory
  Things in hand (head, chest, etc)
  Things in room

  Thing location, action, combines, property


*/

  let stagi = app.stagi()

  const loadThing = (thing) => {
    if (thing.locs == undefined) thing.locs = []
    if (thing.actions == undefined) thing.actions = {}
    if (thing.actions.inv == undefined) thing.actions.inv = {}
    if (thing.actions.bod == undefined) thing.actions.bod = {}
    if (thing.actions.env == undefined) thing.actions.env = {}
    if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { actions().drop(thing.id) }
    if (thing.actions.inv.hold == undefined) thing.actions.inv.hold = () => { actions().hold(thing.id) }
    if (thing.actions.inv.inspect == undefined) thing.actions.inv.inspect = () => { stagi.respond(thing.desc) }
    if (thing.actions.bod.bagit == undefined) thing.actions.bod.bagit = () => { actions().bagit(thing.id) }
    if (thing.actions.env.look == undefined) thing.actions.env.look = () => { stagi.respond(thing.desc) }

    //if (thing.actions.inv.drop == undefined) thing.actions.inv.drop = () => { removeThingFromInventory(thing.id, 'env') }
    //if (thing.actions.inv.hold == undefined) thing.actions.inv.hold = () => { removeThingFromInventory(thing.id, 'bod') }
  }

  const loadThings = () => {
    mediator.log('Loading Things')
    let things = mediator.propsList()
    for (let id in things) {
      let thing = things[id]
      thing.id = id
      loadThing(thing)
    }
    return things
  }

  const loadCombos = () => {
    let things = mediator.propsList()
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
    if (!removeThingFromContainer(id, currentId)) return
    addThingToContainer(id, targetId)
    mediator.tools().storeData(mediator.character().name, mediator.character())
    stagi.displayThingsInContainers()
  }

  const removeThingFromContainer = (id, containerId) => {
    switch (containerId) {
    case 'inv': return removeThing(id, mediator.bagProps('inventory'))
    case 'env': return removeThing(id, mediator.bagProps(mediator.location()), mediator.location())
    case 'bod': return removeThing(id, mediator.bagProps('body'))
    default: return false
    }
  }

  const removeThing = (id, items) => {
    for (let i in items) {
      if (items[i] == id) {
        items.splice(i, 1)
        return true
      }
    }
    return false
  }

  const addThingToContainer = (id, containerId) => {
    switch (containerId) {
    case 'inv': return addThing(id, mediator.bagProps('inventory'))
    case 'env': return addThing(id, mediator.bagProps(mediator.location()))
    case 'bod': return addThing(id, mediator.bagProps('body'))
    default: return
    }
  }

  const addThing = (id, contents) => {
    contents.push(id)
  }

  const findThingsInInventory = (list) => {
    let found = {}
    for (let i in list) {
      found[list[i]] = mediator.bagProps('inventory').find(e => { return e == list[i] })
    }
    return found
  }

  const combineThings = (product) => {
    let found = findThingsInInventory(product.combines.needs)
    let missing = ''
    for (let t in found) {
      if (found[t] === undefined) {
        missing += mediator.getProps()[t].desc + ', '
      }
    }
    // See if anything is missing.
    if (missing.length > 0) {
      missing = missing.slice(0, -2) + '.'
      stagi.respond(`missing; ${missing}`)
      return
    }
    // Remove destroyed items.
    let items = mediator.bagProps('inventory')
    for (let i in items) {
      if (found[items[i]]) {
        items.splice(i, 1)
      }
    }
    // add new item
    items.push(product.id)
    mediator.tools().storeData(mediator.character())
    stagi.displayThingsInContainers()
  }

  return {
    things: loadThings,
    combos: loadCombos,
    combine: combineThings,
    moveThingFromContainerToContainer: moveThingFromContainerToContainer,
  }
}
