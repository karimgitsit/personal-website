import React, { useEffect } from 'react';

function Crypto4Gaza({ onClose }) {
  useEffect(() => {
    // Open the Crypto Gaza website in a new tab
    window.open('https://www.cryptogaza.com/', '_blank', 'noopener,noreferrer');
    // Close this (invisible) window so the icon re-opens the link on every click.
    if (onClose) onClose();
  }, [onClose]);

  // This component doesn't render anything; it just opens a URL.
  return null;
}

export default Crypto4Gaza; 