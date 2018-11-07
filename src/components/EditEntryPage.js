import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
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
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        let text = this.props.entry.text;
        let video = this.props.entry.video;
        let image = this.props.entry.image;
        let createdAt = this.props.entry.createdAt;
        return (
          <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Entry</h1>
              </div>
            </div>

           <div className={text ? "edit-entry__preview" : video || image ? "edit-entry__preview media-entry" : ""}>
                {   image ? <img src={image.replace("http:", "https:")}></img> :
                    text ? <p>{text}</p> :
                    video ? <iframe width="325" height="275" src={video.replace("watch?v=", "embed/")} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe> :
                    null
                }
                <p className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</p>
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