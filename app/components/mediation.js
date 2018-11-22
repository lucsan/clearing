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
    if (type === 'inv') type = 'inventory'
    if (type === 'bod') type = 'body'
    if (!cabinet.character.places[type]) cabinet.character.places[type] = {}
    cabinet.character.places[type].items = store().prepThingsForStorage(cabinet.propsList, type)
    return cabinet.character.places
  }

  const character = (...v) => {
    v.map(e => {
      if (e.location) {
        cabinet.character.location = e.location
        cabinet.moves += 1
        places(cabinet.character.location)
        places('inventory')
        places('body')
      }
      if (e.name) cabinet.character.name = e.name
      if (e.health) cabinet.character.health = e.health
      if (e.level) cabinet.character.level = e.level
    })

    return cabinet.character
  }

  const bagProps = (bag) => {
    return cabinet.character.places[bag].items
  }

  return {
    tools: () => cabinet.tools,
    log: (msg) => cabinet.tools.log(msg),
    propsList: () => cabinet.propsList,
    setProps: (list) => cabinet.props = list,
    getSetProps: (setId) => {},
    getProps: () => cabinet.props,
    character,
    bagProps,
    move: (newLocation) => cabinet.character.location = newLocation,
    location: () => cabinet.character.location,
    sets: () => cabinet.sets,
    set: () => cabinet.sets[cabinet.character.location],
    cabinet: cabinet
  }
}
