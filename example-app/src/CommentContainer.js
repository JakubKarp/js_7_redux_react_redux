import {connect} from 'react-redux';
import Comment from './Comment';
import {addComment, thumbUpComment} from './actions'

const mapDispatchToProps = dispatch => ({
    addComment: (id) => dispatch(addComment(id)),
    thumbUpComment: (id) => dispatch(thumbUpComment(id))
});


export default connect(null, mapDispatchToProps)(Comment);  