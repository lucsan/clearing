/*
global
*/
const actions = () => {
  const mediator = app.mediator()
  const stagi = app.stagi()
  const thand = thingsHandler(mediator, stage)

  const pickUp = (id) => {
    thand.moveThingFromContainerToContainer(id, 'env', 'inv')
    stagi.respond(`You picked up the ${id} and put it in your pack.`)
    mediator.log(`picked up ${id}`)
  }

  const drop = (id) => {
    thand.moveThingFromContainerToContainer(id, 'inv', 'env')
    let place = mediator.set()
    stagi.respond(`You drop the ${id} in ${place.desc}.`)
    mediator.log(`droped ${id}`)
  }

  const hold = (id) => {
    thand.moveThingFromContainerToContainer(id, 'inv', 'bod')
    stagi.respond(`You grasp the ${id} in your hand.`)
    mediator.log(`${id} in hand`)
  }

  const bagit = (id) => {
    thand.moveThingFromContainerToContainer(id, 'bod', 'inv')
    stagi.respond(`You put the ${id} in your pack.`)
    mediator.log(`${id} in pack`)
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
    stagi.respond(`You hit ${things[target].desc} with ${weapon} for ${dam} damage`)
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
