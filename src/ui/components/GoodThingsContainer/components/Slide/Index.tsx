import calculateHowMuchShouldMoveImages, { getWidthBase } from './calculateHowMuchShouldMoveImages';
import { postData1, postData2, postData3 } from './postData';
import createPost from './createPost';
import { useState } from 'react';
import './styles.scss';

interface props {
  selectedCircle:number;
}

const Post = (props:props) => {
  const [oldPosition, setOldPosition] = useState(0);
  const posts = [ postData1, postData2, postData3 ];
  const [postsPosition, setPostsPositions] = useState([
    0, 
    getWidthBase(), 
    getWidthBase() + getWidthBase()]);

  if(props.selectedCircle !== oldPosition) {
    const positions = calculateHowMuchShouldMoveImages(props.selectedCircle, oldPosition);
    setPostsPositions(positions);
    setOldPosition(props.selectedCircle);
  }

  return (
    <div className="post-wrapper">
      <div className='post-container' style={{ left:`${postsPosition[0]}px` }}>
        { posts[0].map(createPost) }
      </div>
      <div className='post-container' style={{ left:`${postsPosition[1]}px` }}>
        { posts[1].map(createPost) }
      </div>
      <div className='post-container' style={{ left:`${postsPosition[2]}px` }}>
        { posts[2].map(createPost) }
      </div>
    </div>
  );
}

export default Post;