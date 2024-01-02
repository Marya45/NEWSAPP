import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card h-100" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://cdn.wionews.com/sites/default/files/2023/06/21/361229-untitled-design-2023-06-21t205143604.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            {/* target = _blank for opening the link in a new tab */}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
