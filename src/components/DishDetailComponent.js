import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function RenderComments({comments}){
        if(comments!=null){
            return(
                <div>
                    <h4><strong>Comments</strong></h4>
                     <ul className="list-group">
                        {comments.map((obj) => {
                            return(
                                <li className="list-group-item">
                                    {obj.comment}
                                    <br/>
                                    <br/>
                                    --{obj.author},{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(obj.date)))}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
        else{
            return(
            <div></div>
            );
        }
    }
    function RenderDish({dish}){
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
            </div>
        );
    }
export default DishDetail;