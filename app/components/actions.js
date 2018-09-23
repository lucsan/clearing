/*
global
thingsHandler: true,
character: true,
places: true,
things: true,
*/
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
    stage().respond(`You hit ${things[target].desc} with ${weapon} for ${dam} damage`)

  }

  return {
    pickUp: pickUp,
    drop: drop,
    hold: hold,
    bagit: bagit,
    hit: hit,
  }
}
