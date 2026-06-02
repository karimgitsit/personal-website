import React, { useEffect } from 'react';

function Twitter({ onClose }) {
  useEffect(() => {
    // Open X (Twitter) profile immediately in a new tab
    window.open('https://x.com/0xKarim', '_blank', 'noopener,noreferrer');
    // Immediately close this (invisible) window so the icon can be
    // clicked again to re-open the link in another new tab.
    if (onClose) onClose();
  }, [onClose]);

  // Nothing visible renders; the component just triggers the new tab.
  return null;
}

export default Twitter;
