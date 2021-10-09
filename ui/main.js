import './styles/style.css'
import deck from './src/deck'
import useR from './src/r-block.js'
import verify from './src/creds'

const main = async () => {
  await deck.initialize({center: false})
  const isVerified = await verify
  useR(isVerified)
}

main()
