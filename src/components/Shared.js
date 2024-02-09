import React from 'react';
import '../style/Shard.css';
import avatar from '../assets/share/avatar.svg';
import search from '../assets/share/search.svg';
import close from '../assets/share/close.svg';
import iamge1 from '../assets/image1.svg';

const Shared = () => {
  return (
    <div className='SharedContainer'>
      <div className='SharedTitle'>
        <div className='SharedProfile'>
          <img src={avatar} alt='avatar img' />
          <span>@코드잇</span>
        </div>
        <h1>⭐️ 즐겨찾기</h1>
      </div>
      <div className='SharedMain'>
        <div className='SharedSeachBarContent'>
          <div className='SeachContent'>
            <img src={search} alt='search img' />
            <input placeholder='링크를 검색해 보세요.' />
          </div>
          <img src={close} alt='close img' />
        </div>

        <div className='SharedCardContent'>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
          <div className='CardContent'>
            <img src={iamge1} alt='iamge1 img' />
            <div className='CardInfo'>
              <div className='CardInfoHeader'>
                <span>10 minutes ago</span>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
                Metus amet habitant nunc consequat....
              </p>
              <span>2023. 3. 15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shared;
