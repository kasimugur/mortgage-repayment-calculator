import { iconCalculator, ilistrationEmpty } from '../page/page'
import '../scss/style.scss'

export default function Mortgage() {
  return (
    <>
      <div className="container">
        <div className="card-item">
          <div className="header">
            <h3>Mortgage Calculator </h3>
            <a>Clear All</a>
          </div>
          <form className="form error">
            <div className="amount">
              <label>Mortgage Amount</label>
              <input type="number"  />
              <span>£</span>
              <p>This fıeld is required</p>
            </div>
            <div className="inpt">
              <div className="inpt-term">
                <label>Mortgage Term</label>
                <input type="number"  />
                <span>years</span>
                <p>This fıeld is required</p>
              </div>
              <div className="inpt-rate">
                <label>Interest Rate</label>
                <input type="number" />
                <span>%</span>
                <p>This fıeld is required</p>
              </div>
            </div>
            <div className="type">
              <label>Mortgage Type </label>
              <div className="rad">
                <input type="radio" />
                <label>Repayment</label>
              </div>
              <div className="rad ">
                <input type="radio" />
                <label>Interest Only</label>

              </div>
              <p>This fıeld is required</p>
            </div>
            <button> {iconCalculator}Calculate Repayments</button>
          </form>
        </div>
        <div className="card">
          <div className="row">
            {ilistrationEmpty}
            <h2>  Results shown here</h2>
            <p>Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.</p>
          </div>
        </div>
      </div>
    </>
  )
}