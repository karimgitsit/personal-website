import React, { useEffect } from 'react';

function Email({ onClose }) {
  useEffect(() => {
    // Open default email app with mailto link
    window.location.href = 'mailto:karim@ngmilabs.com';
    // Close this (invisible) window so the icon re-triggers mailto on every click.
    if (onClose) onClose();
  }, [onClose]);

  // Nothing visible renders; the component just opens the email app.
  return null;
}

export default Email; 