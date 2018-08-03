const playarea = () => {

  const loadResponses = (r) => {
    el().removeElement('responses')
    el('playArea', undefined, 'responses').div(r)
  }

  const loadLocationDescription = () => {
    let loc = places[character.location]
    el('playArea', undefined, 'location').div(loc.desc)

    exitsText = ""
    for( exits of loc.exits ) {
      exitsText += exits.desc + " "
    }

    el('playArea', undefined, 'exits').div(exitsText)

    thingsText = "You can see: "
    let things = findThingsAtLocation()
    placeThingsAtLocation(things)

  }

  const placeThingsAtLocation = (things) => {
    for (let thing of things) {
      thingsText += thing.desc + " "
    }
    el('playArea', undefined, 'things').div(thingsText)
  }

  const findThingsAtLocation = () => {
    let loc = character.location
    let thingsAtLoc = []
    for ( let o in things) {
      let thing = things[o]
      if (typeof(thing.locs) != 'undefined') {
        for (let l of thing.locs) {
          if ( l == loc) {
            thingsAtLoc.push(thing)
          }
        }
      }
    }
    return thingsAtLoc
  }

  return {
    loadLocation: loadLocationDescription,
    loadResponses: loadResponses,
  }
}
