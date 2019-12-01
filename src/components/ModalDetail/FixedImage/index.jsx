import React from 'react';
import PropTypes from 'prop-types';
import modalWrapper from '../../ModalWrapper';
import cancelIcon from './img/cancel_icon@3x.png';
import './style.scss';

class FixedImage extends React.Component {
  static defaultProps = {
    imageData: {},
    isShowClose: true,
    onImageClick: () => {},
    onClose: () => {},
  }

  static propTypes = {
    imageData: PropTypes.shape(),
    isShowClose: PropTypes.bool,
    onClose: PropTypes.func,
    onImageClick: PropTypes.func,
  };

  render() {
    const { imageData: { imageUrl = '', imageStyle = {} }, isShowClose, onImageClick, onClose } = this.props;

    return (
      <div className="fixed-image-wrapper" onClick={() => onClose()}>
        <div className="closed-wrapper" style={{ display: `${isShowClose}` ? 'flex' : 'none' }}>
          <img
            tabIndex="0"
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            src={cancelIcon}
            alt="" />
        </div>
        <div
          className="content"
          onClick={(e) => {
            e.stopPropagation();
            onImageClick();
          }}
        >
          <img style={imageStyle} className="image" src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default modalWrapper(FixedImage);
