const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Refund Policy
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Last Updated: Feb 4, 2026
        </p>

        <p className="mt-8 text-gray-700 leading-7">
          At Proximsoft, we are committed to delivering high-quality IT
          training and consulting services. We value our learners and clients,
          and your satisfaction is our top priority. This Refund Policy explains
          how refunds are handled for our training programs, demo sessions, and
          professional services.
        </p>

        {/* Section 1 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Training Program Refunds
          </h2>

          <div className="mt-6 space-y-6 text-gray-700 leading-7">
            <div>
              <h3 className="font-medium text-gray-900">
                Before Course Start Date
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  A full refund (100%) will be issued if you cancel your
                  registration at least 48 hours before the course begins.
                </li>
                <li>
                  Requests must be sent via email to{" "}
                  <a
                    href="mailto:support@proximsoft.com"
                    className="text-black underline"
                  >
                    support@proximsoft.com
                  </a>{" "}
                  with proof of payment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                After Course Start Date
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Once classes have started, full refunds are not available.</li>
                <li>
                  However, a partial refund (up to 50%) may be considered if
                  you withdraw within the first two live sessions, citing valid
                  reasons such as technical issues or scheduling conflicts.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                Demo & Trial Sessions
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Demo sessions are generally free of cost unless otherwise
                  specified.
                </li>
                <li>Any paid demo fee is non-refundable.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                Batch Rescheduling
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  You may request to reschedule to another batch within 30 days
                  of the original course start date, subject to seat
                  availability.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Corporate Training & Consulting Services
          </h2>

          <p className="mt-4 text-gray-700 leading-7">
            Refunds for corporate or consulting services are handled as per the
            agreement or invoice terms.
          </p>

          <p className="mt-3 text-gray-700 leading-7">
            Fees for completed milestones or delivered services are
            non-refundable.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Dispute Resolution
          </h2>

          <p className="mt-4 text-gray-700 leading-7">
            If you believe a payment was processed incorrectly, please contact{" "}
            <a
              href="mailto:billing@proximsoft.com"
              className="text-black underline"
            >
              billing@proximsoft.com
            </a>{" "}
            within 7 business days of the transaction.
          </p>

          <p className="mt-3 text-gray-700 leading-7">
            Our team will investigate and respond within 5–7 working days.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Refund Processing Timeline
          </h2>

          <p className="mt-4 text-gray-700 leading-7">
            Approved refunds are processed within 7–10 business days to the
            original payment method.
          </p>

          <p className="mt-3 text-gray-700 leading-7">
            Please note that bank or transaction fees (if applicable) may be
            deducted.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            5. Non-Refundable Cases
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 leading-7">
            <li>Non-attendance without prior written notice.</li>
            <li>Courses accessed or attended beyond two live sessions.</li>
            <li>Digital course material already downloaded or accessed.</li>
            <li>
              Registrations made under special offers or discounted rates.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mt-12 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            6. Contact Us
          </h2>

          <p className="mt-4 text-gray-700 leading-7">
            If you have questions about this Refund Policy or wish to request a
            refund, please contact:
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              Email:{" "}
              <a
                href="mailto:support@proximsoft.com"
                className="text-black underline"
              >
                support@proximsoft.com
              </a>
            </p>

            <p>
              Billing:{" "}
              <a
                href="mailto:billing@proximsoft.com"
                className="text-black underline"
              >
                billing@proximsoft.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;