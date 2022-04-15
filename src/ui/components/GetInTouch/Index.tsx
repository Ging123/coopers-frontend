import CircleWithGirl from './components/CircleWithGirl/Index';
import Title from './components/Title/Index';
import Form from './components/Form/Index';
import './styles.scss';

const GetInTouch = () => {
  return (
    <div className='get-in-touch-wrapper'>
      <div className='get-in-touch'>
        <CircleWithGirl />
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default GetInTouch;