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
    }
  }

  const places = (type) => {
    if (!cabinet.character.places[type]) cabinet.character.places[type] = {}
    cabinet.character.places[type].items = store().prepThingsForStorage(cabinet.propsList, type)
    return cabinet.character.places
  }

  const propBag = (type) => {
    if (!cabinet.character.places[type]) cabinet.character.places[type] = {}
    cabinet.character.places[type].items = store().prepThingsForStorage(cabinet.propsList, type)
    return cabinet.character.places
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
        console.log(set);
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

  const requestThingPlaceActions = (typeId, items) => {
    let props = cabinet.props
    for (let i in items) {
      let iid = items[i].id
      items[i].actions = props[iid].actions[typeId]
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
