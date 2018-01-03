import {connect} from 'react-redux';
import Comment from '../components/Comment.js';
import {addComment, thumbUpComment} from '../actions/actions.js'

const mapDispatchToProps = dispatch => ({
    addComment: (id) => dispatch(addComment(id)),
    thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

    
export default connect(null, mapDispatchToProps)(Comment);  