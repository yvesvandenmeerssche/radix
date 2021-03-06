import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Color from './../utilities/Color';
import Margin from './../utilities/Margin';

const GhostButton = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_300};
  font-weight: 500;
  height: ${theme.SPACING_500};
  justify-content: center;
  line-height: 1;
  min-width: ${theme.SPACING_500};
  outline: none;
  padding: 0;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.GRAY_200};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
  }

  &:active {
    background-color: ${theme.GRAY_300};
    box-shadow: none;
  }

  &:disabled {
    color: ${theme.GRAY_500};
    cursor: not-allowed;
    pointer-events: none;
  }

  ${p => p.active && css`
    background-color: ${theme.GRAY_300};
    box-shadow: inset 0 1px 0 0 ${theme.GRAY_500};
    &:hover {
      background-color: ${theme.GRAY_300};
    }
    &:active {
      box-shadow: inset 0 1px 0 0 ${theme.GRAY_500};
    }
  `}

  ${p => p.padded && css`
    border-radius: 9999px;
    padding: 0 ${theme.SPACING_200};
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_400};
    height: ${theme.SPACING_600};
    min-width: ${theme.SPACING_600};
  `}

  ${Color}
  ${Margin}
`;

GhostButton.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2'
  ])
}

GhostButton.defaultProps = {
  size: 'size2'
};

export default GhostButton;
