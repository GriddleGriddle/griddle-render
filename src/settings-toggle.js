import React from 'react';
import { getStyleProperties } from './utils/styleHelper';
import classnames from 'classnames';

class SettingsToggle extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.toggled = false;

    this._handleButton = this._handleButton.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { style, className } = getStyleProperties(this.props, 'settingsToggle');
    const toggleClass = classnames(this.state.toggled ? 'toggled' : 'not-toggled', className);

    return <button className={toggleClass} style={style} onClick={this._handleButton}>Settings</button>;
  }

  //this should keep track locally if it's toggled
  //and just send whether or not settings should be shown
  _handleButton() {
    const toggled = !this.state.toggled;
    this.props.showSettings(toggled);
    this.setState({toggled: toggled});
  }
}

export default SettingsToggle;
