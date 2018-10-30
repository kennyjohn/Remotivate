// use 'EntryForm' component
import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

export class EditEntryPage extends React.Component {
    onSubmit = (entry) => {
        this.props.startEditEntry(this.props.entry.id, entry);
        window.location.reload(); /*Temporary fix*/
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveEntry({id: this.props.entry.id});
        this.props.history.push('/');
    }
    onBeforeUnload =  () => {
        return window.unbeforeunload = () => {
            window.scrollTo(0, 0);
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
          <div>
            <div className="page-header">
              <div className="content-container">
              <h1 className="page-header__title">Edit Entry</h1>
              </div>
            </div>
    
            <div className="content-container">
                <EntryForm
                  entry={this.props.entry}
                  onSubmit={this.onSubmit}
                />
                <button className="button button--remove button__extend" onClick={this.onRemove}>Remove Entry</button>
            </div>
        </div>
        );
      }
};

const mapStateToProps = (state, props) => ({
    entry: state.entries.find((entry) =>
    entry.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    startEditEntry: (id, entry) => dispatch(startEditEntry(id, entry)),
    startRemoveEntry: (data) => dispatch(startRemoveEntry(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryPage);