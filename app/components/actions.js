const actions = () => {

  const pickUp = (id) => {
    thingsHandler().moveThingFromContainerToContainer(id, 'env', 'inv')
    stage().respond(`You picked up the ${id} and put it in your pack.`)
  }

  const drop = (id) => {
    thingsHandler().moveThingFromContainerToContainer(id, 'inv', 'env')
    let place = places[character.location]
    stage().respond(`You drop the ${id} in a ${place.desc}.`)    
  }
  return {
    pickUp: pickUp,
    drop: drop,
  }
}
