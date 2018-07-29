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
    for (let c of cs) {
      console.log(c, c.name);
      el('charactersDetails').div(`Char name: ${c.name}`)
    }
  }

  const createCharacter = () => {
    log(`creating character`)
    el('charactersDetails', undefined, 'charForm').div('character')
    el('charForm', undefined, 'charName').input()
    el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', newCharacterName)
  }

  const newCharacterName = () => {
    let c = document.getElementById('charName')
    if (c != null) {
      tool.storeData('characters', [{ name: c.value }])
      el().removeElement('charForm')
    }
  }

  return {
    loadCharacters: loadCharacters,
  }
}
