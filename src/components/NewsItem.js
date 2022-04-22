
import React, { Component } from "react";

export default class NewsItem extends Component {
 
  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-3 crdmx">
        <div className="card mx-6" style={{width: "18rem"}}>
          <img src={imageurl?imageurl:"https://c.ndtvimg.com/2022-04/h0g8gf78_ms-dhoni-ravindra-jadeja-bcciipl_625x300_11_April_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
   {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">
            {description}...
            </p>
            
            <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-info">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
