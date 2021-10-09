/*
  for security and practical reasons
    the R interface on the slides should *only* work on my computer
  the easiest way i can think of is using a UUID key that the slides ask for
    which we verify by comparing it to a environment variable
*/

const verify = new Promise((resolve) => {
  const credsDiv = document.querySelector('#creds')
  // if it does put in an input element
  const input = credsDiv.appendChild(document.createElement('input'))
  input.type = 'password'

  // and an associated submit button
  const submit = credsDiv.appendChild(document.createElement('input'))
  submit.type = 'submit'
  submit.value = 'check for admin access'
  submit.addEventListener('click', () => {
    const isVerified = input.value === import.meta.env.VITE_KEY
    while (credsDiv.firstChild) credsDiv.removeChild(credsDiv.lastChild)

    const resultMessage = isVerified
      ? 'verified! live code editing enabled'
      : 'wrong key; you can reload and try again'

    const resultDiv = credsDiv.appendChild(document.createElement('div'))
    resultDiv.innerText = resultMessage
    resolve(isVerified)
  })
})

export default verify
