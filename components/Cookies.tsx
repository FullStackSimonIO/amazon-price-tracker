import React from "react";
import { CookieConsent } from "react-cookie-consent";

const Cookies = () => {
  return (
    <div>
      <CookieConsent>
        This Website is using cookies per personalized experiences.
      </CookieConsent>
    </div>
  );
};

export default Cookies;
