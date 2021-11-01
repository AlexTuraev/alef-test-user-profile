import React, { useState } from "react";
import {ServiceProvider} from '../service-context/service-context';
import Header from '../header'
import UserForm from '../user-form';
import Preview from '../preview';
import Footer from '../footer';

import './app.scss';

const App = () =>{
    const [currentPage, setCurrentPage] = useState(0);

    const [childKey, setChildKey] = useState(0);
    const [userData, setUserData] = useState({
        userName: '',
        userAge: '',
        children: []
    });

    const [savedUser, setSavedUser] = useState({
        userName: '',
        userAge: '',
        children: []
    });

    const handlerAddChild = () =>{
        if(userData.children.length <5 ){
            setChildKey(key => key+1);
            setUserData( (user) =>{
                return({
                    ...user,
                    children: [...user.children, {id: childKey, childName: '', childAge: ''}]
                });
            });
        } else{
            //console.log('Больше нельзя добавлять');
        }
    }

    const onChangeUserData = (nameField, value) =>{
        setUserData(user =>{
            const newUserData = {...user};
            switch(nameField.category){
                case 'user':
                    newUserData[nameField.field] = value;
                    break;
                case 'children':
                    const index = newUserData.children.findIndex(item => item.id === nameField.id);
                    if (index >-1) newUserData.children[index][nameField.field] = value;
                    break;
            }
            return(newUserData);
        });
    }

    const onDeleteChild = (id) =>{
        setUserData(user => {
            const newUserData = {...user};
            const index = newUserData.children.findIndex(item => item.id === id);
            if(index > -1){
                newUserData.children = [
                    ...newUserData.children.slice(0, index),
                    ...newUserData.children.slice(index+1)
                ];
            }
            return (newUserData);
        });
    }

    const onSave = () =>{
        setSavedUser({...userData});
    }

    const onChangeCurrentPage = (count) =>{
        setCurrentPage(count);
    }

    return(
        <section className='app'>
            <Header onChangeCurrentPage={onChangeCurrentPage} />
            <ServiceProvider value={onChangeUserData} >
                {
                    currentPage === 0 ?
                        <UserForm handlerAddChild={handlerAddChild} userData={{...userData}} onDeleteChild={onDeleteChild} onSave={onSave} /> :
                        <Preview {...savedUser} />
                }
            </ServiceProvider>
            <Footer />
        </section>
    );
}

export default App;