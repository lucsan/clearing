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

    character = tools().loadData(player.chars[0])[0]
    character.save = {}
    //character.location = tools().loadData(`${character.name}_loc`)
    character.save.inv = tools().loadData(`${character.name}_inv`)

    character.inventory = store().getThingsOutOfStore(character.save.inv)

    document.dispatchEvent(new Event('clearing_character_loaded'))

    // if (player.chars.length == 1) {
    //   character = player.chars[0]
    //   character.inventory = store().getThingsOutOfStore(character.save.inv)
    //
    //   el('charactersDetails').div(`Playing Char: ${cs[0].name}`)
    //   document.dispatchEvent(new Event('clearing_characterLoaded'))
    //   return
    // }
    // let i = 0
    // for (let c of cs) {
    //   //console.log(c, c.name);
    //   el('charactersDetails').div(`Char name: ${c.name}`)
    //   el('characterDetails').button('OK', () => {characterSelected(c.name)})
    // }
  }

  const characterSelected = (name) => {
    log(name)
  }

  const createCharacter = () => {
    log(`creating new character`)
    stage().makeCharacterForm(newCharacter)
  }

  const newCharacter = () => {
    let c = document.getElementById('charName') // TODO move to perform.js
    if (c != null) {
      character.name = c.value
      character.location = 'start'
      character.save = {
        name: character.name,
        inv: store().prepThingsForStorage()
      }

      tools().storeData(`${character.name}`, [{name: character.name, location: character.location}])
      tools().storeData(`${character.name}_inv`, character.save.inv)
      tools().storeData(`${character.name}_bod`, ['item'])
      tools().storeData(`${character.name}_${character.location}`, ['item'])

      character.inventory = store().getThingsOutOfStore(character.save.inv)

      el().removeElement('charForm') // TODO move to stage
      let p = tools().loadData('player')
      p.chars.push(character.name)
      tools().storeData('player', p)

      console.log('p', p);


      loadCharacters()
      console.log('character', character);

    }
  }

  // const newCharacter = () => {
  //   let c = document.getElementById('charName') // TODO move to perform.js
  //   if (c != null) {
  //     tool.storeData('characters', [
  //       {
  //         name: c.value,
  //         location: 'start',
  //         inventory: store().prepThingsForStorage(),
  //         //inventory: thingsHandler().inventory(),
  //         //body: () => {}
  //       },
  //     ])
  //     el().removeElement('charForm')
  //     loadCharacters()
  //   }
  // }

  return {
    loadCharacters: loadCharacters,
  }
}
