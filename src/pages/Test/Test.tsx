import React, { useState } from "react";

import Banner from "components/Banner";
import TwoColumn from "components/TwoColumn";
import TestComp from "components/Test";

const Test: React.FC = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("editorjs-data") as string) || []
  );
  return (
    <>
      {/* @ts-ignore */}
      {data.blocks.map((elem) => {
        switch (elem.type) {
          case "banner":
            const { header, subHeader, imgUrl, white } = elem.data;
            return (
              <Banner
                header={header}
                subHeader={subHeader}
                imgUrl={imgUrl}
                white={white}
              />
            );
            break;
          case "twoColumn":
            return (
              <TwoColumn
                header={elem.data.header}
                text={elem.data.text}
                imgSrc={elem.data.imgSrc}
              />
            );
            break;
          case "test":
            const data = elem.data;
            return (
              <TestComp
                header={data.header as string}
                colOne={data.colOne as string}
                colTwo={data.colTwo as string}
              />
            );
            break;

          default:
            break;
        }
      })}
    </>
  );
};

export default Test;
