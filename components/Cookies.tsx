import React from "react";
import { CookieConsent } from "react-cookie-consent";

const Cookies = () => {
  return (
    <div>
      <CookieConsent>This website is using cookies</CookieConsent>
    </div>
  );
};

export default Cookies;
