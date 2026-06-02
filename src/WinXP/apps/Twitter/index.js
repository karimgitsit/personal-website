import React, { useEffect } from 'react';

function Twitter() {
  useEffect(() => {
    // Open X (Twitter) profile immediately in new tab
    window.open('https://x.com/0xKarim', '_blank');
  }, []);

  // This component won't actually render anything visible
  // since it immediately opens a new tab
  return null;
}

export default Twitter;
