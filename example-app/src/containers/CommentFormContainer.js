import {connect} from 'react-redux';
import CommentForm from '../components/CommentForm';
import {addComment} from '../actions/actions';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(CommentForm);