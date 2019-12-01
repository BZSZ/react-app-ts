import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modalWrapper from '../../ModalWrapper';
import closeIcon from '../img/close@3x.png';
import './style.scss';

class SlidingTemp extends Component {
  static propTypes = {
    slidingModalData: PropTypes.shape(),
    onCloseClick: PropTypes.func,
  };

  render() {
    const { calculatorBase = '', calculatorInfo = '' } = this.props.slidingModalData;
    const modelStyle = {
      backgroundImage: `url(${calculatorBase})`,
    };

    return (
      <div className="sliding-container">
        <div className="sliding-close">
          <img
            onClick={() => this.props.onCloseClick(false)}
            src={closeIcon}
            alt=""
            tabIndex="0"
            role="button" />
        </div>
        <div className="sliding-content" style={modelStyle}>
          <div className="sliding-content-wrapper">
            <div className="sliding-content-img">
              <img src={calculatorInfo} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default modalWrapper(SlidingTemp);
