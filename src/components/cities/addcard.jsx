import React, {useState} from 'react';
import {MdExpandMore} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import './addcard.css';

const AddCard = (props) => {


    return  (

        <div className="activity-wrapper" >
            <div className="activity" onClick={() => 
              props.handleClick(props.index)} toggled={props.toggled} key={props.deal.id} deal={props.deal}>
              <div className={props.toggled? "details-clicked" : "details"} >
                <div className="icon" >{props.toggled? <MdKeyboardArrowUp/>:<MdExpandMore /> }</div>
                <div className= {props.toggled? "activity-description-clicked":"activity-description"}>
                  {props.toggled? <p className="more">{props.deal.shortDescription}</p> : null}</div>
              </div>
               <div className="activity-img-wrap">
                <img className="activity-image" src={props.deal.pictures}/>
               </div>
               <div className="activity-price">{props.deal.price.amount} {props.deal.price.currencyCode} 
                <a className="activity-bookingLink" href={props.deal.bookingLink}>Book</a></div>
               <div className="activity-name">{props.deal.name}</div>
          </div>
        </div>
    );  
}
 
export default AddCard;

