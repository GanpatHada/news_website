import React, { Component } from 'react'

export class Newsitems extends Component {
    
    render() {
        
        let {title,description,imageurl,newsurl} =this.props;
        return (
            <div className="card my-2 mx-2 " >
                <img src={imageurl?imageurl:"https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-primary">Read more</a>
                </div>
            </div>

        )
    }
}

export default Newsitems
