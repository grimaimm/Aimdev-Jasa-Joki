import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  solarizedlight,
  dracula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedlight}
      wrapLongLines
      customStyle={{
        marginTop: '-2rem',
        backgroundColor: 'transparent',
        zIndex: 10,
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
