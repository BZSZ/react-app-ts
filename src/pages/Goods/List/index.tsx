import React, { useState, useEffect } from 'react';
import GoodList from '../../../components/GoodList';
import './style.scss';

const List: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    let datas: any[] = [{
      id: 1,
      name: 'diro999 催炭系列口红 吃土色 吃土香',
      img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
      price: 999,
    }, {
      id: 2,
      name: 'diro999 催炭系列口红 吃土色 吃土香',
      img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
      price: 99,
    }, {
      id: 3,
      name: 'diro999 催炭系列口红 吃土色 吃土香',
      img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
      price: 999,
    }, {
      id: 4,
      name: 'diro999 催炭系列口红 吃土色 吃土香',
      img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
      price: 999,
    }, {
      id: 5,
      name: 'diro999 催炭系列口红 吃土色 吃土香',
      img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
      price: 999,
    }];
    setDataSource(datas);
  }, []);

  return (
    <div className="goods-list-container">
      <div className="bar">
        good bar
      </div>
      <div className="list">
        <GoodList dataSource={dataSource} />
      </div>
    </div>
  );
}

export default List;
