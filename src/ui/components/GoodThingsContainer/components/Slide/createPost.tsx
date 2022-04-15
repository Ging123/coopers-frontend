import CooperIcone from "./components/CooperIcone/Index";
import { post } from "./postData";

function createPost(postData:post, index:number) {
  return (
    <div className='post' key={ index }>
      <img 
        alt='It was`t possible to load'
        src={ postData.src }
      />
      <div className='description-container'>
        <div className='function'>function</div>
        <div className='description'>{ postData.description }</div>
      </div>
      <div className='read-more'>read more</div>
      <CooperIcone/>
    </div>
  );
}

export default createPost;