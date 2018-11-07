import React from 'react';
import { connect } from 'react-redux';

export const Spotlight = (props) => (
    <div className="page-header">
        <div className="content-container">
            <div className="page-header__bio">
                <img className="page-header__img" src={props.spotlight.src} alt={props.spotlight.name}/>
                <h1 className="page-header__title">{props.spotlight.name}</h1>
                <p className="page-header__caption">{props.spotlight.description}</p>
            </div>
            {props.spotlight.description && <p className="page-header--responsive">
            This is an individual that has personally inspired me, please check them out!</p>}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        spotlight: state.spotlight
    };
};

export default connect(mapStateToProps)(Spotlight);
