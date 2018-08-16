const store = () => {

  const prepThingsForStorage = () => {
    //let loc = 'start'

    //character.inventory = undefined
    if (character == undefined) {
    //  character.inventory = {}
      let items = prepThingsForStore('inv')
      // console.log('char', character);
      // tool.storeData('characters', [
      //   {
      //     name: character.name,
      //     location: character.location,
      //     inventory: items,
      //     //inventory: thingsHandler().inventory(),
      //     //body: () => {}
      //   },
      // ])
      //character.inventory = getThingsOutOfStore(items)
          return items
    }



  }


  const getThingsOutOfStore = (items) => {
    let ts = {}
    for (let id of items) {
      ts[id] = things[id]
    }
    return ts
  }

  const prepThingsForStore = (location = 'inv') => {
    let items = []
    for (let id in things) {
      if (things[id].locs == undefined) continue
      for (let loc of things[id].locs) {
        if (loc == location) {
          items.push(id)
        }
      }
    }
    return items
  }

  return {
    prepThingsForStorage: prepThingsForStorage,
    getThingsOutOfStore: getThingsOutOfStore,
  }
}
