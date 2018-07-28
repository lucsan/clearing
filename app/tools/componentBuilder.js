const el = (parent = 'app', className = '', id = '' ) => {

  let s = {}
  s.id = id
  s.class = className
  s.parent = parent


  const testdiv = (className = null) => {
    e = document.createElement('div')
    e.id = s.id
    e.className = className
    e.innerHTML = `new div`
    document.getElementById('app').appendChild(e)
  }

  const div = (divText = '') => {
    e = document.createElement('div')
    text(e, divText)
    append(e)
    return e
  }

  const input = () => {
    let e = document.createElement('input')
    append(e)
    return e
  }

  const displayBox = () => {

  }

  const append = (e) => {
    if (s.id != '') e.id = s.id
    if (s.class != '') e.className = s.class
    document.getElementById(s.parent).appendChild(e)
  }

  const text = (e, t) => {
    if (t != '') e.appendChild(document.createTextNode(t))
  }

  const button = (buttonText = 'OK', buttonOnClick = defaultButtonClick) => {
    let e = document.createElement('div')
    text(e, buttonText)
    e.onclick = () => { buttonOnClick() }
    append(e)
    return e
  }

  const defaultButtonClick = () => {
    console.log('Button Clicked')
  }


  return {
    div: div,
    button: button,
    input: input,
    displayBox: displayBox,
  }
}
