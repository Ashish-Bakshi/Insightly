import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="text-base sm:text-lg mb-6">
        Welcome to <strong>Insightly</strong>. By accessing or using our platform, you agree to be bound by the following
        Terms and Conditions. Please read them carefully before proceeding.
      </p>

      <section className="space-y-6 text-sm sm:text-base">
        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">1. Acceptance of Terms</h2>
          <p>By creating an account or using Insightly, you confirm your acceptance of these terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">2. User Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Do not post or upload offensive, unlawful, or copyrighted material.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">3. Content Ownership</h2>
          <p>
            All content provided on Insightly is for informational purposes. Users retain ownership of the content
            they submit but grant us a license to display it.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">4. Prohibited Activities</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You agree not to use the service for any illegal or unauthorized purpose.</li>
            <li>You agree not to attempt to hack or interfere with the site's security features.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">5. Termination</h2>
          <p>We reserve the right to suspend or terminate accounts that violate these terms at our discretion.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">6. Modifications</h2>
          <p>
            These terms may be updated occasionally. Continued use of the platform implies acceptance of the updated
            terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-2">7. Contact</h2>
          <p>
            If you have any questions or concerns about these terms, feel free to contact us at:{" "}
            <a href="mailto:support@insightly.com" className="text-indigo-600 hover:underline">
              support@insightly.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
