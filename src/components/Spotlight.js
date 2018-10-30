import React from 'react';
import { connect } from 'react-redux';

export const Spotlight = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__bio">
                    <img className="page-header__img" src={props.spotlight.src}/>
                        {props.spotlight.description ? <h1 className="page-header__title">{props.spotlight.name}</h1> :
                    <p className="page-header__title--error">Please refresh the page until this message goes away. This is an issue that has been noted and will be fixed as soon as possible. If you run into any other issues, please let me know about them. Thank you, enjoy the rest of the application!</p>}
                    <p className="page-header__caption">
                        {props.spotlight.description}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        spotlight: state.spotlight
    };
};

export default connect(mapStateToProps)(Spotlight);