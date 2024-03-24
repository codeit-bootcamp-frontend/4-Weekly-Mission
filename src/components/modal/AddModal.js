import '../css/Reset.css';
import '../css/Global.css';
import '../../css/Modal.css'
import { useState } from 'react';

const AddModal = ({ isOpen, closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checktoggle = () => {
    setIsChecked(!isChecked);
  };
  return (
  <>
    <div
      id='background'
      style={{
        display: isOpen ? 'flex' : 'none',
      }}>
      <div id='whiteBox'>
      <img id='closeBtn' src='/img/_close.png' alt='닫기 버튼' onClick={closeModal}/>
        <div id='title'>
          <div>
            <p
              style={{
                color: '#373740',
                fontSize: '2rem',
                fontWeight: '700',
              }}>
              폴더 삭제
            </p>
          </div>
          <div>
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
        </div>
        </div>
        <div
          style={{
            width: '100%',
          }}
          id='코딩팁 ~ 나만의 장소'>
          <div
            style={{
              width: '100%',
            }}>
            <button
              onClick={checktoggle}
              style={{
                width: '100%',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
              }}>
              <p
                style={{
                  //Linkbrary/body1-regular
                  display: 'inline-block',
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  lineHeight: '2.4rem',
                }}>
                코딩팁
              </p>
              <p
                style={{
                  display: 'inline-block',
                  color: 'var(--gray60)',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  marginLeft: '0.8rem',
                }}>
                7개 링크
              </p>
            </button>
          </div>
          <div
            style={{
              width: '100%',
            }}>
            <button
              onClick={checktoggle}
              style={{
                width: '100%',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
              }}>
              <p
                style={{
                  //Linkbrary/body1-regular
                  display: 'inline-block',
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  lineHeight: '2.4rem',
                }}>
                채용 사이트
              </p>
              <p
                style={{
                  display: 'inline-block',
                  color: 'var(--gray60)',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  marginLeft: '0.8rem',
                }}>
                12개 링크
              </p>
            </button>
          </div>
          <div
            style={{
              width: '100%',
            }}>
            <button
              onClick={checktoggle}
              style={{
                width: '100%',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
              }}>
              <p
                style={{
                  //Linkbrary/body1-regular
                  display: 'inline-block',
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  lineHeight: '2.4rem',
                }}>
                유용한 글
              </p>
              <p
                style={{
                  display: 'inline-block',
                  color: 'var(--gray60)',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  marginLeft: '0.8rem',
                }}>
                30개 링크
              </p>
            </button>
          </div>
          <div
            style={{
              width: '100%',
            }}>
            <button
              onClick={checktoggle}
              style={{
                width: '100%',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--Linkbrary-bg, #F0F6FF)',
                borderRadius: '8px',
                position: 'relative',
              }}>
              <p
                style={{
                  //Linkbrary/body1-regular
                  display: 'inline-block',
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  lineHeight: '2.4rem',
                  color: '#6D6AFE',
                }}>
                나만의 장소
              </p>
              <p
                style={{
                  display: 'inline-block',
                  color: 'var(--gray60)',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  marginLeft: '0.8rem',
                }}>
                3개 링크
              </p>
              <img
                style={{
                  width: '1.4rem',
                  height: '1.4rem',
                  position: 'absolute',
                  right: '0.8rem',
                }}
                src='/img/check.svg'
                alt='체크입니다!'
              />
            </button>
          </div>
        </div>
        <div>
          <button
            style={{
              width: '28rem',
              background: 'var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))',
              padding: '1.6rem 2rem',
              borderRadius: '8px',
            }}>
            <p
              style={{
                color: '#F5F5F5',
                fontSize: '1.6rem',
                fontWeight: '600',
              }}>
              추가하기
            </p>
          </button>
        </div>
      </div>
    </>
)};

export default AddModal;