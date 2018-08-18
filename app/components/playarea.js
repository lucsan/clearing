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

    stage().placeThingsAtLocation()

  }





  return {
    loadLocation: loadLocationDescription,
    loadResponses: loadResponses,

  }
}
