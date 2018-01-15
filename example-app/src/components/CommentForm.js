import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           text: ''
        } 
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addComment(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Add comment</label>
                <input onChange={(e) => this.handleChange(e)} value={this.state.text}/>
            </form>
        )
    }
}

export default CommentForm;