import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';

  function RenderComments({comments, addComment, dishId}){
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
                    <CommentForm dishId = {dishId} addComment= {addComment}/>
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
        if(props.isLoading){
            return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            );
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish!=null){
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                     addComment = {props.addComment}
                     dishId = {props.dish.id}
                     />
                </div>
            </div>
            </div>
        );
        }
    }
export default DishDetail;