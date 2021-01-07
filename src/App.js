import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function App() {
    const [list, setList] = useState([
        { value: "0", isChecked: true, placeholder: "input1" },
        { value: "0", isChecked: true, placeholder: "input2" },
        { value: "0", isChecked: false, placeholder: "input3" }]
    )
    //   const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
    const [operand, setOperand] = useState("+");

    const handleInputChange = (selectedIndex, value) => {
        setList(list.map((item, index) => {
            if (selectedIndex === index) {
                return { ...item, value: value }
            } return item
        }))
    }

    const handleCheckboxChange = (selectedIndex, value) => {
        setList(list.map((item, index) => {
            if (selectedIndex === index) {
                return { ...item, isChecked: value }
            } return item
        }))
    }

    const handleOperandChange = (value) => {
        setOperand(value)
    }

    const isCheckedCount = list.reduce((total, item) => {
        return total + (item.isChecked ? 1 : 0)
    }, 0)

    useEffect(() => {
        if (isCheckedCount === 1) {
            alert("Error! tick 2 checkboxes or more!")
        } else if (isCheckedCount === 0) {
            setResult(0)
        }
        else {
            switch (operand) {
                default:
                    setResult(
                        list.reduce((total, item) => {
                            return item.isChecked ? parseInt(item.value, 10) + total : total
                        }, 0))
                break
                case "-":
                    setResult(
                        list.reduce((total, item) => {
                            if(item.isChecked === true){
                                if(total === 0){
                                    return parseInt(item.value, 10)
                                }else {
                                    return total - parseInt(item.value, 10) 
                                }
                            }
                            return total
                        }, 0))
                break
                case "x":
                    setResult(
                        list.reduce((total, item) => {
                            return item.isChecked ? parseInt(item.value, 10) * total : total
                        }, 1))
                break
                case "/":
                    setResult(
                        list.reduce((total, item) => {
                            return item.isChecked ? parseInt(item.value, 10) / total : total
                        }, 1))
                break
            }
        }
    }, [list, isCheckedCount, operand]);

    return (
        <Card>
            <Card.Header>Ilyas Abduttawab</Card.Header>
            <Card.Body>
                <Form className={"container"}>
                    {list.map((item, index) => {
                        return (<Form.Group as={Row} key={index}>
                            <Col sm={{ span: 4, offset: 2 }}>
                                <Form.Control onChange={(event) => handleInputChange(index, event.target.value)} placeholder={item.placeholder} type="number" value={item.value} disabled={!item.isChecked}/>
                            </Col>
                            <Form.Check type="checkbox" checked={item.isChecked} value={item.isChecked} onChange={(event) => handleCheckboxChange(index, event.target.checked)} />
                        </Form.Group>)
                    })}

                    <Col sm={{ offset: 3 }}>
                        <Button onClick={() => handleOperandChange("+")} variant={operand === "+" ? "success" : "primary"}>+</Button> {' '}
                        <Button onClick={() => handleOperandChange("-")} variant={operand === "-" ? "success" : "primary"}>-</Button> {' '}
                        <Button onClick={() => handleOperandChange("x")} variant={operand === "x" ? "success" : "primary"}>x</Button> {' '}
                        <Button onClick={() => handleOperandChange("/")} variant={operand === "/" ? "success" : "primary"}>/</Button> {' '}
                    </Col>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted">{`Results: ${result}`}</Card.Footer>
        </Card>
    );
}
export default App
