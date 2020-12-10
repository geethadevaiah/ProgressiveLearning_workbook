import React, { Component } from 'react';

// Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import FormLabel from 'react-bootstrap/FormLabel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// Main Todo component
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { // 2 items required.. current item and main full list of items
            currentItem: {
                text: '',
                key: ''
            },
            list: []
        }
        // handlers
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // update just the current item from the target value
    handleChange(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    // handle submit of current todo item
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.currentItem.text.length === 0) {
            return;
        }
        const newItem = this.state.currentItem;
        this.setState({
            list: [...this.state.list, newItem],
            currentItem: {
                text: ''
            }
        })
    }

    // delete handler
    handleDelete(delKey) {
        // const delKey = e.target.id;
        console.info("This is the key to be deleted ? ", delKey)
        const items = this.state.list.filter(item => item.key!== delKey)
        console.info("items? ",items)
        this.setState({
            list : items
        })
    }

    render() {
        return (
            <Container>

                <br />
                <h1>This is testing App!</h1>
                <Form onSubmit={this.handleSubmit}>
                    
                     <FormLabel>Do you have any tasks pending ?   </FormLabel>
                        <input type="text" className="form-control col-6" id={this.state.currentItem.key}
                            value={this.state.currentItem.text} onChange={this.handleChange} /> 
                        <Button className="btn mt-1" type="submit">Add</Button>
                        
                </Form>
                <hr />
                {/* conditional rendering to display the block only when there are some items are in the list. */}
                {this.state.list.length > 0 ? 
                <Jumbotron>
                <h2>Jumbotron Display of the list:</h2>
                    <ListGroup>
                        {
                            this.state.list.map(item => (
                                <ListGroupItem key={item.key}>{item.text}
                                    <Button id={item.key} onClick={
                                        // function handling
                                        () => {
                                            this.handleDelete(item.key)
                                        }
                                    } 
                                    className="float-right"> X </Button>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                    </Jumbotron>        
                    :
                    <h3>Add Something to the list using above box!</h3>
                }
                    
            </Container>
        )
    }

}