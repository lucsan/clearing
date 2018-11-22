const playarea = (mediator, stagi) => {

  const loadPlaces = () => {
    let placesList = mediator.sets()
    for (let id in placesList) {
      loadPlace(placesList[id], id)
    }
    //console.log('placesList', placesList);
    return  placesList
  }

  const loadPlace = (place, id) => {
    place.id = id
    loadExits(place)
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

  const exitPlace = (to) => {
    console.log('exit', to);
  }

  const loadProse = (place) => {
    if (place.proseScript === undefined || place.prose !== undefined) { return }
    scriptLoader(`app/data/places/${place.proseScript}.js`, () => { proseLoader(place) })
  }

  const proseLoader = (place) => {
    place.prose = eval(`${place.proseScript}_prose`)
    stagi.displayProse(place.prose)
  }

  const enterPlace = (nextPlaceId) => {
    // Code for entering a place.
    // if allowed to enter ... and newPlaceId exists
    let msg = `${mediator.location()} for ${nextPlaceId}`
    mediator.log(`leave ${msg}`)
    mediator.character({ location: nextPlaceId })

    loadProse(mediator.set())

    console.log('enter', mediator.character());
    mediator.tools().storeData(mediator.character().location, mediator.character())
    stagi.displayThingsInContainers()
    stagi.respond(`left ${msg}`)
  }

  return {
    // loadPlaces,
    enterPlace
  }
}
