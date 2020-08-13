import React from 'react'
import { HighlightWrapper, HighlightText } from './style';

function index({ width, height, radius, text }) {
  return (
    <HighlightWrapper
      width={width}
      height={height}
      radius={radius}
    >
      <HighlightText>{text}</HighlightText>
    </HighlightWrapper>
  )
}

export default index
