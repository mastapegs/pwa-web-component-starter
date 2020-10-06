import { css } from 'lit-element'

export default css`
  .container {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 4em;
    background: #0288D1;
    box-shadow: 0 0 .5em .1em black;
    
    color: white;
    text-shadow: 1px 1px black;
    font-weight: bold;
  }
  .spacer {
    height: 5em;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
`