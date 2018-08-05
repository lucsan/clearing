const tools = () => {
  let s = {}
  let logStore = []

  const log = (...v) => {
    if (debug != true) return
    v.map((e) => { logToStore(e) })
  }

  const info = (...v) => {
    v.map((e) => { console.info(e); logToStore(e) })
  }

  const logToStore = (i) => {
    logStore.push(i)
    storeData('log', logStore)
  }

  const loadData = (s) => {
    return JSON.parse(localStorage.getItem(s))
  }

  const storeData = (s, o) => {
    localStorage.setItem(s, JSON.stringify(o))
  }

  const storeRemoveItem = (s) => {
    localStorage.removeItem(s)
  }

  const clearAllStorage = () => {
    localStorage.clear()
  }

  return {
    log: log,
    info: info,
    loadData: loadData,
    storeData: storeData,
    storeRemoveItem: storeRemoveItem,
  }

}
