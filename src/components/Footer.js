// client/src/components/Footer.js

import React, { useState } from 'react';
import '../components/footer.css'; // Import the CSS file for styling

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFooter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="footer">
      <div className={`footer-content footer-desktop`}>
        {/* Block 1: Contact Email */}
        <div className="footer-block">
          <p>Quoting comments is allowed with a link to the site.</p>
        </div>

        {/* Block 2: Comment Guidelines */}
        <div className="footer-block">
          <p>Racist, religious, sexist, or nationality-based hate speech and offensive language are not allowed.</p>
        </div>

        {/* Block 3: Mention the Website */}
        <div className="footer-block">
        <p><a href="mailto:feedbackparis2024@gmail.com">feedbackparis2024@gmail.com</a></p>
        </div>
      </div>

      <div className={`footer-content footer-mobile ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {/* Block 1: Contact Email */}
        <div className="footer-block">
          <p>Quoting comments is allowed with a link to the site.</p>
        </div>

        {/* Block 2: Comment Guidelines */}
        <div className="footer-block">
          <p>Racist, religious, sexist, or nationality-based hate speech and offensive language are not allowed.</p>
        </div>

        {/* Block 3: Mention the Website */}
        <div className="footer-block">
          <p><a href="mailto:feedbackparis2024@gmail.com">feedbackparis2024@gmail.com</a></p>
        </div>
      </div>

      {/* Toggle Button */}
      <button className="footer-toggle-btn footer-toggle-btn-dekstop" onClick={toggleFooter}>
        {isExpanded ? 'Hide Footer' : 'Show Footer'}
      </button>
      <button className="footer-toggle-btn footer-toggle-btn-mobile" onClick={toggleFooter}>
        {isExpanded ? 'Contacts' : 'Contacts'}
      </button>
    </footer>
  );
};

export default Footer;
