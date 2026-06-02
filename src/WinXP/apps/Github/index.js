import React, { useEffect } from 'react';

function Github({ onClose }) {
  useEffect(() => {
    window.open('https://github.com/karimgitsit', '_blank', 'noopener,noreferrer');
    // Close this (invisible) window so the icon re-opens the link on every click.
    if (onClose) onClose();
  }, [onClose]);

  return null;
}

export default Github;
