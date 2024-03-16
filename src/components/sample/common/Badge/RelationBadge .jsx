import React from 'react';
import PropTypes from 'prop-types';
import styles from './BadgeDesign.module.scss';

function RelationBadge({ relationship }) {
  const getBadgeDetails = () => {
    switch (relationship) {
      case '가족':
        return {
          containerClass: styles.familyContainer,
          text: '가족',
          textClass: styles.familyText,
        };
      case '동료':
        return {
          containerClass: styles.badgeCollegeContainer,
          text: '동료',
          textClass: styles.badgeCollegeText,
        };
      case '친구':
        return {
          containerClass: styles.friendsContainer,
          text: '친구',
          textClass: styles.friendsText,
        };
      case '지인':
        return {
          containerClass: styles.container,
          text: '지인',
          textClass: styles.text,
        };
      default:
        return {
          containerClass: styles.defaultContainer,
          text: '알 수 없음',
          textClass: styles.defaultText,
        };
    }
  };

  const { containerClass, text, textClass } = getBadgeDetails();

  return (
    <div className={containerClass}>
      <div className={textClass}>{text}</div>
    </div>
  );
}

RelationBadge.propTypes = {
  relationship: PropTypes.string.isRequired,
};

export default RelationBadge;
