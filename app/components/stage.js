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

  const displayInventory = (inventory) => {
    el().removeElement('inventoryList')
    el('Inventory', 'inventory-contents', 'inventoryList').div()

    el('inventoryList', 'inventory-title', undefined).div('Inventory')
    for (let item of inventory) {
      el('inventoryList', 'inventory-item', `inventoryItem-${item.id}`).div(`${item.desc}`)
      if (item.combines != undefined) {
        for (let i in item.combines) {
          for (let n in item.combines[i].needs) {
            el(`inventoryItem-${item.id}`, 'combines', undefined).div('combo: ' + item.combines[i].needs[n])
          }
        }
      }
    }
  }

  const listItemNeeds = () => {

  }

  return {
    makeDisplays: makeDisplays,
    makePlayerForm: makePlayerForm,
    inventory: displayInventory,
  }
}
