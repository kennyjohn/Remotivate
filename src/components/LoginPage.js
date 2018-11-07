import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Remotivate</h1>
            <img className="header__login-photo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Simpsons6x13.jpg/235px-Simpsons6x13.jpg" alt="Simpsons Header Photo"/>
            <p> Motivation comes and goes. Unfortunately, it happens more often than we'd like. With Remotivate, you can quickly remind yourself of the things that drive you every day. Come on in, and stay inspired!</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);