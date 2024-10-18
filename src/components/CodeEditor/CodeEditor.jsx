import { useState } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import Editor from "@monaco-editor/react";
import { RefreshCw } from "feather-icons-react";

import styles from "./CodeEditor.module.css";

function CodeEditor({ defaultCode, height = "auto" }) {
  const [code, setCode] = useState(defaultCode);
  
  return (
    <LiveProvider enableTypeScript={false} code={code}>
      <div className={styles.playgroundWrapper}>
        <div className={styles.navigationBar}>
          <p>playground</p>
          <button
            onClick={() => {
              setCode(defaultCode);
            }}
          >
            <RefreshCw size={18} color="var(--clr-accent-400-100)" />
          </button>
        </div>
        <div
          className={styles.codeEditor}
          style={{
            height: height,
            aspectRatio: `${height !== "auto" ? "auto" : "16 / 9"}`,
          }}
        >
          <Editor
            width="100%"
            defaultLanguage="javascript"
            value={code.trim()}
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
      </div>
      <LiveError />
    </LiveProvider>
  );
}

export default CodeEditor;
