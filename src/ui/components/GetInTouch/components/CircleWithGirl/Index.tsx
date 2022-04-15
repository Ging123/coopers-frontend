import girl from './images/girl.jpg';
import './styles.scss';

const CircleWithGirl = () => {
  return (
    <div className='circle-with-girl-wrapper'>
      <div className='green-rectangle'/>
      <img 
        alt="it wasn't possible to load" 
        className='girl'
        src={ girl }
      />
    </div>
  )
}

export default CircleWithGirl