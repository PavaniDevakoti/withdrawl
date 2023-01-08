// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, getBalance} = props
  const {value} = denomination

  const getValue = () => getBalance(value)

  return (
    <li>
      <button className="button" type="button" onClick={getValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
