import {connect} from 'react-redux';
import CommentsList from '../components/CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);