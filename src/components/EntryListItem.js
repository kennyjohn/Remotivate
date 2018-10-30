import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti

const EntryListItem = ({ id, text, author, video, image, purpose, createdAt }) => (
    <Link className={text ? "list-item onHoverText" : video || image ? "list-item onHoverMedia" : ""} to={`/edit/${id}`}>
    { image ? <img src={image}></img> :
        text ? <p>{text}</p> :
        video ? <iframe width="335" height="250" src={video.replace("watch?v=", "embed/")} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe> :
        null
    }
    <p className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</p>
    </Link>
);

export default EntryListItem;