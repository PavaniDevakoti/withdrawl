import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  getBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="home-container">
        <div className="card-container">
          <div className="name-container">
            <button className="logo" type="button">
              S
            </button>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="para">Your Balance</p>
            <p className="name">{balance}</p>
          </div>
          <p className="rs">In Rupees</p>
          <p className="name">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denom-list">
            {denominationsList.map(eachVal => (
              <DenominationItem
                denomination={eachVal}
                key={eachVal.id}
                getBalance={this.getBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
