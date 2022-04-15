import getAndAddTaskFromApi from '../../components/LoginContainer/getAndAddTaskFromApi';
import ToDoListTitleWrapper from '../../components/ToDoListTitleWrapper/Index';
import TitleAndSlideWrapper from '../../components/TitleAndSlideWrapper/Index';
import GoodThingsContainer from '../../components/GoodThingsContainer/Index';
import BigCooperIcone from '../../components/BigCooperIcone/Index';
import ToDoList from '../../components/ToDoListWrapper/Index';
import GetInTouch from '../../components/GetInTouch/Index';
import NeedHelp from '../../components/NeedHelp/Index';
import Localstorage from '../../utils/localstorage';
import Header from '../../components/Header/Index';
import React, { useEffect, useState } from 'react';

export const LoggedContext = React.createContext<any>([]);

const Home = () => {
  document.title = 'Organize your daily jobs';
  const localstorage = new Localstorage();
  const isLogged = localstorage.get('token') ? true : false;
  const [ logged, setLogged ] = useState(isLogged);

  useEffect(() => {
    if(logged) getAndAddTaskFromApi(setLogged);
  }, [ logged ]);

  return (
    <LoggedContext.Provider value={{ value:logged, set:setLogged }}>
     <Header/> 
     <BigCooperIcone/>
     <TitleAndSlideWrapper/>
     <ToDoListTitleWrapper/>
     <ToDoList/>
     <GoodThingsContainer/>
     <GetInTouch/>
     <NeedHelp/>
    </LoggedContext.Provider>
  );
}

export default Home;