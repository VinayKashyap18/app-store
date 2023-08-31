// Write your code here
import './index.css'

const AppI = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="li">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppI
