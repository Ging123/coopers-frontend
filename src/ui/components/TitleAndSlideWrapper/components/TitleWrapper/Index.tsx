import makeContainerAppear from '../../../../utils/makeContainerAppear';
import DefaultButton from '../../../DefaultButton/Index';
import scrollToToDo from './scrollToToDo';
import color from '../../../../colors';
import { useEffect } from 'react';
import './styles.scss';

const TitleWrapper = () => {
  useEffect(() => {
    makeContainerAppear(".title-and-slide-wrapper > .title-wrapper");
  }, []);

  return (
    <div className='title-wrapper'>
      <h1 className='title'>Organize</h1>
      <div className='sub-title'>your daily jobs</div>
      <div className='description'>The only way to get things done</div>
      <DefaultButton 
        background={ color.main.green }
        className='go-to-to-do-list-button'
        content='Go to to-do list'
        onClick={() => scrollToToDo() }
      />
    </div>
  )
}

export default TitleWrapper