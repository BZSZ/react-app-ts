import React from 'react';
import './style.scss';

interface Props {
  dataSource: Array<{
    id: number,
    img: string,
    name: string,
    price: number,
  }>,
}

const GoodList = ({ dataSource } : Props) => {
  return (
    <div className="good-list-container">
      {
        dataSource.map((itm, index) => (
          <div className="item" key={`${itm.name}-${itm.id}-${index}`}>
            <img src={itm.img} alt="" />
            <div className="good-info">
              <div className="name">{itm.name}</div>
              <div className="price">{itm.price}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default GoodList;
