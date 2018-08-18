/*
 * Write elements to the stage.
*/
const stage = () => {

  const makeDisplays = () => {
    el(undefined, 'display', 'playerDetails').div()
    el(undefined, 'display', 'charactersDetails').div()
    el(undefined, 'display', 'Inventory').div()
    el(undefined, 'display', 'playArea').div()
    el(undefined, 'display', 'controls').div()
    el(undefined, 'display', 'testArea').div()
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
    el('playerDetails').div(`Player name: ${name}`)
  }

  const makeCharacterForm = (newCharacter) => {
    el('charactersDetails', undefined, 'charForm').div('character')
    el('charForm', undefined, 'charName').input()
    el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', newCharacter)
  }



  const displayThingsInList = (list, type, displayName) => {
    el().removeElement(`${displayName}List`)
    el(`${displayName}`, `${displayName}-contents`, `${displayName}List`).div(displayName)
    for (let i in list) {
      displayThingInList(list[i], type, displayName)
    }
  }

  const displayThingInList = (id, type, displayName) => {
    el(`${displayName}List`, `${displayName}-item`, `${displayName}Item-${id}`).div(`${things[id].desc}`)
    displayThingActions(id, type, displayName)
    displayThingCombines(id, type, displayName)
  }

    const displayThingActions = (id, type, displayName) => {
      let thing = things[id]
      if (thing.actions == undefined) return
      el(`${displayName}Item-${id}`, 'actions', `${displayName}ItemActions-${id}`).div()
      for (let action in thing.actions[type]) {
        el(`${displayName}ItemActions-${id}`, `action ${action}`, undefined).button(action, thing.actions[type][action])
      }
    }

    const displayThingCombines = (id, type, displayName) => {
      let thing = things[id]
      if (thing['used in'] == undefined) return
      let usedIn = thing['used in']
      el(`${displayName}Item-${id}`, 'combines', `${displayName}ItemCombines-${id}`).div('combines with')
      for (let i in usedIn) {
        el(`${displayName}ItemCombines-${id}`, 'combine', undefined).button(usedIn[i], () => {thingsHandler().combine(thing)})
      }
    }

    const placeThingsAtLocation = () => {
      el().removeElement('things')
      el('playArea', undefined, 'things').div("Your can see ...")
      for (let i in character.places[character.location]) {
        let id = character.places[character.location][i]
        el('things', undefined, `thing-${id}`).div(things[id].desc)
        for (let act in things[id].actions.env) {
          el(`thing-${id}`, undefined, `action`).button(act, things[id].actions.env[act])
        }
      }
    }

  return {
    makeDisplays: makeDisplays,
    makePlayerForm: makePlayerForm,
    killPlayerForm: killPlayerForm,
    makeCharacterForm: makeCharacterForm,
    //inventory: displayInventory,
    player: displayPlayer,
    displayThingsInList: displayThingsInList,
    placeThingsAtLocation: placeThingsAtLocation,
  }
}
