import React from 'react';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem';

const EntryList = (props) => (
    <div className="content-container content-container--stretch list-grid">
         {
            props.entries.length === 0 ? (
            <div className="list-item list-item--message">
                <span>No entries at the moment</span>
                </div>
            ) : ( 
                props.entries.map((entry, index) => {
                    return <EntryListItem key={index} {...entry}/>;
                })
            )
        }
    </div>
  );

  const mapStateToProps = (state) => {
    return {
      entries: state.entries
    };
  };
  
  export default connect(mapStateToProps)(EntryList);