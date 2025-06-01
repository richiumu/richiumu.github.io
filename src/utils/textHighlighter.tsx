import React from 'react';
import { KOTONE_REGEX, KOTONE_NAMES_TO_HIGHLIGHT, KOTONE_HIGHLIGHT_CLASS } from '../constants/appConfig';

export const highlightKotoneNames = (text: string): (string | JSX.Element)[] => {
  if (!text) return [text];
  const parts = text.split(KOTONE_REGEX).filter(Boolean);
  return parts.map((part, index) =>
    KOTONE_NAMES_TO_HIGHLIGHT.includes(part) ? (
      <span key={index} className={KOTONE_HIGHLIGHT_CLASS}>
        {part}
      </span>
    ) : (
      part
    )
  );
};
