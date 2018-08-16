const store = () => {

  const prepThingsForStorage = (type = 'inv') => {
    return prepThingsForStore(type)
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
