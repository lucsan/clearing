const el = (id = null, parent = 'app') => {
  console.log(id);
  let s = {}
  s.id = id
  s.parent = parent
  const div = (className = null) => {
    e = document.createElement('div')
    e.id = s.id
    e.className = className
    e.innerHTML = `new div`
    document.getElementById('app').appendChild(e)
  }

  const inputBox = () => {
    e = document.createElement('input')
  }

  const displayBox = () => {

  }

  const button = (buttonText = 'OK', buttonOnClick = defaultButtonClick) => {
    b = document.createElement('div')
    b.appendChild(document.createTextNode(buttonText))
    document.getElementById(s.parent).appendChild(b)
    b.onclick = () => {
      buttonOnClick()
    }
  }

  const defaultButtonClick = () => {
    console.log('Button Clicked')
  }


  return {
    div: div,
    button: button,
    inputBox: inputBox,
    displayBox: displayBox,
  }
}
