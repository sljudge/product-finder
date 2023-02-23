import React, {useMemo} from 'react';
import generateStyles from './styles';

interface Props {
    header: string;
    colOne: string;
    colTwo: string;
}

const Test:React.FC<Props> = ({  header,  colOne,  colTwo,  }) => {
  const styles = useMemo(() => generateStyles(), [])
  return (
    <div className={styles.container}>
        <div className={styles[header as keyof typeof styles]}>{ header }</div>
        <div className={styles[colOne as keyof typeof styles]}>{ colOne }</div>
        <div className={styles[colTwo as keyof typeof styles]}>{ colTwo }</div>
    </div>
  );
};

export default Test;