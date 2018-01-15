import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           text: '',
           visible: false
        }
        this.toogleEdit = this.toogleEdit.bind(this);
    }

    toogleEdit() {
        this.setState({visible: !this.state.visible})
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editComment(this.props.id, this.state.text);
        this.setState({text: ''});
        this.toogleEdit();
    }


    render() {
    	const {text, votes, id, thumbUpComment, thumbDownComment, removeComment} = this.props;
        return (
        <li>
			<p>{text} <span>votes: {votes}</span></p>
			<button onClick={() => thumbUpComment(id)}>Thumb Up</button>
			<button onClick={() => thumbDownComment(id)}>Thumb Down</button>
			<button onClick={() => removeComment(id)}>Delete</button>
			<button onClick={this.toogleEdit}>Edit</button>
			{this.state.visible &&
				<div> 
					<button onClick={(e) => this.handleSubmit(e)}>Save</button>
					<input onChange={(e) => this.handleChange(e)} value={this.state.text} placeholder={text}/>
				</div>
			}
		</li>
        );
    }
}

export default Comment;