const playarea = () => {

  const exitPlace = (exit) => {
    console.log('leave room for ', exit);
    character.location = exit
    if (character.places[exit] == undefined) {
      character.places[exit] = store().prepThingsForStorage(exit)
    }
    tools().storeData(character.name, character)
    loadLocationDescription()
    console.log(character);
  }

  const loadPlaces = () => {
    for (let id in placesList) {
      for (let i in placesList[id].exits) {
        if (placesList[id].exits[i].actions == undefined) {
          placesList[id].exits[i].actions = {}
          placesList[id].exits[i].actions.leave = () => { exitPlace(placesList[id].exits[i].to) }
        }
      }
    }
    return  placesList
  }



  const loadResponses = (r) => {
    el().removeElement('responses')
    el('playArea', undefined, 'responses').div(r)
  }

  const loadLocationDescription = () => {
    let loc = places[character.location]
    el().removeElement('location')
    el('playArea', undefined , 'location').div()
    el('location', 'title').div(loc.desc)

    for( let exit of loc.exits ) {
      el('location', undefined, `exit-${exit.id}`).div(exit.desc)

      for (let i in exit.actions) {
      el(`exit-${exit.id}`, `action`, ``).button(i, exit.actions[i])
      }
    }

    stage().placeThingsAtLocation()

  }





  return {
    loadPlaces: loadPlaces,
    exitPlace: exitPlace,
    loadLocation: loadLocationDescription,
    loadResponses: loadResponses,

  }
}
