import React, {Component} from 'react'
import {Card, Button, Form, Row, Col} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input1:  0,
      input2: 0,
      input3: 0,
      results: 0 
    };
    this.handleinput1Change = this.handleinput1Change.bind(this);
    this.handleinput2Change = this.handleinput2Change.bind(this);
    this.handleinput3Change = this.handleinput3Change.bind(this);
  }
  handleinput1Change (evt) {
    console.log(evt.target.value);
    this.setState({ input1: Number(evt.target.value) });
  }
  handleinput2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ input2: Number(evt.target.value) });
  }
  handleinput3Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ input3: Number(evt.target.value) });
  }

  addAction =(event)=> {
    let x = this.state.input1 + this.state.input2 + this.state.input3
    this.setState({results: x })
  }

  substractAction =(event)=> {
    let x = this.state.input1 - this.state.input2 - this.state.input3
    this.setState({results: x })
  }

  render() {
    return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Form className={"container"}>
          <Form.Group as = {Row} id="input1">
            <Col sm={{span:4 ,offset: 2}}>
              <Form.Control placeholder="Input1" type="number" onChange={this.handleinput1Change}/>
              
            </Col>
              <Form.Check type="checkbox"/>
          </Form.Group>

          <Form.Group as = {Row} id="input2">
            <Col sm={{span:4 ,offset: 2}}>
              <Form.Control placeholder="Input2" type="number" onChange={this.handleinput2Change}/>
            </Col>
              <Form.Check type="checkbox"/>
          </Form.Group>

          <Form.Group as = {Row} id="input3">
            <Col sm={{span:4 ,offset: 2}}>
              <Form.Control placeholder="Input3" type="number" onChange={this.handleinput3Change}/>
            </Col>
              <Form.Check type="checkbox"/>
          </Form.Group>
          
          <Col sm={{offset: 3}}>
            <input type="button" onClick={this.addAction} value="+" /> {' '}
            <input type="button" onClick={this.substractAction} value="-" /> {' '}
            <Button>x</Button> {' '}
            <Button>/</Button> {' '}
          </Col>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">Results: {this.state.results}</Card.Footer>
    </Card>


    )
  }
}

export default App
