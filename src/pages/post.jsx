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

        <div className="post-wrapper" >
            <div className="post"  key={props.post.id} deal={props.post}>
              {/* <div className={props.toggled? "details-clicked" : "details"} >
                <div className="icon" >{props.toggled? <MdKeyboardArrowUp/>:<MdExpandMore /> }</div>
                <div className= {props.toggled? "post-description-clicked":"post-description"}>
                  {props.toggled? <p className="more">{props.post.shortDescription}</p> : null}</div>
              </div> */}
              
               <div className="post-image-wrap">
                <img className="post-image" src={props.post.pictures}/>
                <a className="post-bookingLink" onClick={() => openInNewTab(`${props.post.bookingLink}`)}>
                  <p className="post-name">{props.post.name}<br/> <span>{props.post.price.amount} {props.post.price.currencyCode}</span> </p></a>
               </div>
               <span className="post-price">{props.post.price.amount} {props.post.price.currencyCode} 
                </span>
          </div>
        </div>
    );  
}
 
export default Post;

