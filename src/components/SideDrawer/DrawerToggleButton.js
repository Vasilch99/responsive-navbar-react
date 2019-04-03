import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
  <div className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </div>
);

export default drawerToggleButton;