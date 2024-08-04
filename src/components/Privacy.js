import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAgreement.css'; // Import the CSS file

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="user-agreement-wrapper">
     

      <h1>Privacy Policy</h1>

      <p className="effective-date">Effective Date: 26/07/2024</p>

      <h2>1. General Provisions</h2>
      <p>
        1.1. This Privacy Policy (hereinafter referred to as the "Policy") describes how we, https://www.feedback-paris2024.com/ and https://www.feedback-paris-2024.com, collect, use, and protect the personal data of users of our website https://www.feedback-paris2024.com/ and https://www.feedback-paris-2024.com (hereinafter referred to as the "Website").
      </p>

      <h2>2. Data Collected</h2>
      <p>
        2.1. We collect minimal personal data provided by users, namely name and country. Users may use pseudonyms or fictitious information.
      </p>

      <h2>3. Use of Data</h2>
      <p>
        3.1. The collected data is used for the following purposes:<br />
        - To ensure the operation and improve the quality of the Website.<br />
        - To provide support and respond to user inquiries.<br />
        - To analyze and enhance user experience.
      </p>

      <h2>4. Data Protection</h2>
      <p>
        4.1. We take reasonable measures to protect personal data from unauthorized access, use, or disclosure. We use technical and organizational security measures.
      </p>

      <h2>5. Data Disclosure</h2>
      <p>
        5.1. We do not transfer personal data of users to third parties, except as required to fulfill obligations to the user or as required by law.<br />
        5.2. In the case of data transfer outside the EU, we take measures to ensure adequate data protection in accordance with applicable laws.
      </p>

      <h2>6. Data Storage</h2>
      <p>
        6.1. Personal data is stored for as long as necessary to fulfill the purposes for which it was collected or in accordance with legal requirements. We periodically review the necessity of data storage.
      </p>

      <h2>7. User Rights</h2>
      <p>
        7.1. In accordance with applicable law, users have the right to:<br />
        - Request access to their personal data.<br />
        - Request correction of inaccurate or incomplete data.<br />
        - Request deletion of their data.<br />
        - Restrict data processing and object to processing in certain situations.<br />
        7.2. Users can exercise these rights by contacting us at the address provided below.
      </p>

      <h2>8. Links to Third-Party Resources</h2>
      <p>
        8.1. The Website may contain links to third-party resources. We are not responsible for the privacy policies or content of such resources.
      </p>

      <h2>9. Changes to the Policy</h2>
      <p>
        9.1. We may update this Policy from time to time.<br />
        Changes take effect from the moment they are published on the Website. We will indicate the date of the last update at the beginning of this Policy.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        10.1. If you have any questions or requests regarding this Policy or the processing of your data, please contact us at: feedbackparis2024@gmail.com<br />
        10.2. For GDPR compliance-related questions, you may contact our Data Protection Officer (DPO) at: feedbackparis2024@gmail.com.
      </p>

      <button className="back-button" onClick={handleBackClick}>
        Back to Main Page
      </button>
    </div>
  );
};

export default PrivacyPolicy;
