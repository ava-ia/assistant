import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import AppBar from './components/AppBar';
import Footer from './components/footer';
import style from './app.css';
import session from '../../modules/session';

const TooltipButton = Tooltip(Button);

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
      <TooltipButton
        icon='add'
        tooltip='New package'
        className={style.newOrder}
        floating
        accent
        onClick={this.handleToggle}
      />
    );
  }

  render() {
    return (
      <section className={style.root}>
        <AppBar session={session} />
        { session ? this.renderButton() : null }
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
