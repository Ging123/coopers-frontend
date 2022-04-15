import Arrow from './components/Arrow/Index';
import SlideWrapper from './components/SlideWrapper/Index';
import TitleWrapper from './components/TitleWrapper/Index';
import './styles.scss';

const TitleAndSlideWrapper = () => {
  return (
    <div className='title-and-slide-wrapper'>
      <TitleWrapper/>
      <SlideWrapper/> 
      <Arrow/>
    </div>
  );
}

export default TitleAndSlideWrapper;