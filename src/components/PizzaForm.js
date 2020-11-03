import React from "react"

class PizzaForm extends React.Component {

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input onChange={(e) => {this.props.handleChange(e)}} name ="topping" type="text" className="form-control" placeholder="Pizza Topping" value={this.props.changePizza.topping}
           />
        </div>
        <div className="col">
          <select onChange={(e) => {this.props.handleChange(e)}}  name="size" value={this.props.changePizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(e) => {this.props.handleChange(e)}}  name="vegetarian" className="form-check-input" type="radio" value="true" checked={null} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(e) => {this.props.handleChange(e)}} name="vegetarian" className="form-check-input" type="radio" value="false" checked={null} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => {this.props.savePizza(e)}}>Submit</button>
        </div>
      </div>

    )
  }
}

export default PizzaForm
