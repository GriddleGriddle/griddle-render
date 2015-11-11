'use strict';

import React from 'react';

class SettingsToggle extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.toggled = false;

    this._handleButton = this._handleButton.bind(this);
  }

  render() {
    const style = this.props.styles.getStyle({
      useStyles: this.props.settings.useGriddleStyles,
      styles: this.props.styles.inlineStyles,
      styleName: 'settingsToggle'
    });

    //TODO: these class names are awful -- use the global style object instead
    return <button className={this.state.toggled ? 'toggled' : 'not-toggled'} style={style} onClick={this._handleButton}>Settings</button>;
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
