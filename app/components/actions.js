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

  const hold = (id) => {
    thingsHandler().moveThingFromContainerToContainer(id, 'inv', 'bod')
    stage().respond(`You grasp the ${id} in your hand.`)
  }

  const bagit = (id) => {
    thingsHandler().moveThingFromContainerToContainer(id, 'bod', 'inv')
    stage().respond(`You put the ${id} in your pack.`)
  }

  return {
    pickUp: pickUp,
    drop: drop,
    hold: hold,
    bagit: bagit,
  }
}
