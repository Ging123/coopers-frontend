import DefaultInput from '../../../DefaultInput/Index';
import { useState } from 'react';
import './styles.scss';
import DefaultTextArea from '../../../DefaultTextArea/Index';
import DefaultButton from '../../../DefaultButton/Index';
import colors from '../../../../colors';

const Form = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telephone, setTelephone ] = useState('');
  const [ message, setMessage ] = useState('');

  return (
    <form className='form'>
      <DefaultInput
        className='name'
        fieldName='Your name'
        maxLength={ 30 }
        onChange={ (e) => setName(e.target.value) }
        placeholder='Type your name here...'
        value={ name }
      />
      <div className='email-and-telephone-wrapper'>
        <DefaultInput
          className='email'
          fieldName='Email'
          maxLength={ 100 }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder='example@example.com'
          required={ true }
          type='email'
          value={ email }
        />
        <DefaultInput
          className='telephone'
          fieldName='Telephone'
          maxLength={ 16 }
          onChange={ (e) => setTelephone(e.target.value) }
          placeholder='(_) ____-____'
          required={ true }
          type='tel'
          value={ telephone }
        />
      </div>
      <DefaultTextArea
        className='message'
        fieldName='Message'
        onChange={(e) => setMessage(e.target.value)}
        maxLength={ 300 }
        placeholder='Type what you want to say to us'
        required={ true }
        value={ message }
      />
      <DefaultButton
        background={ colors.main.green }
        className='send-email-button'
        content='SEND NOW'
        type='submit'
      />
    </form>
  );
}

export default Form;