import React, { Component } from 'react';
import PropTypes from 'prop-types';
import modalWrapper from '../../ModalWrapper';
import closeIcon from '../img/closeIcon.png';
import './style.scss';

class Tip extends Component {
  static propTypes = {
    dataSource: PropTypes.shape(),
  };

  render() {
    const { header = '', content = [], buttons = [], isShowClose = false } = this.props.dataSource;

    return (
      <div className="modal-tip-wrapper">
        {
          isShowClose && <div className="tip-close-wrapper">
            <img
              tabIndex="0"
              role="button"
              className="tip-close"
              onClick={e => this.handleImgClose(e)}
              src={closeIcon}
              alt="" />
          </div>
        }
        <div className="tip-main">
          <div className="tip-header">{header}</div>
          <div className="tip-content">
            {
              content.map((item, key) => <div key={key.toString()} dangerouslySetInnerHTML={{ __html: item }} />)
            }
          </div>
          <div className="tip-buttons">
            {
              buttons.map(item => (
                <div
                  className={`tip-button ${item.type === 'primary' ? 'primary-button' : 'default-button'}`}
                  style={item.style || {}}
                  key={item.name}
                  onClick={item.onButtonClick}
                >
                  {item.name}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default modalWrapper(Tip);
