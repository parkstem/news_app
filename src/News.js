import React from 'react';
import propTypes from 'prop-types';
import './News.css';


function News({ title, poster,author,description}) {
    return (
        <div className="News">
            <div className="News__Column">
                <NewsImages poster={poster} alt={title} />
            </div>
            <div className="News__Column">
                <h1> {title}</h1>
                <div className="News__Author">
                    <span className="News__Author2">{author}</span>
                </div>
                <p className="News__Description">
                    {description}
                </p>
            </div>
        </div>
    )
}

function NewsImages({poster,alt}) {
    return (
        <img src={poster} alt = {alt} title={alt} className="News__Images" />
    )
}

News.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}



export default News;
