const autoload = () => {
  let s = {}
  s.fl = []
  s.fc = 0

  const loadFiles = () => {
    //const path = "/_builds/projects/clearing/"
    const path = ""

    s.fl.push(`${path}app/tools/componentBuilder.js`)
    s.fl.push(`${path}app/tools/tools.js`)
    s.fl.push(`${path}app/tools/store.js`)
    s.fl.push(`${path}app/tools/tokenizer.js`)
    s.fl.push(`${path}app/components/actions.js`)
    s.fl.push(`${path}app/components/stage.js`)
    s.fl.push(`${path}app/components/characters.js`)
    s.fl.push(`${path}app/components/player.js`)
    //s.fl.push(`${path}app/components/controls.js`)
    s.fl.push(`${path}app/components/playarea.js`)
    s.fl.push(`${path}app/components/game.js`)
    s.fl.push(`${path}app/components/thingsHandler.js`)
    s.fl.push(`${path}app/data/places.js`)
    s.fl.push(`${path}app/data/things.js`)
    s.fl.push(`${path}app/data/lexicon.js`)

    s.fc = s.fl.length
    for (f of s.fl) {
      loadScript(f, loaded)
    }
  }

  const loaded = () => {
    s.fc = s.fc - 1
    if (s.fc === 0) {
      document.dispatchEvent(new Event('clearing_modules_loaded'))
    }
  }

  const loadScript = (uri, callback) => {
      // Adding the script tag to the head as suggested before
      var head = document.getElementsByTagName('head')[0]
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = uri

      // Then bind the event to the callback function.
      // There are several events for cross browser compatibility.
      script.onreadystatechange = callback
      script.onload = callback

      // Fire the loading
      head.appendChild(script)
  }

  return {
    loadFiles: loadFiles,
  }

}
