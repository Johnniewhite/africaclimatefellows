'use client';

import React from 'react';



const PoliciesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <div className="bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Policies
            </h1>
            
            {/* Checkout Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Checkout Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Our secure checkout process is designed to ensure a smooth and safe transaction for all donors. Once you click the &rdquo;DONATE NOW&rdquo; button, you will be redirected to our secure payment gateway. Please review your donation details carefully before confirming your payment.
                </p>
                <p className="mb-4">
                  All transactions are processed in real-time. You will receive an email confirmation of your donation shortly after a successful transaction. In case of any issues or errors during the checkout process, please contact our support team immediately using the contact details provided on this page.
                </p>
                <p className="mb-4">
                  We utilize industry-standard encryption and security protocols to protect your personal and financial information. Your data is handled in accordance with our comprehensive Privacy Policy.
                </p>
                <p className="italic">
                  Note: For international card acceptance, please refer to our International Cards Acceptance Policy linked in the footer.
                </p>
              </div>
            </section>

            {/* Privacy & Data Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy & Data Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  DEAN Initiative is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information. We collect information when you donate, sign up for newsletters, or interact with our site. This data is used solely to process donations, send updates, and improve our services. We do not sell or share your personal data with third parties without your explicit consent, except as required by law.
                </p>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information. All transactions are processed through a secure gateway and are not stored or processed on our servers. By using our website, you consent to our privacy policy.
                </p>
              </div>
            </section>

            {/* Refund Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Refund Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  As a non-profit organization, donations made to Your Organization are generally non-refundable. However, we understand that errors can occur. If you believe an error has been made in your donation, please contact us within 7 days of the transaction. We will review your request and, if an error is confirmed, a refund will be processed within 14 business days.
                </p>
                <p>
                  Refunds are issued at the discretion of Your Organization&rsquo;s management. We appreciate your understanding that our primary goal is to utilize all donations to further our mission.
                </p>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cancellation Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  For one-time donations, once the transaction is complete, it cannot be canceled. For recurring donations, you may cancel your recurring payment at any time by contacting us directly via email or phone. Please allow up to 5 business days for the cancellation to take effect.
                </p>
                <p>
                  No refunds will be provided for payments already processed prior to the cancellation request.
                </p>
              </div>
            </section>

            {/* Terms and Conditions */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Terms and Conditions
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Welcome to DEAN Initiative website. By accessing or using our website, you agree to comply with and be bound by our terms and conditions of use. These terms govern your use of the website and any services or content provided.
                </p>
                <p>
                  All content on this website is for general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
                </p>
              </div>
            </section>

            {/* International Cards Acceptance */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                International Cards Acceptance
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  We accept major international credit and debit cards (Visa, MasterCard, American Express, etc.) through our secure payment gateway. Please be aware that your bank may charge foreign transaction fees or apply a different exchange rate than the one displayed at the time of your donation.
                </p>
                <p>
                  The final amount charged to your card will be in your local currency, converted by your bank. We recommend checking with your card issuer regarding any potential international transaction fees or exchange rates before making a donation.
                </p>
              </div>
            </section>

            {/* Transaction Currencies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Transaction Currencies
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  We primarily accept payments in Nigerian Naira (NGN).
                </p>
                <p>
                  For international donations, we also accept USD, EUR, GBP. Your bank may apply conversion rates.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
};

export default PoliciesPage;