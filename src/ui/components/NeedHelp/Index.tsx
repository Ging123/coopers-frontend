import GreenRectangle from './components/GreenRectangle/Index'
import BlackBar from './components/BlackBar/Index';
import './styles.scss';

const NeedHelp = () => {
  return (
    <footer className='need-help'> 
      <div className='text'>
        <h1>Need help?</h1>
        <h1>coopers@coopers.pro</h1>
        <div className='rights'>© 2021 Coopers. All rights reserved.</div>
      </div>
      <GreenRectangle/>
      <BlackBar/>
    </footer>
  )
}

export default NeedHelp