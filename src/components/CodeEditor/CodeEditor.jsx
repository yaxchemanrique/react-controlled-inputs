import { useState, useEffect } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import Editor, { useMonaco } from "@monaco-editor/react";
import { RefreshCw } from "feather-icons-react";
import { Resizable } from "re-resizable";

import styles from "./CodeEditor.module.css";

function CodeEditor({ defaultCode, height = "auto" }) {
  const [code, setCode] = useState(defaultCode);
  const monaco = useMonaco();
  const sidesToResize = {
      top: false,
      right: true,
      bottom: false,
      left: true,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
  }

  useEffect(() => {
    if (monaco) {
      import("monaco-themes/themes/Dracula.json")
        .then((data) => {
          monaco.editor.defineTheme("dracula", data);
        })
        .then((_) => monaco.editor.setTheme("dracula"));
    }
  }, [monaco]);

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
            display: "flex",
            backgroundColor: "var(--clr-accent-100-100)"
          }}
        >
          <Resizable
            style={{ display: "flex" }}
            defaultSize={{
              width: "60%",
              height: "100%"
            }}
            enable={sidesToResize}
            minWidth={"10%"}
            maxWidth={"90%"}
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
          </Resizable>
            <LivePreview style={{width: "100%"}} className={styles.preview} />
        </div>
      </div>
      <LiveError />
    </LiveProvider>
  );
}

export default CodeEditor;
