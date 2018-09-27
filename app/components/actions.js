/*
global
character: true,
places: true,
things: true
*/
const actions = () => {
  const stage = stage()
  const thand = thingsHandler()

  const pickUp = (id) => {
    thand.moveThingFromContainerToContainer(id, 'env', 'inv')
    stage.respond(`You picked up the ${id} and put it in your pack.`)
    log(`picked up ${id}`)
  }

  const drop = (id) => {
    thand.moveThingFromContainerToContainer(id, 'inv', 'env')
    let place = places[character.location]
    stage.respond(`You drop the ${id} in ${place.desc}.`)
    log(`droped ${id}`)
  }

  const hold = (id) => {
    thand.moveThingFromContainerToContainer(id, 'inv', 'bod')
    stage.respond(`You grasp the ${id} in your hand.`)
    log(`${id} in hand`)
  }

  const bagit = (id) => {
    thand.moveThingFromContainerToContainer(id, 'bod', 'inv')
    stage.respond(`You put the ${id} in your pack.`)
    log(`${id} in pack`)
  }

  const hit = (target, weapon) => {
    console.log(`you hit ${target} with the ${weapon}`);
    let targetObj = things[target]
    let weaponObj = things[weapon]
    if (targetObj.properties == undefined) targetObj.properties = { attack: 0, defense: 0}
    if (weaponObj.properties == undefined) weaponObj.properties = { attack: 0, defense: 0}
    let atk = weaponObj.properties.attack
    let def = targetObj.properties.defense
    let dam = atk - def + 1

    console.log('target', targetObj, 'weapon', weaponObj);
    console.log('target def', targetObj.properties.defense, 'weapon atk', weaponObj.properties.attack);

    console.log(`You hit ${target} for ${dam} damage`);
    stage.respond(`You hit ${things[target].desc} with ${weapon} for ${dam} damage`)
    log(`You hit ${things[target].desc} with ${weapon} for ${dam} damage`)

  }

  return {
    pickUp: pickUp,
    drop: drop,
    hold: hold,
    bagit: bagit,
    hit: hit,
  }
}
