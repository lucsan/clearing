const characters = (mediator, stage) => {
  let s = {}

  const loadCharacter = (name) => {
    let c = localStorage.getItem(name)
  }

  const loadCharacters = () => {
    mediator.log(`loading chars`)
    let p = mediator.tools().loadData('player')
    if (p.chars.length == 0) {
      mediator.log(`no chars found`)
      createCharacter()
    } else {
      chooseCharacter(p)
      mediator.log(`chars found `, p.chars)
    }
  }

  const chooseCharacter = (player) => {
    let character = mediator.tools().loadData(player.chars[0])
    document.dispatchEvent(new Event('clearing_character_loaded'))
    //stage().display
    el('characterDetails').div(`${character.name}`)
  }

  const characterSelected = (name) => {
    mediator.log(name)
  }

  const createCharacter = () => {
    mediator.log(`creating new character`)
    stage.makeCharacterForm(newCharacter)
  }

  const newCharacter = () => {
    let charName = document.getElementById('charName') // TODO move to perform.js
    mediator.character({
      name: charName.value,
      level: 1,
      health: 100,
      health_max: 100,
      location: 'start',
    })

    mediator.tools().storeData(`${mediator.character().name}`, mediator.character())

    el().removeElement('charForm') // TODO move to stage
    let p = mediator.tools().loadData('player')
    p.chars.push(mediator.character().name)
    mediator.tools().storeData('player', p)
    loadCharacters()
  }

  return {
    loadCharacters: loadCharacters,
  }
}
