import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="text-base sm:text-lg mb-6">
        At <strong>Insightly</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your data.
      </p>

      <section className="space-y-6 text-sm sm:text-base">
        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personal Information such as your name, email address, and profile details.</li>
            <li>Usage Data such as pages visited, time spent on the site, and other analytical data.</li>
            <li>Cookies and tracking technologies for improving user experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, personalize user experience,
            send important account and service information, and ensure platform security.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">3. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share your data with trusted partners to
            help us operate our platform or comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">4. Data Retention</h2>
          <p>
            We retain your information as long as your account is active or as needed to provide services and fulfill
            legal obligations.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">5. Your Data Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">6. Cookies</h2>
          <p>
            We use cookies to enhance your experience, analyze usage, and tailor content. You can manage your cookie
            preferences through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage users to review it periodically for any
            changes.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">8. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, contact us at:{" "}
            <a href="mailto:support@insightly.com" className="text-indigo-600 hover:underline">
              support@insightly.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
