import React from "react";

import Logo from "assets/images/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="px-page py-12 text-white text-sm bg-blue-300">
      <img src={Logo} alt="Huguenots logo" />
      <p className="my-8 max-w-3xl">
        Nostrud dolor consectetur eiusmod laboris do irure minim et mollit anim
        est ex. Ut ullamco enim ipsum voluptate et dolore voluptate nisi enim in
        aute in ex dolore. Laborum non cupidatat est nisi tempor veniam
        reprehenderit irure eu eiusmod. Veniam culpa excepteur sunt veniam
        nostrud do deserunt proident deserunt quis aliqua occaecat nulla
        aliquip.
      </p>
      <div>
        <a href="/terms" target="_blank" className="mr-4">
          Terms of Use
        </a>
        <a href="/legal" target="_blank" className="mr-4">
          Legal Terms
        </a>
        <a href="/privacy" target="_blank" className="mr-4">
          Privacy Policy
        </a>
        <a href="/cookies" target="_blank" className="mr-4">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
