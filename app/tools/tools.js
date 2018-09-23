const tools = () => {
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

  const loadLog = () => {
    return localStorage.getItem('log')
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

  const queryString = (find = null) => {
    const href = window.location.href
    let qss = {}
    let hrefParts = href.split('?')
    let qs = null
    let qsParts = null

    if (hrefParts.length > 1) {
      qs = hrefParts[1]
      qsParts = qs.split('&')
    }

    if (qsParts != null && qsParts.length > 0) {
      qss = qsParts.map((p) => {
        let a = p.split('=')
        if (a.length > 0) {
          return {name: a[0], value: a[1]}
        } else {
          return {name: a[0], value: null}
        }
      })
    }

    if (qsParts != null && find) {
      let found = qss.find((inThis) => { return inThis.name == find })
      if (found) {
        return found.value
      } else {
        return null
      }
    } else {
      return qss
    }
  }

  return {
    log: log,
    info: info,
    loadLog: loadLog,
    loadData: loadData,
    storeData: storeData,
    storeRemoveItem: storeRemoveItem,
    queryString: queryString,
  }

}
