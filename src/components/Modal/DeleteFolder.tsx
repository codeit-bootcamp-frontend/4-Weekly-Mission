import '../../styles/css/global.css';
import React from 'react';

import closeButton from '../assets/logo/modalClose.jpg';

interface Props {
  isOpen: Boolean;
  closeModal: () => void;
}

const DeleteLink: React.FC<Props> = ({ isOpen, closeModal }: Props) => {
  return (
    <>
      <div
        id='first_div'
        style={{
          background: 'rgba( 0, 0, 0, 0.4 )',
          display: isOpen ? 'flex' : 'none',
          width: '100wh',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          id='second_div'
          style={{
            display: 'flex',
            padding: '3.2rem 4rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            width: '36rem',
            height: '19.3rem',
            background: '#FFFFFF',
            borderRadius: '1.5rem',
            gap: '2.4rem',
            zIndex: '1',
          }}>
          <button
            style={{
              position: 'absolute',
              top: '1.6rem',
              right: '1.6rem',
              width: '2.4rem',
              height: '2.4rem',
              backgroundImage: 'url("./assets/close.png")',
            }}
            onClick={closeModal}>
            <img src={closeButton} alt='닫기 버튼' />
          </button>
          <div
            id='title'
            style={{
              width: '28rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '0.8rem',
            }}>
            <p
              style={{
                color: '#373740',
                fontSize: '2rem',
                fontWeight: '700',
              }}>
              폴더 삭제
            </p>
            <p
              style={{
                color: '#9FA6B2',
                fontSize: '1.4rem',
                fontWeight: '400',
                lineHeight: '2.2rem',
              }}>
              폴더명
            </p>
          </div>
          <div>
            <button
              style={{
                width: '28rem',
                background: '#FF5B56',
                padding: '1.6rem 2rem',
                borderRadius: '8px',
              }}>
              <p
                style={{
                  color: '#F5F5F5',
                  fontSize: '1.6rem',
                  fontWeight: '600',
                }}>
                삭제하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteLink;
