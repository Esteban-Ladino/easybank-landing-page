import React from 'react'

const ArticlesCard = (props) => {
    const {
        image,
        author,
        title,
        details
    } = props

    return (
        <div className="articleCard">
            <figure className="card-img">
                <img src={image} alt=""/>
            </figure>
            <div className="content">
                <span className="author">By {author}</span>
                <h4>{title}</h4>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default ArticlesCard
