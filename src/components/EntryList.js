import React from 'react';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem';
import selectEntries from '../selectors/entries';

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
      entries: selectEntries(state.entries, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(EntryList);