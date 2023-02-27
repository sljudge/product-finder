import React, {useMemo, useCallback} from 'react';
import generateStyles from './styles';

interface Props {
    header: string;
    colOne: string;
    colTwo: string;
}

const Test:React.FC<Props> = ({  header,  colOne,  colTwo,  }) => {
  const styles = useMemo(() => generateStyles(), [])
  const createMarkup = useCallback((html:string) => ({__html: html}), []);
  return (
    <div className={styles.container}>
         <div
          className={ styles.header }
          dangerouslySetInnerHTML={createMarkup(header) }
        />
         <div
          className={ styles.colOne }
          dangerouslySetInnerHTML={createMarkup(colOne) }
        />
         <div
          className={ styles.colTwo }
          dangerouslySetInnerHTML={createMarkup(colTwo) }
        />
    </div>
  );
};

export default Test;