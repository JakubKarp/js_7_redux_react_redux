import React from 'react';
import Comment from '../containers/CommentContainer.js';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;