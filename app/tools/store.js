const store = () => {

  const prepThingsForStorage = (things, type = 'inv') => {
    if (type === 'inventory') type = 'inv'
    if (type === 'body') type = 'bod'
    return prepThingsForStore(things, type)
  }


  const getThingsOutOfStore = (items, things) => {
    //console.log(items);
    let ts = {}
    for (let id of items) {
      ts[id] = things[id]
    }
    return ts
  }

  const prepThingsForStore = (things, location = 'inv') => {
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

  // const prepThingsForStore1 = (location = 'inv') => {
  //   let items = []
  //   for (let id in things) {
  //     if (things[id].locs == undefined) continue
  //     for (let loc of things[id].locs) {
  //       if (loc == location) {
  //         items.push(id)
  //       }
  //     }
  //   }
  //   return items
  // }

  return {
    prepThingsForStorage,
    getThingsOutOfStore,
  }
}
