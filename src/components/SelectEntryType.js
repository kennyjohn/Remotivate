import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { startAddEntry } from '../actions/entries';
import EntryForm from './EntryForm';

export class SelectEntryType extends React.Component {
    state = {
        isActive: false,
        buttonClicked: null
    }
    onSubmit = (entry) => {
        console.log(entry);
        if(this.state.isActive) {
            this.setState({
                isActive: false
            });
        }
        this.props.startAddEntry(entry);
        // window.location.reload();
    };
    toggleModal = (event) => {
        this.setState({
            isActive: !this.state.isActive,
            buttonClicked: event.target.value 
        }, () => {
            // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
            // console.log(this.state.buttonClicked);
        });
    }
    componentWillMount() {
        // https://github.com/reactjs/react-modal/issues/133
        ReactModal.setAppElement('body');
    }
    render() {
        return (
            <div className="button-container">
                <button name="clicked" value="text" className="button" onClick={this.toggleModal}>Add Text</button>
                <button name="clicked" value="video" className="button" onClick={this.toggleModal}>Add Video</button>
                <button name="clicked" value="image" className="button" onClick={this.toggleModal}>Add Image</button>
                <ReactModal isOpen={this.state.isActive} onRequestClose={this.toggleModal} 
                    contentLabel="Submit Entry Modal">
                    <div>
                        <EntryForm 
                        onSubmit={this.onSubmit}
                        buttonClicked={this.state.buttonClicked}
                        ></EntryForm>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddEntry: (entry) => dispatch(startAddEntry(entry))
});
  
export default connect(undefined, mapDispatchToProps)(SelectEntryType);