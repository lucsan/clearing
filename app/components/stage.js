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
      console.log(id, inventory[id].actions);

        for (let act in inventory[id].actions.inv) {
          //if (item.actions.inv[i] != "") {
            el(`inventoryItem-${id}`, 'actions', undefined).button(act, inventory[id].actions.inv[act])
          //}
        }
      }

    }
  }

  return {
    makeDisplays: makeDisplays,
    makePlayerForm: makePlayerForm,
    killPlayerForm: killPlayerForm,
    makeCharacterForm: makeCharacterForm,
    inventory: displayInventory,
    player: displayPlayer,
  }
}
