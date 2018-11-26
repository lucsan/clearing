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
      body:      { id: 'bod', title: `Holding`, items: mediator.bagProps('body') },
      inventory: { id: 'inv', title: `Inventory`, items: mediator.bagProps('inventory') },
      environ:   { id: 'env', title: `${mediator.set().desc}`, items: mediator.bagProps(mediator.location()) },
    }

    for (let id in containersLists) {
      displayContainer(id, containersLists[id].title)
      displayThings(id, containersLists[id].items)
      displayActions(id, containersLists[id].id, containersLists[id].items)
      displayCombines(id, containersLists[id])
      displayPlace()
    }
  }

  const displayContainer = (containerId, title) => {
    el().removeElement(containerId)
    el(`containers`, `container`, containerId).div()
    el(containerId, `title`).div(title)
    el().removeElement(`scene`)
    el(containerId, `scene`, `scene`).div()
  }

  const displayThings = (containerId, items) => {
    for (let i in items) {
      let iid = items[i].id
      el(containerId, `things`, `${containerId}-${iid}`).div()
      el(`${containerId}-${iid}`, `thing title`).div(iid)
    }
  }

  const displayActions = (containerId, typeId, items) => {
    let itemsActions = mediator.requestThingPlaceActions(typeId, items)
    for (let i in itemsActions) {
      for (let action in itemsActions[i].actions) {
        el(`${containerId}-${itemsActions[i].id}`, 'action button').button(action, itemsActions[i].actions[action])
      }
      displayThingsToHitWith(containerId, itemsActions[i].id)
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
    for (let i in container.items) {
      let itemId = container.items[i].id
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
