import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setStyle } from '../../utils/common';
import './style.scss';

const modalWrapper = (WrappedComponent) => {
  class Hoc extends Component {
    static propTypes = {
      bgOpacity: PropTypes.number,
    };

    scrollTop = 0;

    allowBodyScrolling = () => {
      setStyle(document.body, { top: '0px' });
      document.body.classList.remove('page-hidden');
      // 在给页面设置了doctype的时候，documentElement.scrollTop(1)/body.scrollTop(2), safari不支持(1), chrome不支持(2)
      if (this.scrollTop > 0) {
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = this.scrollTop;
        } else {
          document.body.scrollTop = this.scrollTop;
          document.documentElement.scrollTop = this.scrollTop;
        }
      }
    };

    forbidBodyScrolling = () => {
      if (document.scrollingElement) {
        this.scrollTop = document.scrollingElement.scrollTop;
      } else {
        this.scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
      }
      setStyle(document.body, { top: `${-this.scrollTop}px` });
      document.body.classList.add('page-hidden');
    };

    componentWillMount() {
      this.forbidBodyScrolling();
    }

    componentWillUnmount() {
      this.allowBodyScrolling();
    }

    render() {
      const { bgOpacity = 0.6 } = this.props;

      return (
        <div className="modal-wrapper-container" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return Hoc;
};

export default modalWrapper;
