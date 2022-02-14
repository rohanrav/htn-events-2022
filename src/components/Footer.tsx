import React from "react";
import { FooterHelp, Link } from "@shopify/polaris";

const Footer: React.FC<{}> = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <FooterHelp>
        Learn more about{" "}
        <Link external url="https://hackthenorth.com/">
          HackTheNorth
        </Link>{" "}
        here!
      </FooterHelp>
    </div>
  );
};

export default Footer;
