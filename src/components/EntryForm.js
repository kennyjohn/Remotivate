import React from 'react';
import moment from 'moment';

export default class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.entry ? props.entry.text : '',
            author: props.entry ? props.entry.author : '',
            video: props.entry ? props.entry.video : '',
            image: props.entry ? props.entry.image : '',
            purpose: props.entry ? props.entry.purpose : '',
            createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
            disabledTextFlag: true, 
            disabledImageFlag: true, 
            disabledVideoFlag: true,
            error: ''
        };
    }  
    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({ text }));
    }
    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({ author }));
    }
    onVideoURLChange = (e) => {
        const url = e.target.value;
        this.setState(() => ({ video: url }));
    }
    onImageURLChange = (e) => {
        const url = e.target.value;
        this.setState(() => ({ image: url }));
    }
    onPurposeChange = (e) => {
        const purpose = e.target.value;
        this.setState(() => ({ purpose }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        const clicked = this.props.buttonClicked;
        if(!this.state.text && clicked === 'text') {
            this.setState(() => ({ error: 'Please provide text for your text entry.' }));
            return;
        }
        else if(!this.state.video && clicked === 'video') {
            this.setState(() => ({ error: 'Please provide a URL for your video entry.' }));
            return;
        }
        else if(!this.state.image && clicked === 'image') {
            this.setState(() => ({ error: 'Please provide a URL for your image entry.' }));
            return;
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                text: this.state.text,
                author: this.state.author,
                video: this.state.video,
                image: this.state.image,
                purpose: this.state.purpose,
                createdAt: this.state.createdAt.valueOf()
            });  
        }
    };
    componentDidMount() {
        if(this.state.text) {
            this.setState(() => ({
                disabledTextFlag: false,
                disabledImageFlag: true,
                disabledVideoFlag: true
            }));
        } else if(this.state.image) {
            this.setState(() => ({
                disabledTextFlag: true,
                disabledImageFlag: false,
                disabledVideoFlag: true
            }));
        } else {
            this.setState(() => ({
                disabledTextFlag: true,
                disabledImageFlag: true,
                disabledVideoFlag: false
            }));
        }
    }
    render() {
        return (
            <div>
                {this.props.buttonClicked && <h1 className="form__entry-header">Entry Form</h1>}
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <textarea
                    /* disabled attribute accepts single attribute boolean (e.g. true, false);
                    can't refer to a function to return boolean result */
                    maxLength="1000"
                    disabled={!this.props.buttonClicked ? this.state.disabledTextFlag : this.props.buttonClicked !== "text"}
                    placeholder="Text"
                    onChange={this.onTextChange}
                    value={this.state.text} 
                    className="textarea"
                    >
                    </textarea>
                    <input 
                    maxLength="70"
                    type="text"
                    placeholder="Author (Optional)"
                    onChange={this.onAuthorChange}
                    value={this.state.author}
                    className="text-input"
                    />
                    <input
                    disabled={!this.props.buttonClicked ? this.state.disabledVideoFlag : this.props.buttonClicked !== "video"}
                    type="text"
                    placeholder="Youtube Video URL"
                    onChange={this.onVideoURLChange}
                    value={this.state.video}
                    className="text-input"
                    />
                    <input
                    disabled={!this.props.buttonClicked ? this.state.disabledImageFlag : this.props.buttonClicked !== "image"}
                    type="text"
                    placeholder="Image URL"
                    onChange={this.onImageURLChange}
                    value={this.state.image}
                    className="text-input"
                    />
                    <textarea
                    placeholder={`Why is this ${!this.state.disabledTextFlag || this.props.buttonClicked === 'text' ? 'text' : 
                    !this.state.disabledImageFlag || this.props.buttonClicked === 'image' ? 'image' :
                    !this.state.disabledVideoFlag || this.props.buttonClicked === 'video' ? 'video' :
                    ''} important to you?`}
                    onChange={this.onPurposeChange}
                    value={this.state.purpose}
                    className="textarea"
                    >
                    </textarea>
                    <div>
                        <button className="button button--save">Save Entry</button>
                    </div>
                </form>
            </div>
        );
    }
}