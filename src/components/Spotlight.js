import React from 'react';
import { connect } from 'react-redux';

export class Spotlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    testing = (e) => {
        let element = document.querySelector(".page-header").style;
        if(this.state.toggle) {
            element.paddingBottom = "200px";
        } else {
            element.paddingBottom = "32px";
        }
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
        // use e.target and button__toggle
    }
    render() { 
        return (
            <div className="page-header">
                <div className="content-container">
                    <div className="page-header__bio">
                        <img className="page-header__img" src={this.props.spotlight.src}/>
                            {this.props.spotlight.description ? <h1 className="page-header__title">{this.props.spotlight.name}</h1> :
                        <p className="page-header__title--error">Please refresh the page until this message goes away. This is an issue that has been noted and will be fixed as soon as possible. If you run into any other issues, please let me know about them. Thank you, enjoy the rest of the application!</p>}
                        <p className="page-header__caption">
                            {this.props.spotlight.description}
                        </p>
                    </div>
                    {this.props.spotlight.description && <p className="page-header--responsive">
                    This is an individual that has personally inspired me, please check them out!</p>}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        spotlight: state.spotlight
    };
};

export default connect(mapStateToProps)(Spotlight);