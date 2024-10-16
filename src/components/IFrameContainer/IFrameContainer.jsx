import styles from "./IFrameContainer.module.css";

function IFrameContainer({ height='auto', srcCode, title }) {
  return (
    <div>
      <iframe
      className={styles.iframe}
      style={{height: height}}
        src={`https://codesandbox.io/embed/${srcCode}?view=split&hidenavigation=1&editorsize=58`}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

export default IFrameContainer;
