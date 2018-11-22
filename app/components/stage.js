/*
 * Write elements to the stage.
*/
const stage = (mediator) => {

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
    let containersLists = {
      body:      { id: 'bod', title: `Holding`, items: mediator.character().places.body.items },
      inventory: { id: 'inv', title: `Inventory`, items: mediator.character().places.inventory.items },
      environ:   { id: 'env', title: `${mediator.set().desc}`, items: mediator.character().places[mediator.location()].items },
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
  }

  const displayThings = (containerId, container) => {
    for (let itemId of container.items) {
      el(containerId, `things`, `${containerId}-${itemId}`).div()
      el(`${containerId}-${itemId}`, `thing title`).div(itemId)
    }
  }

  const displayActions = (containerId, container) => {
    let props = mediator.getProps()
    for (let itemId of container.items) {
      let actions = props[itemId].actions[container.id]
      for (action in actions) {
        el(`${containerId}-${itemId}`, `action button`).button(action, actions[action])

      }
      displayThingsToHitWith(containerId, itemId)
    }
  }

  const displayThingsToHitWith = (containerId, itemId) => {
    //let targets = character.places[character.location]
    let props = mediator.getProps()
    for (let target in props) {
      if (props[target].strikes == undefined) return
      let hitThings = mediator.character().places.body
      for (let weapon of hitThings) {
        //console.log(things[weapon]);
        el(`${containerId}-${itemId}`).button(`${weapon} hit`, () => { actions().hit(itemId, weapon) }  )

      }
    }

  }

  const displayCombines = (containerId, container) => {
    if (containerId != 'inventory') return
    let props = mediator.getProps()
    for (let itemId of container.items) {
      let usedIn = props[itemId]['used in']
      for (let i in usedIn) {
        el(`${containerId}-${itemId}`, `combo button`).button( `Craft: ${usedIn[i]}`, () => {thingsHandler(mediator).combine(props[usedIn[i]])} )
      }

    }
  }

  const displayPlace = () => {
    let place = mediator.set()
    let exits = place.exits
    el(`scene`, `title`).div(`Exits`)
    for (let exit of exits) {
      el(`scene`, `exit`).button(`${exit.desc}`, () => { playarea(mediator, app.stage()).enterPlace(exit.to) })
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
