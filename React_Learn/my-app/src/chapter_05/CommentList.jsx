import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <Comment name={'배동우'} comment={'안녕하세요, 우리 소통해요.'} />
      <Comment name={'안세훈'} comment={'저는 삼성입니다.'} />
      <Comment name={'한경빈'} comment={'저는 까까온데용.'} />
    </div>
  );
}

export default CommentList;
