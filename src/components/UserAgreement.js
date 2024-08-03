import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAgreement.css'; // Import the CSS file

const UserAgreement = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="user-agreement-wrapper">
      <h1>User Agreement</h1>
      <p className="effective-date">Effective Date: 03/08/2024</p>
      
      <h2>1. General Provisions</h2>
      <p>
        This agreement governs the relationship between the website owner (hereinafter referred to as the "Administration") and the user of the website (hereinafter referred to as the "User").
      </p>

      <h2>2. Rules of Conduct on the Website</h2>
      <p>
        2.1. The User agrees to adhere to ethical standards and legal regulations when posting comments and other materials on the website.<br />
        2.2. Posting offensive, derogatory, or obscene statements about other users, third parties, organizations, or public groups is prohibited.<br />
        2.3. Posting materials that incite hatred, hostility, or discrimination based on any criteria, including but not limited to: race, nationality, religion, gender, sexual orientation, disability, and others, is prohibited.
      </p>

      <h2>3. Responsibility</h2>
      <p>
        3.1. The User bears full responsibility for the materials and comments they post.<br />
        3.2. The Administration reserves the right to remove comments and materials that violate this agreement without prior notice to the User.<br />
        3.3. In the event of a User's violation of the website conduct rules, the Administration may block their access to the website temporarily or permanently.
      </p>

      <h2>4. Disclaimer</h2>
      <p>
        4.1. The Administration is not responsible for the accuracy, completeness, or usefulness of information posted by users in comments.<br />
        4.2. Opinions expressed in user comments are solely those of the users and do not reflect the views of the Administration.
      </p>

      <h2>5. Reporting Violating Content</h2>
      <p>
        5.1. Users may notify the Administration of comments they believe violate this agreement.<br />
        5.2. The Administration reserves the right, but is not obligated, to remove or modify such comments.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        6.1. To the maximum extent permitted by law, the Administration is not liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the website, even if the Administration has been advised of the possibility of such damages.
      </p>

      <h2>7. Moderation Conditions</h2>
      <p>
        7.1. The Administration reserves the right, at its discretion, to moderate, edit, or remove any content posted by users if it deems necessary to comply with this agreement.<br />
        7.2. The Administration may suspend or terminate a user’s access to the website for violations of the agreement without prior notice.
      </p>

      <h2>8. Dispute Resolution Agreement</h2>
      <p>
        8.1. All disputes arising from this agreement shall be resolved in accordance with the laws of the country in which the Administration is registered.<br />
        8.2. In case of disagreements, the User agrees to first attempt to resolve the dispute through negotiations with the Administration.
      </p>

      <h2>9. Final Provisions</h2>
      <p>
        9.1. The Administration is not responsible for the content of comments and materials posted by Users.<br />
        9.2. This agreement may be unilaterally amended by the Administration. Changes take effect from the moment they are published on the website.
      </p>

      <h2>10. Acceptance of the Agreement</h2>
      <p>
        10.1. By continuing to use the website, the User confirms their acceptance of the terms of this agreement.
      </p>

      <h2>11. Intellectual Property Rights</h2>
      <p>
        11.1. Users guarantee that the materials they post do not infringe on copyrights, trademarks, patents, or other intellectual property rights of third parties.<br />
        11.2. The Administration is not responsible for any intellectual property rights infringements that may be associated with user-generated content.
      </p>

      <h2>12. User Data</h2>
      <p>
        12.1. The Administration is not responsible for any leaks or misuse of data posted by users, unless it is directly related to a breach of the website's privacy policy.<br />
        12.2. Users are responsible for protecting their personal information when posting comments and materials on the website.
      </p>

      <h2>13. User Agreement and Third-Party Resources</h2>
      <p>
        13.1. The website may contain links to third-party resources. The Administration is not responsible for the content and availability of these resources, nor for any losses or damages arising from the use of such resources.
      </p>

      <h1>Privacy Policy</h1>

      <p className="effective-date">Effective Date: 03/08/2024</p>

      <h2>1. General Provisions</h2>
      <p>
        1.1. This Privacy Policy (hereinafter referred to as the "Policy") describes how we, [Your Company/Website Name], collect, use, and protect the personal data of users of our website websitename.com (hereinafter referred to as the "Website").
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
        10.1. If you have any questions or requests regarding this Policy or the processing of your data, please contact us at: email@example.com.<br />
        10.2. For GDPR compliance-related questions, you may contact our Data Protection Officer (DPO) at: email@example.com.
      </p>

      <button className="back-button" onClick={handleBackClick}>
        Back to Main Page
      </button>
    </div>
  );
};

export default UserAgreement;
