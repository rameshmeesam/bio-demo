import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col } from 'reactstrap';
import  MenuLinks  from '../../data/beverage-menu';

export default class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          beverage: '- Please Select -'
        };

      }    

    
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.beverage]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        console.log("name of the customer" + this.state.name);  
        console.log("bevarage " + this.state.beverage);  
        this.props.history.push({
            pathname:"/",
            state:{
                custName: this.state.name,
                beverageVal:this.state.beverage
             }
           });       
      }


    render() {
        return (
            <div className="order-box">
                <div className="order-title">ORDER YOUR BEVERAGE</div>
                <div className="order-form">
                <Form>
                    <FormGroup row>                        
                        
                        <Label for="name" sm={2}>NAME</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" id="name" placeholder="Name of the beverage" onChange={this.onChange} />
                        </Col>
                    
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>BEVERAGE</Label>
                        <Col sm={10}>
                                <Input type="select" name="beverage" id="beverage" onChange={this.onChange}>
                                <option value={this.state.beverage} >- Please Select -</option>   
                                    {MenuLinks.map((data, index) => {
                                        
                                        return data.Beverages.map((data1, index1) => {
                                            return <option key={data1.BeverageId} value={data1.Name}>{data1.Name}</option>                                           
                                        })
                                    })
                                    }  
                                

                             </Input>
                        </Col>
                    </FormGroup>


                    <Button onClick={this.onSubmit}>Submit</Button>

                </Form>
                </div>
            </div>
        );
    }
}