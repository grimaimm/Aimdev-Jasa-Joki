import React from 'react';
import prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.min.css';

export default function CodeHighlighter({ code, lang }) {
  React.useEffect(() => {
    prism.highlightAll();
  }, [code]);

  return (
    <pre className={`!bg-transparent language-${lang}`}>
      <code className='!bg-transparent'>{code}</code>
    </pre>
  );
}
