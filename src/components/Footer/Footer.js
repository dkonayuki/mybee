import React from 'react';
import {
  Glyphicon,
  Dropdown,
  MenuItem
} from 'react-bootstrap';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="navbar-text pull-left hidden-xs">Copyright © Mybee</p>
        <a
          className="navbar-btn btn-default btn pull-right btn-sm"
          href="http://help.mybee.com"
        >
          <Glyphicon glyph="question-sign" />
          <span className="hidden-xs">Help</span>
        </a>

        <Dropdown
          dropup
          pullRight
          className="i18n-select"
          id="drop-down-i18n"
        >
          <Dropdown.Toggle>
            <Glyphicon glyph="globe" />
            <span className="hidden-xs">English</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1" active>English</MenuItem>
            <MenuItem eventKey="2">日本語</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Footer;
