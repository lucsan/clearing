const playarea = () => {

  const loadPlaces = () => {
    for (let id in placesList) {
      loadPlace(placesList[id], id)
    }
    return  placesList
  }

  const loadPlace = (place, id) => {
    place.id = id
    loadExits(place)
    loadProse(place)
  }

  const loadProse = (place) => {
    if (place.descScript === undefined || place.prose !== undefined) { return }
    scriptLoader(`app/data/places/${place.descScript}.js`, () => {proseLoader(place)})
  }

  const proseLoader = (place) => {
    place.prose = eval(`${place.descScript}_prose`)
  }

  const loadExits = (place) => {
    for (let i in place.exits) {
      loadExit(place.exits[i])
    }
  }

  const loadExit = (exit) => {
    if (exit.actions === undefined) {
      exit.actions = {}
      exit.actions.leave = () => exitPlace(exit.to)
    }
  }

  const exitPlace = (exit) => {
    log(`leave ${character.location} for ${exit}`);
    character.location = exit
    if (character.places[exit] == undefined) {
      character.places[exit] = store().prepThingsForStorage(exit)
    }
    tools().storeData(character.name, character)
    stage().displayThingsInContainers()
  }

  return {
    loadPlaces,
    exitPlace,
  }
}
