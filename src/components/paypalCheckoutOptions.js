import React from 'react';
import PaypalButton from "./paypalButton"

export default  class PaypalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '1'};

      
  
      this.handleChange = this.handleChange.bind(this);
    
    }
  
    

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  

    


    render() {

        const { title, options, paypalInput } = this.props;

      return (
        <div>
            <form>
         

            <label for="product_quantity">Quantity:</label>
            <input id={"quantity_"} type="number" placeholder="Quantity" name="product_quantity" defaultValue={1} onChange={this.handleChange}></input><br></br>
                       
            
            </form>
            <div>

                <PaypalButton price={ paypalInput } title = {title} option = { options }amount = { this.state.value } />
            </div>

        </div>
      );
    }
  }
  
  