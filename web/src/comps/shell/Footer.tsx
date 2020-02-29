import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <footer>
    <div className="container">
      <p>Starfish Advocates is a 501 (c)(3) nonprofit organization</p>
      <p>Starfish Advocates Florida Registration # CH47611 </p>
      <p>
        A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE OBTAINED FROM THE DIVISION OF CONSUMER SERVICES (www.FloridaConsumerHelp.com) BY CALLING 1-800-HELP-FLA
        (435-7352), TOLL-FREE, WITHIN THE STATE. REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.
      </p>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <p>Copyright © 2019</p>
    </div>
  </footer>
);

export default Footer;
