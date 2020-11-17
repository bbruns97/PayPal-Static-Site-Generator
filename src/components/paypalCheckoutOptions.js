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

     
      var counter = -1;

      function increaseCounter(){
        counter++;
      }

        const { title, options, price, imageThumb} = this.props;
        var showOptions = true;
        if(this.props.options.length > 0){
          showOptions = false;
        }
        const id = title + this.state.selectedOption
      return (
        <div>
          


            
            <form>

            <label for="options_drop_down" hidden={showOptions} ></label>
                        <select style={{height: 40, width: 200, border: "1px solid lightgray", borderRadius: 3, fontWeight: 'bold', paddingLeft: 10, cursor: 'pointer'}} id="options_drop_down" onChange={this.handleOptionChange} hidden={showOptions}>
                            {

                                (this.props.options).map((data) =>
                                    <option onLoad={increaseCounter()} style={{cursor: 'pointer'}} value={data}>{data + " - $" + price[counter]}</option>

                                )
                            }
                        </select>
            <br></br>
            <br></br>
            <label for="product_quantity"></label>
            <input style={{fontWeight: "bold",width: "110px", min: "1", height: 40, border:"1px solid lightgray", borderRadius: 3, paddingLeft: 10}} id={"quantity_"} type="number" placeholder="QUANTITY" name="product_quantity" onChange={this.handleChange}></input><br></br>

            
            </form>
            <div>
              
            <br></br>
            <Customadd price={price[this.state.selectedPrice]} id= {id} title = {title}  option ={this.state.selectedOption}  amount={this.state.value} imageThumb ={imageThumb}/>
                
            <br></br>
            </div>

        </div>
      );
    }
  }
  