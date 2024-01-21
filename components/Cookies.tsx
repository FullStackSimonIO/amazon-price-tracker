import React from "react";
import { CookieConsent } from "react-cookie-consent";

const Cookies = () => {
  return (
    <div>
      <CookieConsent>
        This Website is using cookies per personalized experienc.
      </CookieConsent>
    </div>
  );
};

export default Cookies;
