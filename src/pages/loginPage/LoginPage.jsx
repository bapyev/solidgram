import React from 'react';
import Input from "../../components/input/Input";
import classes from "./LoginPage.module.css";

function LoginPage(){
    return (
        <div>
            <form className={classes.form}> 
            <img className='Nad' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt=""/>
            <Input type="text" placeholder="Телефон, имя пользователя или эл. адрес" />
            <Input type="password" placeholder="Пароль" />
            <button className="btn">Войти</button>
            <div className='Blo'>
                <span>ИЛИ</span>
            </div>
            <span className='Fol'>Войти через Facebook</span>
            <span className='Dol'>Забыли пароль?</span>
            </form>
        </div>
    )
}

export default LoginPage;
