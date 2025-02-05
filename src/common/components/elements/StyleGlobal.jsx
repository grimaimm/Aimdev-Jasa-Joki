import React from 'react';
import {
  aguarita,
  firaCode,
  jakartaSans,
  onestSans,
  soraSans,
} from '@/styles/font';

const StyleGlobal = () => {
  return (
    <style jsx global>
      {`
        html {
          --jakartaSans-font: ${jakartaSans.style.fontFamily};
          --soraSans-font: ${soraSans.style.fontFamily};
          --firaCode-font: ${firaCode.style.fontFamily};
          --onestSans-font: ${onestSans.style.fontFamily};
          --aguarita-font: ${aguarita.style.fontFamily};
        }
      `}
    </style>
  );
};

export default StyleGlobal;
