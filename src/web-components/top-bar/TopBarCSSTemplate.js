import { css } from 'lit-element'

export default css`
  .container {
    background: #0288D1;
    color: white;
    height: 4em;
    display: flex;
    align-items: center;
    box-shadow: 0 0 .5em .1em black;
    position: fixed;
    width: 100%;
  }
  .icon {
    margin: 0 1em;
    font-size: 2em;
  }
  .hero {
    font-weight: bold;
    font-size: 1.5em;
    flex: 1;
    text-shadow: 1px 1px black;
  }
  .spacer {
    height: 5em;
  }
`