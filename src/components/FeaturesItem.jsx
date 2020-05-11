import React from 'react'

const FeatureItem = (props) => {
    const {
        icon,
        title,
        text
    } = props;

    return (
        <div className="featureItem">
            <div className="icon-background">
                <i className={`icon-${icon}`}></i>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem