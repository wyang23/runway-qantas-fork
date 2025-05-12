import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colours, layout, fontFamily, fontSize } from '../../theme/airways';
import Card from '../Card';
import ChevronDown from '../../icons/ChevronDown';

const cardStyles = css({
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  marginBottom: '20px'
});

const headerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  cursor: 'pointer',
  backgroundColor: colours.white,
  borderBottom: `1px solid ${colours.lightGrey}`,
  '&:hover': {
    backgroundColor: colours.lightGrey
  }
});

const titleStyles = css({
  fontFamily: fontFamily.main,
  fontSize: fontSize.medium,
  margin: 0,
  color: colours.darkerGrey
});

const imageStyles = css({
  width: '100%',
  height: 'auto',
  display: 'block'
});

const contentStyles = css({
  padding: '20px',
  backgroundColor: colours.white
});

const iconStyles = isExpanded => css({
  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
  transition: 'transform 0.3s ease-in-out'
});

const ExpandableCard = ({ title, children, imageUrl, imageAlt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card css={cardStyles}>
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt} css={imageStyles} />
      )}
      <div 
        css={headerStyles}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <h3 css={titleStyles}>{title}</h3>
        <ChevronDown css={iconStyles(isExpanded)} />
      </div>
      {isExpanded && (
        <div css={contentStyles}>
          {children}
        </div>
      )}
    </Card>
  );
};

ExpandableCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
};

ExpandableCard.defaultProps = {
  imageUrl: '',
  imageAlt: ''
};

export default ExpandableCard;