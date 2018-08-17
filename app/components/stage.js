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

  const displayInventory = (inventory) => {
    el().removeElement('inventoryList')
    el('Inventory', 'inventory-contents', 'inventoryList').div()

    el('inventoryList', 'inventory-title', undefined).div('Inventory')

    for (let id in inventory) {
      el('inventoryList', 'inventory-item', `inventoryItem-${id}`).div(`${inventory[id].desc}`)

      if (inventory[id].combines != undefined) {
        for (let i in inventory[id].combines) {
          for (let n in inventory[id].combines[i].needs) {
            el(`inventoryItem-${inventory[id]}`, 'combines', undefined).div('combo: ' + inventory[id].combines[i].needs[n])
          }
        }
      }

      //let actions = thingsHandler().listActions(item)
      if (inventory[id].actions != undefined) {
      //console.log(id, inventory[id].actions);

        for (let act in inventory[id].actions.inv) {
          //if (item.actions.inv[i] != "") {
            el(`inventoryItem-${id}`, 'actions', undefined).button(act, inventory[id].actions.inv[act])
          //}
        }
      }

    }
  }

  const displayThingsInList = (list, type, displayName) => {
    console.log(`${displayName}List`);
    el().removeElement(`${displayName}List`)
    el(`${displayName}`, `${displayName}-contents`, `${displayName}List`).div(displayName)
    for (let item in list) {
      displayThingInList(list[item], type, displayName)
    }

  }

    const displayThingInList = (item, type, displayName) => {
      el(`${displayName}List`, `${displayName}-item`, `${displayName}Item-${item.id}`).div(`${item.desc}`)
      displayThingActions(item, type, displayName)
      displayThingCombines(item, type, displayName)
    }

    const displayThingActions = (item, type, displayName) => {
      if (item.actions == undefined) return
      for (let action in item.actions[type]) {
        el(`${displayName}Item-${item.id}`, 'actions', undefined).button(action, item.actions[type][action])
      }

    }

    const displayThingCombines = (item, type, displayName) => {
      console.log(item);
      if (item.combines == undefined) return
      for (let combine in item.combines[type]) {

      }
    }

  return {
    makeDisplays: makeDisplays,
    makePlayerForm: makePlayerForm,
    killPlayerForm: killPlayerForm,
    makeCharacterForm: makeCharacterForm,
    inventory: displayInventory,
    player: displayPlayer,
    displayThingsInList: displayThingsInList,
  }
}
