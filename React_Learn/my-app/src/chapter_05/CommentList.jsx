import React from 'react';
import Comment from './Comment';
const comments = [
  {
    name: '배동우',
    comment: '안녕하세요, 우리 소통해요.',
  },
  {
    name: '안세훈',
    comment: '저는 상섬입니다.',
  },
  {
    name: '한경빈',
    comment: '저는 까까오입니다.',
  },
];
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
