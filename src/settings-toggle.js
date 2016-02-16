import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { compose, shouldUpdate, getContext, mapProps, withState } from 'recompose';

const SettingsToggle = compose(
  getContext({ utils: PropTypes.object }),

  shouldUpdate(() => (false)),

  withState('toggled', 'setToggled', false),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'settingsToggle'),
    ...props
  })),

  mapProps(props => ({
    toggleSettings: () => {
      const showSettings = !props.toggled;
      props.setToggled(showSettings);
      props.showSettings(showSettings);
    },
    style: props.styleProperties.style,
    className: classnames(props.toggled ? 'toggled' : 'not-toggled', props.styleProperties.className),
    ...props
  }))
)(( { style, toggleSettings, className }) => (
  <button className={className} style={style} onClick={toggleSettings}>
    Settings
  </button>
))

export default SettingsToggle;
