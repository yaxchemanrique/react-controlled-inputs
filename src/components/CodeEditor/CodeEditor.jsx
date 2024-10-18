import Editor from "@monaco-editor/react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import styles from "./CodeEditor.module.css";
import { useState } from "react";

function CodeEditor({ defaultCode, height='auto' }) {
  const [code, setCode] = useState(defaultCode);
  return (
    <LiveProvider enableTypeScript={false} code={code}>
      <div className={styles.codeEditor} style={{height: height, aspectRatio: `${height !== 'auto' ? 'auto': '16 / 9'}`}}>
        <Editor
          width="100%"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            padding: {
              top: 16,
            },
            lineNumbers: "off",
            tabSize: 2,
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            contextmenu: false,
          }}
          onChange={(value) => setCode(value)}
        />
        <LivePreview className={styles.preview} />
      </div>
      <LiveError />
    </LiveProvider>
  );
}

export default CodeEditor;
