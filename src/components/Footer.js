import React from 'react';
import '../components/footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Block 1: Contact Email */}
        <div className="footer-block">
          <p>
          Quoting comments is allowed with a link to the site.
          </p>
        </div>

        {/* Block 2: Comment Guidelines */}
        <div className="footer-block">
          <p>
          Racist, religious, sexist, or nationality-based hate speech and offensive language are not allowed.
            
          </p>
        </div>

        {/* Block 3: Mention the Website */}
        <div className="footer-block">
          <p>
            
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
