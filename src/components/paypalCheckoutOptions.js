import React from 'react';
import PaypalButton from "./paypalButton"

import Customadd from "./custom-add"





export default  class PaypalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '1', selectedOption: this.props.options[0], selectedPrice: '0'};
      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleOptionChange(event){
      //this.selectedOption = event.target.options[event.target.selectedIndex].text;
      this.setState({selectedOption: event.target.options[event.target.selectedIndex].text})
      this.setState({selectedPrice:event.target.selectedIndex })
      //alert(this.selectedOption);
      //this.render();
    }   
      
  

    render() {

     

        const { title, options, price } = this.props;
        var showOptions = true;
        if(this.props.options.length > 0){
          showOptions = false;
        }
        const id = title + this.state.selectedOption
      return (
        <div>
          


            
            <form>
         
            <label for="product_quantity">Quantity:</label>
            <input id={"quantity_"} type="number" placeholder="Quantity" min = "1"name="product_quantity" defaultValue={1} onChange={this.handleChange}></input><br></br>

            
            <label for="options_drop_down" hidden={showOptions}>Options: </label>
                        <select id="options_drop_down" onChange={this.handleOptionChange} hidden={showOptions}>
                            
                            {
                                (this.props.options).map((data) =>
                                    <option value={data}>{data}</option>
                                )
                            }
                        </select>
            
            </form>
            <div>
              
            <Customadd price={price[this.state.selectedPrice]} id= {id} title = {title}  option ={this.state.selectedOption}  amount={this.state.value}/>
                
            </div>

        </div>
      );
    }
  }
  