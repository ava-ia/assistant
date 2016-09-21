import React from 'react';
import { Link } from 'react-router';
import style from './AppBar.css';
import Button from './Button'

export default (props) => {
  return (
    <header className={style.root}>
      <Link to='/' className={style.brand} />

      <nav className={style.navigation}>
        <Link to='/tasks' activeClassName={style.active}>tasks</Link>
        <Link to='/plans' className={style.button}>
          <Button caption='Upgrade' />
        </Link>
        <Link to='/tasks' activeClassName={style.active}>tasks</Link>
      </nav>

      <nav className={style.navigation}>
        { !props.session ? <Link to='/signin' activeClassName={style.active}>Sign In</Link> : null }
        { props.session ? <Link to='/tasks' activeClassName={style.active}>tasks</Link> : null }
        { props.session ? <Link to='/profile' className={style.profile} /> : null }
      </nav>
    </header>
  );
};
