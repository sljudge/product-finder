import React from "react";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import GBFlag from "assets/images/gb-flag.png";

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-page py-4">
      <Logo width={35} height={35} />
      <div className="flex">
        <img src={GBFlag} alt="GB Flag" className="w-5 h-5 mr-2" />
        <span className="text-base">Professional Investor</span>
      </div>
    </div>
  );
};

export default TopBar;
