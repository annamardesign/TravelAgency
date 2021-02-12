import React, {useState} from 'react';
import {MdExpandMore} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import './post.css';

const Post = (props) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

    return  (

        <div className="activity-wrapper" >
            <div className="activity" onClick={() => props.handleClick(props.post.index)} toggled={props.toggled} key={props.post.id} deal={props.post}>
              <div className={props.toggled? "details-clicked" : "details"} >
                <div className="icon" >{props.toggled? <MdKeyboardArrowUp/>:<MdExpandMore /> }</div>
                <div className= {props.toggled? "activity-description-clicked":"activity-description"}>
                  {props.toggled? <p className="more">{props.post.shortDescription}</p> : null}</div>
              </div>
               <div className="activity-img-wrap">
                <img className="activity-image" src={props.post.pictures}/>
               </div>
               <div className="activity-price">{props.post.price.amount} {props.post.price.currencyCode} 
                <a className="activity-bookingLink" onClick={() => openInNewTab(`${props.post.bookingLink}`)}>Book</a></div>
               <div className="activity-name">{props.post.name}</div>
          </div>
        </div>
    );  
}
 
export default Post;

