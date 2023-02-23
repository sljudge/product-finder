import React, { useMemo } from "react";
import generateStyles from "./styles";

interface Props {
  header: string;
  subHeader: string;
  imgUrl: string;
  white: boolean;
}

const Banner: React.FC<Props> = ({ header, subHeader, imgUrl, white }) => {
  const styles = useMemo(() => generateStyles(white), [white]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.subHeader}>{subHeader}</div>
    </div>
  );
};

export default Banner;
