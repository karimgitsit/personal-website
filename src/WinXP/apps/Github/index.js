import React, { useEffect } from 'react';

function Github() {
  useEffect(() => {
    window.open('https://github.com/karimgitsit', '_blank');
  }, []);

  return null;
}

export default Github;
