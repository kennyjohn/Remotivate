import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Remotivate</h1>
            <p> Motivation comes and goes. Unfortunately, it happens more often than we'd like. With Remotivate, you can quickly remind yourself of the things that drive you every day. Come on in, and stay inspired!</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);