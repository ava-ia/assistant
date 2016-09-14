import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';
import style from './footer.css';

export default (props) => {
  return (
    <footer className={style.root}>
      <nav className={style.navigation}>
        <h5>Areas</h5>
        <Link to='/'>Home</Link>
        <Link to='orders'>Orders</Link>
        <Link to='profile'>Profile</Link>
      </nav>

      <nav className={style.navigation}>
        <h5>Technologies</h5>
        <Link to='/'>Technologies</Link>
        <Link to='orders'>React</Link>
        <Link to='profile'>Express</Link>
        <Link to='profile'>Falcor</Link>
      </nav>

      <Link to='https://github.com/zetapath/trckr.git'>
        <Button
          label='VIEW SOURCE'
          className={style.buttonGithub}
          accent
          raised
        />
      </Link>
    </footer>
  );
};
