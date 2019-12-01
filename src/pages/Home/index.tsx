import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Refresh from '../../components/SecondFloor/Refresh';
import GoodList from '../../components/GoodList';
import Tip from '../../components/ModalDetail/Tip';
import './style.scss';

const data1: any[] = [{
  id: 1,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 2,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 99,
}, {
  id: 3,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 4,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 5,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 6,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 7,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 8,
  name: '那女孩对我说，说我保护她的梦',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}];

const data2: any[] = [{
  id: 11,
  name: '丈夫当删诗书；制礼乐；何至因循寄人篱下？',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}, {
  id: 12,
  name: '丈夫当删诗书；制礼乐；何至因循寄人篱下？',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 99,
}, {
  id: 13,
  name: '丈夫当删诗书；制礼乐；何至因循寄人篱下？',
  img: 'https://b-ssl.duitang.com/uploads/blog/201512/01/20151201131252_XHtis.jpeg',
  price: 999,
}];

const Home: React.FC = () => {
  const history = useHistory();

  const [dataSource, setDataSource] = useState<any>([]);

  const bottomSelectOptions = [{
    key: 'home',
    value: '首页',
  }, {
    key: 'music',
    value: '听音乐',
  }, {
    key: 'order',
    value: '我的订单',
  }, {
    key: 'mine',
    value: '我的',
  }];
  const [activeKey, setActiveKey]=useState(bottomSelectOptions[0].key);
  const [tipOptions, setTipOptions]=useState({});

  useEffect(() => {
    setDataSource(data1);
  }, []);

  useEffect(() => {
    const requestDelayTime = 1000;

    const refresh = new Refresh({
      container: '.secondFloor',
      down: {
        callback: () => {
          setTimeout(() => {
            refresh.endDownLoading(true, '');
          }, requestDelayTime);
        },
        // 本主题独有的效果
        secretGarden: {
          // 是否开启二楼
          enable: true,
          // 下拉超过200后可以出现秘密花园效果，注意，必须大于down的offset
          offset: 1000,
          // 过度动画
          duration: 1000,
          // 提示文字
          tips: '欢迎光临秘密花园',
        }
      },
      up: {
        isAuto: false,
        callback: () => {
          setTimeout(() => {
            setDataSource(data1.concat(data2));
            refresh.endUpLoading(true);
          }, requestDelayTime);
        }
      }
    });
  }, []);

  function onOptionClick(itm: any) {
    const { key = '', url = '' } = itm;
    setActiveKey(key);
    if (!url) {
      setTipOptions({
        content: ['暂时未开放，请等待...'],
        buttons: [{
          name: '取消',
          type: 'default',
          style: { margin: '0 10px 0 40px' },
          onButtonClick: () => setTipOptions({}),
        }, {
          name: '确认',
          type: 'primary',
          style: { margin: '0 40px 0 10px' },
          onButtonClick: () => setTipOptions({}),
        }],
      });
    }
  }

  function getBottomSelect(itm: any) {
    const { key = '', value = '' } = itm;
    return (
      <div key={key} className={`select-wrapper ${activeKey === key ? 'active' : ''}`} onClick={() => onOptionClick(itm)}>
        {value}
      </div>
    );
  }

  return (
    <div className="home-container secondFloor">
      <div className="content-container">
        <div className="header flex-layout">那女孩对我说</div>
        <GoodList dataSource={dataSource} />
        <div className="bottom flex-layout">
          <button onClick={() => history.push('/goods/list')}>去购物</button>
        </div>
        {Object.keys(tipOptions).length ? <Tip dataSource={tipOptions} /> : null}
      </div>
      <div className="footer-container">
        {
          bottomSelectOptions.map(itm => getBottomSelect(itm))
        }
      </div>
    </div>
  );
}

export default Home;
