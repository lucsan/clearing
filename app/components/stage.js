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
    el().removeElement('InventoryList')
    el('Inventory', 'inventory-contents', 'InventoryList').div()

    el('InventoryList', 'inventory-title', undefined).div('Inventory')
    for (item of inventory) {
      //console.log(item);
      el('InventoryList', 'inventory-item', undefined).div(`${item.desc}`)
    }
  }

  return {
    makeDisplays: makeDisplays,
    makePlayerForm: makePlayerForm,
    inventory: displayInventory,
  }
}
