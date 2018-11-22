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

    // character.inventory = store().prepThingsForStorage('inv')
    // character.body = store().prepThingsForStorage('bod')
    //console.log('mc', mediator.character());
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
    //newStartPlace()
    loadCharacters()
    //console.log(character);
  }

  // const newCharacter1 = () => {
  //   let charName = document.getElementById('charName') // TODO move to perform.js
  //   character.name = charName.value
  //   character.level = 1
  //   character.health = 100
  //   character.health_max = 100
  //   character.location = 'start'
  //   character.inventory = store().prepThingsForStorage('inv')
  //   character.body = store().prepThingsForStorage('bod')
  //   mediator.tools().storeData(`${character.name}`, character)
  //
  //   el().removeElement('charForm') // TODO move to stage
  //   let p = mediator.tools().loadData('player')
  //   p.chars.push(character.name)
  //   mediator.tools().storeData('player', p)
  //   //newStartPlace()
  //   loadCharacters()
  //   //console.log(character);
  // }

  // const newStartPlace = () => {
  //
  //   places.start = store().prepThingsForStorage('start')
  //   character.places = places
  //   mediator.tools().storeData(`${character.name}`, character)
  // }


  return {
    loadCharacters: loadCharacters,
  }
}
