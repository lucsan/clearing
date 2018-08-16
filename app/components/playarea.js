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

    placeThingsAtLocation()

  }

  const placeThingsAtLocation = () => {
    let thingsText = "You can see: "
    el().removeElement('things')
    el('playArea', undefined, 'things').div(thingsText)
    let things = findThingsAtLocation()
    for (let thing of things) {
      el('things', undefined, `thing-${thing.id}`).div(thing.desc)
      for (let act in thing.actions.env) {
        el(`thing-${thing.id}`, undefined, `action`).button(act, thing.actions.env[act])
      }
    }
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

  const thingActionsAtLocation = (thing) => {

  }

  return {
    loadLocation: loadLocationDescription,
    loadResponses: loadResponses,
    placeThingsAtLocation: placeThingsAtLocation,
  }
}
