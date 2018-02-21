import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import './Box.css';

function Box(props) {
  let sizeClassName = '';
  switch (props.size) {
    case 'large':
      sizeClassName = 'box--large';
      break;
    case 'xlarge':
      sizeClassName = 'box--xlarge';
      break;
    case 'xxlarge':
      sizeClassName = 'box--xxlarge';
      break;
    default:
      sizeClassName = 'box--normal';
  }
  return (
    <div className={`box ${sizeClassName}`}>
      <Grid>
        { props.withTitle ?
          <Row>
            <Col xs={12} md={3} className="box__title">
              <Row className="box__title__header">
                {props.title}
              </Row>
              { props.subTitle &&
                <Row className="box__title__sub">{props.subTitle}</Row>
              }
            </Col>
            <Col xs={12} md={9} className="box__content--with-title">{props.children}</Col>
          </Row>
        :
          <Row>
            <Col xs={12} md={12} className="box__content">{props.children}</Col>
          </Row>
        }
      </Grid>
    </div>
  );
}

Box.propTypes = {
  size: PropTypes.string,
  withTitle: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node
};

Box.defaultProps = {
  size: 'normal',
  withTitle: false,
  title: '',
  subTitle: '',
  children: ''
};

export default Box;
