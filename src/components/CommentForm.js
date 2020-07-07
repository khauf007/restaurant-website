import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Col, Row, Label, Button} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => (val) && (val.length>=len);

class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.yourname, values.comment);
    }
    render(){
        return(
            <>
            <Button outline onClick={this.toggleModal} className="mt-1">
                <span className="fa fa-comment-o fa-lg"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating" className="form-control" id="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="yourname">Your Name</Label>
                            <Control.text model=".yourname" name="yourname" className="form-control" id="rating" placeholder="Your Name" 
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}/>
                            <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" name="comment" className="form-control" id="comment" rows="6"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default CommentForm;