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
        const id = title + this.state.selectedOption
        if(this.props.options.length > 0){
            return (
                <div>
                <form>
                    <label for="options_drop_down" ></label>
                        <select style={{height: 40, width: 253, border: "1px solid #8c8c8c", borderRadius: 4, padding: '0px 8px', fontSize: 14, color: '#121212', cursor: 'pointer'}} id="options_drop_down" onChange={this.handleOptionChange}>
                        {
                            (this.props.options).map((data) =>
                                <option onLoad={increaseCounter()} style={{cursor: 'pointer'}} value={data}>{data}</option>
                            )
                        }
                        </select>
                    <br></br>
                    <br></br>
                    <label for="product_quantity"></label>
                        <input style={{width: "89px", height: 40, padding: '0px 8px', border: '1px solid #8c8c8c', borderRadius: 4, backgroundColor: '#ffffff', backgroundSize: 'cover', font: 'Roboto', fontSize: 14, color: '#121212'}} defaultValue="1" min="1" id={"quantity_"} type="number" placeholder="QUANTITY" name="product_quantity" onChange={this.handleChange}></input><br></br>
                </form>
                <div>
                    <br></br>
                    <p style={{textDecoration: 'none solid rgb(0, 0, 0)', width: 259, height: 22, font: 'Roboto', fontSize: 18, color: '#000000'}}>${price[this.state.selectedPrice].toFixed(2)} USD</p>
                    <Customadd style={{cursor: 'pointer'}} price={price[this.state.selectedPrice]} id= {id} title = {title}  option ={this.state.selectedOption}  amount={this.state.value} imageThumb ={imageThumb}/>
                    <br></br>
                </div>

                </div>
            );
        }
        else{
            return (
                    <div>
                        <form>
                            <label for="product_quantity"></label>
                                <input style={{width: "89px", height: 40, padding: '0px 8px', border: '1px solid #8c8c8c', borderRadius: 4, backgroundColor: '#ffffff', backgroundSize: 'cover', font: 'Roboto', fontSize: 14, color: '#121212'}} defaultValue="1" min="1" id={"quantity_"} type="number" placeholder="QUANTITY" name="product_quantity" onChange={this.handleChange}></input><br></br>
                        </form>
                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p style={{textDecoration: 'none solid rgb(0, 0, 0)', width: 259, height: 22, font: 'Roboto', fontSize: 18, color: '#000000'}}>${price[this.state.selectedPrice].toFixed(2)} USD</p>
                            <Customadd style={{cursor: 'pointer'}} price={price[this.state.selectedPrice]} id= {id} title = {title}  option ={this.state.selectedOption}  amount={this.state.value} imageThumb ={imageThumb}/>
                            <br></br>
                        </div>
                    </div>
                  );

        }

    }
  }
  