/*
 * Write elements to the stage.
*/
const stage = () => {

  const makeDisplays = () => {
    el(undefined, 'display', 'playerDetails').div(`Player: `)
    el(undefined, 'display', 'characterDetails').div(`Character: `)
    el(undefined, 'display', 'containers').div()
    // el(undefined, 'display', 'body').div()
    // el(undefined, 'display', 'inventory').div()
    // el(undefined, 'display', 'environ').div()
    el(undefined, 'display', 'respond').div()
    el(undefined, 'display', 'prose').div()
  //  el(undefined, 'display', 'controls').div()
    el(undefined, 'display', 'testArea').div()
  }

  const respond = (text) => {
    el().removeElement('response')
    el('respond', 'respose', 'response').div(text)
  }

  const makePlayerForm = (newPlayerName) => {
    el('playerDetails', undefined, 'playerForm').div('Player')
    el('playerForm', undefined, 'playerName').input()
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', newPlayerName)
  }

  const killPlayerForm = () => {
    el().removeElement('playerForm')
  }

  const displayPlayer = (name) => {
    el('playerDetails').div(`${name}`)
  }

  const makeCharacterForm = (newCharacter) => {
    el('characterDetails', undefined, 'charForm').div('character')
    el('charForm', undefined, 'charName').input()
    el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', newCharacter)
  }

  const killCharacterForm = () => {
    el().removeElement('CharacterForm')
  }

  const displayCharacter = (name) => {
    el('characterDetails').div(`${name}`)
  }

  const displayThingsInContainers = () => {
    //console.log(character.location);
    let containersLists = {
      body:      { id: 'bod', title: `Holding`,   items: character.body},
      inventory: { id: 'inv', title: `Inventory`, items: character.inventory},
      environ:   { id: 'env', title: `${places[character.location].desc}`, items: character.places[character.location]},
    }

    for (let containerId in containersLists) {
      displayContainer(containerId, containersLists[containerId])
      displayThings(containerId, containersLists[containerId])
      displayActions(containerId, containersLists[containerId])
      displayCombines(containerId, containersLists[containerId])
      displayPlace()
    }
  }

  const displayContainer = (containerId, container) => {
    let items = container.items
    let title = container.title
    el().removeElement(containerId)
    el(`containers`, `container`, containerId).div()
    el(containerId, `title`).div(title)
    el().removeElement(`scene`)
    el(containerId, `scene`, `scene`).div()
    //displayThings(containerId, container)
  }

  const displayThings = (containerId, container) => {
    //console.log(container.items);
    for (let itemId of container.items) {
      el(containerId, `things`, `${containerId}-${itemId}`).div()
      el(`${containerId}-${itemId}`, `thing title`).div(itemId)
    }
    //displayActions(containerId, container)
  }

  const displayActions = (containerId, container) => {
    for (let itemId of container.items) {
      let actions = things[itemId].actions[container.id]
      for (action in actions) {
        el(`${containerId}-${itemId}`, `action button`).button(action, actions[action])

      }
      displayThingsToHitWith(containerId, itemId)
    }
  }

  const displayThingsToHitWith = (containerId, itemId) => {
    let targets = character.places[character.location]
    for (let target of targets) {
      if (things[target].strikes == undefined) return
      let hitThings = character.body
      for (let weapon of hitThings) {
        //console.log(things[weapon]);
        el(`${containerId}-${itemId}`).button(`${weapon} hit`, () => { actions().hit(itemId, weapon) }  )

      }
    }

  }

  const displayCombines = (containerId, container) => {
    if (containerId != 'inventory') return
    for (let itemId of container.items) {
      let usedIn = things[itemId]['used in']
      for (let i in usedIn) {
        el(`${containerId}-${itemId}`, `combo button`).button( `Craft: ${usedIn[i]}`, () => {thingsHandler().combine(things[usedIn[i]])} )
      }

    }
  }

  const displayPlace = () => {
    let place = places[character.location]
    let exits = place.exits
    el(`scene`, `title`).div(`Exits`)
    for (let exit of exits) {
      el(`scene`, `exit`).button(`${exit.desc}`, () => { playarea().exitPlace(exit.to) })
    }
    displayProse(place.prose)
  }

  const displayProse = (prose) => {
    document.getElementById('prose').innerHTML = prose || ''
  }


  return {
    respond,
    makeDisplays,
    makePlayerForm,
    killPlayerForm,
    makeCharacterForm,
    displayPlayer,
    displayCharacter,
    displayThingsInContainers,
    displayPlace,
    displayProse,
  }

}
