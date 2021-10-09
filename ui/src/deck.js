// this just creates the deck so that it can be used by (multiple) other scripts

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm'
const deck = new Reveal({
  plugins: [Markdown, Highlight],
})

export default deck
