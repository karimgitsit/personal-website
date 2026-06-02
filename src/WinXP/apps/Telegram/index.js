import React, { useEffect } from 'react';

function Telegram({ onClose }) {
  useEffect(() => {
    // Open Telegram link immediately in a new tab
    window.open('https://t.me/karimhal', '_blank', 'noopener,noreferrer');
    // Close this (invisible) window so the icon re-opens the link on every click.
    if (onClose) onClose();
  }, [onClose]);

  // Nothing visible renders; the component just triggers the new tab.
  return null;
}

export default Telegram; 