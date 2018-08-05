const characters = () => {
  let s = {}

  const loadCharacter = (name) => {
    let c = localStorage.getItem(name)
  }

  const loadCharacters = () => {
    log(`loading chars`)
    let c = tool.loadData('characters')
    if (c == null) {
      log(`no chars found`)
      createCharacter()
    } else {
      chooseCharacter(c)
      log(`chars found `, c)
    }
  }

  const chooseCharacter = (cs) => {
    if (cs.length == 1) {
      character = cs[0]
      el('charactersDetails').div(`Playing Char: ${cs[0].name}`)
      document.dispatchEvent(new Event('clearing_characterLoaded'))
      return
    }
    let i = 0
    for (let c of cs) {
      //console.log(c, c.name);
      el('charactersDetails').div(`Char name: ${c.name}`)
      el('characterDetails').button('OK', () => {characterSelected(c.name)})
    }
  }

  const characterSelected = (name) => {
    log(name)
  }

  const createCharacter = () => {
    log(`creating character`)
    el('charactersDetails', undefined, 'charForm').div('character')
    el('charForm', undefined, 'charName').input()
    el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', newCharacter)
  }

  const newCharacter = () => {
    let c = document.getElementById('charName')
    if (c != null) {
      tool.storeData('characters', [
        {
          name: c.value,
          location: 'start',
          inventory: thingsHandler().inventory()
        }
      ])
      el().removeElement('charForm')
      loadCharacters()
    }
  }

  return {
    loadCharacters: loadCharacters,
  }
}
