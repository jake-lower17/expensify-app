import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>HOme</NavLink>
        <NavLink activeClassName="is-active" to="/create" exact={true}>create</NavLink>
        <NavLink activeClassName="is-active" to="/help" exact={true}>help</NavLink>
    </header>
);

export default Header;