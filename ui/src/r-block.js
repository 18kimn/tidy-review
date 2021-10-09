import reveal from 'reveal.js'
import deck from './deck'

const sourceR = async (input) => {
  const body = new URLSearchParams({
    data: encodeURIComponent(input),
  }).toString()
  const consoleResult = await fetch(`http://localhost:3100/?${body}`).then(
    (res) => res.text(),
  )
  return consoleResult
}

const onSubmit = async (input) => {
  const result = await sourceR(input.value)
  console.log(result)
  const slide = deck.getCurrentSlide()
  const Rdiv = slide.querySelector('.run-r')
  const existingDiv = Rdiv.querySelector('.r-output')
  existingDiv && existingDiv.remove()
  const output = Rdiv.appendChild(document.createElement('div'))
  output.className = 'r-output'
  output.innerText = result
}

const useR = async (isVerified) => {
  if (!isVerified) return
  deck.on('slidechanged', () => {
    const slide = deck.getCurrentSlide()

    // check if slide has a R input div placeholder
    const Rdiv = slide.querySelector('.run-r')
    if (!Rdiv) return

    // skip everything if the R input div already has a textarea
    if (Rdiv.querySelector('textarea')) return

    // if it does put in an input element
    const input = Rdiv.appendChild(document.createElement('textarea'))
    input.className = 'r-editor'

    // and an associated submit button
    const submit = Rdiv.appendChild(document.createElement('input'))
    submit.type = 'submit'
    submit.value = 'run'
    submit.className = 'r-submit'
    submit.addEventListener('click', () => onSubmit(input))
  })
}

export default useR
