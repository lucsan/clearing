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
    //loadProse(place)
  }

  const loadProse = (place) => {
    if (place.proseScript === undefined || place.prose !== undefined) { return }
    scriptLoader(`app/data/places/${place.proseScript}.js`, () => { proseLoader(place) })
  }

  const proseLoader = (place) => {
    place.prose = eval(`${place.proseScript}_prose`)
    stage().displayProse(place.prose)
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

  const enterPlace = (nextPlaceId) => {
    // Code for entering a place.
    // if allowed to enter ... and newPlaceId exists
    log(`leave ${character.location} for ${nextPlaceId}`)
    character.location = nextPlaceId
    let place = placesList[character.location]
    loadProse(place)
    if (character.places[character.location] == undefined) {
      character.places[character.location] = store().prepThingsForStorage(character.location)
    }
    tools().storeData(character.name, character)
    stage().displayThingsInContainers()
  }

  // const exitPlace = (nextPlaceId) => {
  //   log(`leave ${character.location} for ${nextPlaceId}`)
  //   character.location = nextPlaceId
  //   enterPlace()
  // }

  return {
    loadPlaces,
    //exitPlace,
    enterPlace,
  }
}
