import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="app-description">
            <strong>OnePlus 13 Pro</strong> - Premium smartphone experience
          </p>
          <p className="website-url">Website: https://sumitweb.xyz</p>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="privacy-content">
          <section className="policy-section">
            <h2>About OnePlus 13 Pro</h2>
            <p>
              <strong>OnePlus 13 Pro</strong> is a premium mobile product platform designed to deliver powerful performance, advanced camera features, and a seamless user experience.
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </section>

          <section className="policy-section">
            <h2>Information We Collect</h2>
            <p>
              When you use OnePlus 13 Pro, we may collect certain information to provide you with the best product ordering and support experience possible.
            </p>
            <ul>
              <li>Personal information (name, email, phone number)</li>
              <li>Order history and product preferences</li>
              <li>Shipping address information</li>
              <li>Payment information (processed securely through Razorpay)</li>
              <li>Usage data for personalized recommendations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and deliver your orders</li>
              <li>Provide customer support</li>
              <li>Improve our services</li>
              <li>Send important updates about your orders</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p>
              We take data security seriously and implement appropriate measures to protect your personal information. 
              All payment transactions are processed using secure encryption methods.
            </p>
          </section>

          <section className="policy-section">
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services to help us operate our business, including payment processors and delivery services. 
              These services have access to your information only as necessary to perform their functions.
            </p>
          </section>

          <section className="policy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website. These help us remember your preferences 
              and provide a more personalized service.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@sumitweb.xyz</p>
              <p><strong>Website:</strong> https://sumitweb.xyz</p>
              <p><strong>Platform:</strong> OnePlus 13 Pro</p>
              <p><strong>Address:</strong> Online storefront and global retail partners</p>
            </div>
          </section>
        </div>

        <div className="privacy-footer">
          <button onClick={() => window.location.href = '/'} className="back-btn">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
