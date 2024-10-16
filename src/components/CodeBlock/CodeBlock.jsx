import React from 'react'
import { highlight } from "sugar-high";

function CodeBlock({ children }) {
  const code = highlight(children);
  return (
    <pre className="codeBlock">
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}

export default CodeBlock;
