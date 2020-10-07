import { css } from 'lit-element'

const gutter = 10
const buttonShadow = 3

export default css`
  .container {
    width: 80%;
    margin: 0 auto;
    max-width: 768px;
  }
  ul {
    list-style: none;
    margin: 1em 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${gutter}px;
    row-gap: ${gutter}px;
  }
  li {
    border: 1px solid hsla(0, 0%, 0%, 0.5);
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border-radius: 30%;
    background: #3949AB;
    color: white;
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.3);
    box-shadow: 0px 5px 5px 1px hsla(0, 0%, 0%, 0.5);
    overflow: hidden;
  }
  button {
    background: var(--primary-color);
    color: white;
    font-weight: bold;
    padding: 0.7em;
    border: 2px solid black;
    border-radius: 20%;
    box-shadow: ${buttonShadow}px ${buttonShadow}px ${buttonShadow}px 0px hsla(0, 0%, 0%, 0.5);
    cursor: pointer;
  }
  .button-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`