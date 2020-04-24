import React from 'react';
import PaypalButton from "./paypalButton"

export default  class PaypalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '1', selectedOption: ""};
      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleOptionChange(event){
      //this.selectedOption = event.target.options[event.target.selectedIndex].text;
      this.setState({selectedOption: event.target.options[event.target.selectedIndex].text})
      //alert(this.selectedOption);
      //this.render();
    }

    render() {

        const { title, options, paypalInput } = this.props;
        var showOptions = true;
        if(this.props.options.length > 0){
          showOptions = false;
        }
      return (
        <div>
          


            
            <form>
         
            <label for="product_quantity">Quantity:</label>
            <input id={"quantity_"} type="number" placeholder="Quantity" name="product_quantity" defaultValue={1} onChange={this.handleChange}></input><br></br>

            
            <label for="options_drop_down" hidden={showOptions}>Options: </label>
                        <select id="options_drop_down" onChange={this.handleOptionChange} hidden={showOptions}>
                            <option value="invalid_option">Select an Option</option>
                            {
                                (this.props.options).map((data) =>
                                    <option value={data}>{data}</option>
                                )
                            }
                        </select>
            
            </form>
            <div>
                <PaypalButton price={paypalInput} title = {title} option ={this.state.selectedOption}  amount={this.state.value} />
            </div>

        </div>
      );
    }
  }
  
  