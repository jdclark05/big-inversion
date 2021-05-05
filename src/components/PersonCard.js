import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const PersonCard = props =>{
    return(
        <div class="d-flex justify-content-center m-3">
            <Card style={{ width: '18rem', borderColor: "#777" }}>
                <CardBody className="p-0">
                    <CardTitle style={{ width: '100%', backgroundColor: "#999", borderColor: "#000" }}><h2>{props.lastName}, {props.firstName}</h2></CardTitle><br></br>
                    <CardSubtitle className="mb-2 text-muted">Age: {props.age}</CardSubtitle><br></br>
                    <CardSubtitle className="mb-2 text-muted">Hair Color: {props.hairColor}</CardSubtitle><br></br>
                </CardBody>
            </Card>
        </div>
    );
}


export default PersonCard;