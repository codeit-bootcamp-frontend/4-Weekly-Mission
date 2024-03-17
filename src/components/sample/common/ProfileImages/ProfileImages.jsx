import React from 'react';
import styles from './profileImages.module.scss';
import ProfileImage from '../ProfileImage';

function ProfileImages({ recipientResult }) {
  return (
    <div className={styles.profileImages}>
      {recipientResult.recentMessages &&
        recipientResult.recentMessages.reverse().map((message, i) => {
          recipientResult.recentMessages.reverse();
          const length = recipientResult.messageCount;
          // eslint에서 중첩삼항 연산자를 피하라고 해서 if문으로 코드 변경
          let distance = 0;
          if (length >= 3) {
            distance = 3 - i;
          } else if (length === 3) {
            distance = 2 - i;
          } else if (length === 2) {
            distance = 1 - i;
          }
          return (
            <div
              key={message.id}
              style={{
                zIndex: i,
                position: 'absolute',
                right: `${distance}rem`,
              }}
            >
              <ProfileImage
                url={message.profileImageURL}
                // rem단위 인식 X
                width={28}
                height={28}
              />
            </div>
          );
        })}
      {recipientResult.messageCount >= 4 && (
        <div className={styles.messageCount}>
          +{recipientResult.messageCount - 3}
        </div>
      )}
    </div>
  );
}

export default ProfileImages;
