import React from 'react';
import style from './app.css';
import AppBar from '../components/AppBar';
import Footer from '../components/footer';
import session from '../modules/session';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { dialog: false };
  }

  handleToggle = () => {
    this.setState({ dialog: !this.state.dialog });
  }

  // -- Render
  renderButton = () => {
    return (
      <button onClick={this.handleToggle}>
        add
      </button>
    );
  }

  render() {
    return (
      <section className={style.root}>
        <AppBar session={session} />
        {this.props.children}

        <Footer />
      </section>
    );
  }
}
