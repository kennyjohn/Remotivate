import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti

const EntryListItem = ({ id, text, video, image, createdAt }) => (
    <Link className={text ? "list-item onHoverText" : video || image ? "list-item onHoverMedia" : ""} to={`/edit/${id}`}>
    { image ? <img src={image.replace("http:", "https:")}></img> :
        text ? <p>{text}</p> :
        video ? <iframe width="325" height="275" src={video.replace("watch?v=", "embed/")} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe> :
        null
    }
    <p className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</p>
    </Link>
);

export default EntryListItem;