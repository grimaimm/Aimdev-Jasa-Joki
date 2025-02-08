import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedlight}
      wrapLongLines
      customStyle={{
        backgroundColor: 'transparent',
        zIndex: 10,
        marginTop: '0', // Removed negative margin, adjusted for cleaner layout
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
