const tools = () => {
  let s = {}

  const log = (...v) => {
    if (debug != true) return
    v.map((e) => { console.log(e) })
  }

  const info = (...v) => {
    v.map((e) => { console.info(e) })
  }

  return {
    log: log,
    info: info,
  }

}
