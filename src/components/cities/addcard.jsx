import React, {useState} from 'react';
import {MdExpandMore} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {VscClose} from 'react-icons/vsc';
import './addcard.css';

const AddCard = (props) => {
  const [toggle, setToggle]= useState(false)
    
  const handleToggle = () => {
    const { currentState } = toggle;
    setToggle(!currentState);
    }

    return  (

        <div className="activity-wrapper" >
            <div className="activity" onClick={handleToggle} key={props.deal.id} deal={props.deal}>
              <div className={toggle? "details-clicked" : "details"} >
                <div className="icon" >{toggle? <MdKeyboardArrowUp/>:<MdExpandMore /> }</div>
                <div className="closeModal"><VscClose onClick={handleToggle}/></div>
                <div className= {toggle? "activity-description-clicked":"activity-description"}>
                  {toggle? <p className="more">{props.deal.shortDescription}</p> : null}</div>
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

