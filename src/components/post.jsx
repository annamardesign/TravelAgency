import React from "react";
import "./post.css";

const Post = (props) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="post-wrapper">
      <div className="post" key={props.post.id} deal={props.post}>
        <div className="post-image-wrap">
          <img
            className="post-image"
            alt="post image"
            src={props.post.pictures}
          />
          <button
            className="post-bookingLink"
            onClick={() => openInNewTab(`${props.post.bookingLink}`)}
          >
            <p className="post-name">
              {props.post.name}
              <br />{" "}
              <span>
                {props.post.price.amount} {props.post.price.currencyCode}
              </span>{" "}
            </p>
          </button>
        </div>
        <span className="post-price">
          {props.post.price.amount} {props.post.price.currencyCode}
        </span>
      </div>
    </div>
  );
};

export default Post;
