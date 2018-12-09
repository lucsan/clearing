const mediation = () => {

  let cabinet = {
    debug: true,
    tools: tools(),
    sets: placesList,
    props: {},
    propsList: thingsList,
    moves: 0,
    character: {
      location: 'start',
      places: {
      }
    },
    rigging: {
      newPlayerName: '',
      characterName: '',
      places: {},
    }
  }

  // const places = (type) => {
  //   if (!cabinet.character.places[type]) cabinet.character.places[type] = {}
  //   cabinet.character.places[type].items = store().prepThingsForStorage(cabinet.propsList, type)
  //   return cabinet.character.places[type].items = prepThingsForRig(type)
  // }

  const propBag = (type) => {
    if (!cabinet.character.places[type]) cabinet.character.places[type] = {}
    cabinet.character.places[type].items = store().prepThingsForStorage(cabinet.propsList, type)
    prepThingsForRig(type)
    return cabinet.character.places
  }

  const prepThingsForRig = (type) => {
    if (!cabinet.rigging.places[type]) cabinet.rigging.places[type] = {}
    let propsAtLocation = {}
    let loc = type
    if (loc === 'inventory') loc = 'inv'
    if (loc === 'body') loc = 'bod'

    for (let p in cabinet.propsList) {
      let prop = cabinet.propsList[p]
      if (prop.locs === undefined) continue
      prop.locs.map(l => {
        if (l != loc) return
        propsAtLocation[p] = prop
      })
    }
    cabinet.rigging.places[type] = propsAtLocation
//console.log('rigging', type, cabinet.rigging.places);
    //return
  }

  const character = (...v) => {
    v.map(e => {
      if (e.name) cabinet.character.name = e.name

      if (e.location) {
        cabinet.character.location = e.location
        cabinet.moves += 1
        // Save location items list to characters places array.
        propBag(e.location)
        // Save location item state to location array (store).
        let set = cabinet.sets[e.location]
        //console.log(set);
        cabinet.tools.storeData(e.location, set)
      }

      if (e.inventory) {
        propBag('inventory')
        console.log('char', cabinet.character);
        cabinet.tools.storeData(cabinet.character.name, cabinet.character)
      }

      if (e.body) propBag('body')


      if (e.health) cabinet.character.health = e.health
      if (e.level) cabinet.character.level = e.level
    })
    return cabinet.character
  }

  const bagProps = (bag) => {
    return cabinet.character.places[bag].items
  }


  const newCharacter = (charName) => {
    character({
      name: charName.value,
      level: 1,
      health: 100,
      health_max: 100,
      location: 'start',
      inventory: [],
      body: []
    })
    cabinet.tools.storeData(cabinet.character.name, cabinet.character)
  }

  //TODO: Consider a display array of data for the stage.
  const requestThingPlaceActions = (typeId, items) => {
    let props = cabinet.props
    for (let i in items) {
      let iid = items[i].id
      items[i].actions = props[iid].actions[typeId]
      //items[i].title = props[iid].title
    }
    return items
  }

  return {
    tools: () => cabinet.tools,
    log: (msg) => cabinet.tools.log(msg),
    propsList: () => cabinet.propsList,
    setProps: (list) => cabinet.props = list,
    //getSetProps: (setId) => {},
    getProps: () => cabinet.props,
    character,
    rigging: () => cabinet.rigging.places,
    bagProps,
    updateBag: () => { },
    move: (newLocation) => cabinet.character.location = newLocation,
    location: () => cabinet.character.location,
    sets: () => cabinet.sets,
    set: () => cabinet.sets[cabinet.character.location],
    cabinet: cabinet,
    storeCharacter: () => cabinet.tools.storeData(cabinet.character.name, cabinet.character),
    newCharacter,
    requestThingPlaceActions,
  }
}
