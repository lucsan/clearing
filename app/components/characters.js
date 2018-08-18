const characters = () => {
  let s = {}

  const loadCharacter = (name) => {
    let c = localStorage.getItem(name)
  }

  const loadCharacters = () => {
    log(`loading chars`)
    let p = tools().loadData('player')
    if (p.chars.length == 0) {
      log(`no chars found`)
      createCharacter()
    } else {
      chooseCharacter(p)
      log(`chars found `, p.chars)
    }
  }

  const chooseCharacter = (player) => {

    character = tools().loadData(player.chars[0])
    document.dispatchEvent(new Event('clearing_character_loaded'))
    el('charactersDetails').div(`Char name: ${character.name}`)
    console.log(character);

  }

  const characterSelected = (name) => {
    log(name)
  }

  const createCharacter = () => {
    log(`creating new character`)
    stage().makeCharacterForm(newCharacter)
  }

  const newCharacter = () => {
    let charName = document.getElementById('charName') // TODO move to perform.js
    character.name = charName.value
    character.location = 'start'
    character.inventory = store().prepThingsForStorage('inv')
    character.body = store().prepThingsForStorage('bod')
    tools().storeData(`${character.name}`, character)

    el().removeElement('charForm') // TODO move to stage
    let p = tools().loadData('player')
    p.chars.push(character.name)
    tools().storeData('player', p)
    loadCharacters()
    //console.log(character);
  }


  return {
    loadCharacters: loadCharacters,
  }
}
