import React, { useMemo, useCallback } from "react";
import generateStyles from "./styles";

interface Props {
  header: string;
  text: string;
  imgSrc: string;
}

const TwoColumn: React.FC<Props> = ({ header, text, imgSrc }) => {
  const styles = useMemo(() => generateStyles(), []);
  const createMarkup = useCallback((html: string) => ({ __html: html }), []);
  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        dangerouslySetInnerHTML={createMarkup(header)}
      />
      <div className="flex">
        <div
          className={styles.colOne + " " + styles.column}
          dangerouslySetInnerHTML={createMarkup(text)}
        />
        <div
          className={styles.colTwo + " " + styles.column}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      </div>
    </div>
  );
};

export default TwoColumn;
