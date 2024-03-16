import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoShareButton from './KakaoShareButton';
import ProfileImages from '../ProfileImages/ProfileImages';
import EmojiBadge from '../Badge/EmojiBadge';
import Toast from '../../../pages/PostPage/components/Toast';
import styles from './headerService.module.scss';
import {
  addEmojiBtn,
  arrowDownBtn,
  shareBtn,
  verticalLine,
} from '../../../utils/imageImport';

function HeaderService({
  recipientResult,
  reactionsResult,
  reactionsURL,
  emojiClicked,
  setEmojiClicked,
}) {
  const [emojiPickerOn, setEmojiPickerOn] = useState(false);
  const [shareOn, setShareOn] = useState(false);
  const [moreEmojiOn, setMoreEmojiOn] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

  const emojiPickerRef = useRef(null);
  const shareRef = useRef(null);
  const emojiRef = useRef(null);

  const shareLink = window.location.href; // 공유할 링크

  // 이모지를 선택했을 때 실행할 함수
  const handleEmojiClick = async e => {
    const newEmoji = {
      emoji: `${e.emoji}`,
      type: 'increase',
    };
    await fetch(`${reactionsURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmoji),
    });
    // 테스트용 코드
    // const result = await response.text();
    // console.log(result);

    // emojiClicked 상태가 바뀌면 headerService 함수 외부에서 리액션 리스트를 업데이트 해준다.
    setEmojiClicked(!emojiClicked);
    setEmojiPickerOn(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!emojiPickerRef.current.contains(event.target)) {
        setEmojiPickerOn(false);
      }
      if (!shareRef.current.contains(event.target)) {
        setShareOn(false);
      }
      if (!emojiRef.current.contains(event.target)) {
        setMoreEmojiOn(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleEmojiPicker = () => {
    setEmojiPickerOn(!emojiPickerOn);
  };
  const toggleShare = () => {
    setShareOn(!shareOn);
  };
  const toggleMoreEmoji = () => {
    setMoreEmojiOn(!moreEmojiOn);
  };

  const handleCopyLink = () => {
    setUrlCopied(true); // 복사되었습니다 메시지 표시
    // 5초 후에 복사되었습니다 메시지 숨기기
    setTimeout(() => {
      setUrlCopied(false);
    }, 5000);
  };

  return (
    <>
      <div className={styles.headerService}>
        <div className={styles.headerServiceInner}>
          <div className={styles.recipient}>To.{recipientResult.name}</div>

          <div className={styles.senderCount}>
            <ProfileImages recipientResult={recipientResult} />
            <div>
              <span className={styles.number}>
                {recipientResult.messageCount}
              </span>
              명이 작성했어요!
            </div>
          </div>
          <img
            className={styles.verticalLinePC}
            src={verticalLine}
            alt="구분선"
          />
          <div className={styles.emojiShare}>
            <div className={styles.emoji}>
              {recipientResult.topReactions &&
                recipientResult.topReactions.map(reaction => (
                  <EmojiBadge
                    key={reaction.id} // 반복되는 컴포넌트의 key 값 설정
                    emoji={reaction.emoji}
                    count={reaction.count}
                  />
                ))}

              <div className={styles.emojiContainer} ref={emojiRef}>
                <button
                  type="button"
                  className={styles.arrowDown}
                  onClick={toggleMoreEmoji}
                >
                  <img src={arrowDownBtn} alt="이모지 더보기" />
                </button>
                {moreEmojiOn && (
                  <div className={styles.emojiList}>
                    {reactionsResult.results &&
                      reactionsResult.results.map(reaction => (
                        <EmojiBadge
                          key={reaction.id}
                          count={reaction.count}
                          emoji={reaction.emoji}
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.emojiPicker} ref={emojiPickerRef}>
              <button
                type="button"
                className={styles.addEmojiMobile}
                onClick={toggleEmojiPicker}
              >
                <img src={addEmojiBtn} alt="이모지 추가" />
              </button>
              <button
                type="button"
                className={styles.addEmojiTablet}
                onClick={toggleEmojiPicker}
              >
                <img src={addEmojiBtn} alt="이모지 추가" />
                추가
              </button>
              {emojiPickerOn && (
                <EmojiPicker
                  className={styles.emojiPickerChild}
                  onEmojiClick={handleEmojiClick}
                />
              )}
            </div>
            <img
              className={styles.verticalLine}
              src={verticalLine}
              alt="구분선"
            />
            <div className={styles.shareContainer} ref={shareRef}>
              <button
                type="button"
                className={styles.share}
                onClick={toggleShare}
              >
                <img src={shareBtn} alt="공유하기" />
              </button>

              {shareOn && (
                <div className={styles.shareOptions}>
                  <KakaoShareButton />
                  <CopyToClipboard text={shareLink} onCopy={handleCopyLink}>
                    <button type="button" className={styles.shareOption}>
                      URL 공유
                    </button>
                  </CopyToClipboard>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {urlCopied ? (
        <Toast urlCopied={urlCopied} setUrlCopied={setUrlCopied} />
      ) : null}
    </>
  );
}

export default HeaderService;
