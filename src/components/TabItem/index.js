// Write your code here
import './index.css'

const TabI = props => {
  const {tabsList, click, isactive} = props

  const {tabId, displayText} = tabsList
  const css = isactive ? 'button' : 'not'

  const clicked = () => {
    click(tabId)
  }
  return (
    <div>
      <li className="li">
        <button className={`button ${css}`} type="button" onClick={clicked}>
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabI
