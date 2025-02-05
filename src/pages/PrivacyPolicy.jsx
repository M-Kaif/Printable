import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const PrivacyPolicy = () => {
  const [active, setActive] = React.useState(1);

  // Fixing type by properly typing the return value
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "white",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8 sm:pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Privacy and Cookie Policy
        </h1>

        {active === 1 && <Page1 />}
        {active === 2 && <Page2 />}
        {active === 3 && <Page3 />}

        <div className="flex items-center gap-4 w-full justify-center">
          <Button
            variant="text"
            className="flex items-center gap-2 text-white"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" /> Previous
          </Button>
          <div className="flex items-center gap-2 ">
            <IconButton  {...getItemProps(1)}>1</IconButton>
            <IconButton  {...getItemProps(2)}>2</IconButton>
            <IconButton  {...getItemProps(3)}>3</IconButton>
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2 text-white"
            onClick={next}
            disabled={active === 3}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

const Page1 = () => {
  return (
    <>
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-300 leading-relaxed">
          This Privacy Policy describes the information InkMudra (collectively, "we," "our," or "us") collects from you through your use of and access to our websites ("Sites"), services, or other tools we offer (collectively "Services") and how we use, share, and protect it. We may offer new services and/or features in the future, which will also be subject to these Terms & Conditions and Privacy Policy.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          InkMudra reserves the right to modify these Terms and Conditions (T&C) and Privacy Policy at any time without prior notice. Continued use of the Website signifies your acceptance of any changes.
        </p>
      </section>

      {/* Applicability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applicability</h2>
        <p className="text-gray-300 leading-relaxed">
          This Privacy Policy applies to all users of our Sites, including unregistered and registered users, as well as to our customers or potential customers (collectively, "User," "you," or "your"). To provide our Services, we collect personal information relating to an identified or identifiable natural person ("Personal Information"). Any such information we collect will be handled in accordance with this Terms & Conditions and Privacy Policy.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          By accessing or using our Sites and Services, you acknowledge that you have read and agree to this Privacy Policy. If you have general questions about this Privacy Policy, you can reach our privacy team at{" "}
          <a href="mailto:dataprotection@inkmudra.com" className="text-blue-400 hover:underline">
            dataprotection@inkmudra.com
          </a>.
        </p>
      </section>

      {/* What Personal Information Do We Collect? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          What Personal Information Do We Collect and How Do We Collect It?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          InkMudra offers a wide range of services to address your print needs. Information is collected both automatically when you visit our Sites and that which you provide when registering, filling out a form, uploading content, or communicating with us.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information We Collect Automatically</h3>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Device and Location Data</li>
          <li>Site Navigation and Usage Data</li>
          <li>Session Replay Recordings</li>
          <li>Purchase and Transaction History</li>
          <li>Cookies</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information You Give Us</h3>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Contact Details and Login Credentials</li>
          <li>Payment Information</li>
          <li>Communications and Marketing</li>
          <li>Reviews</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information You Provide About Others</h3>
        <p className="text-gray-300 leading-relaxed">
          If you upload or share information about others (e.g., through content sharing or referral programs), we will use this information to fulfill your request. Please ensure that you have obtained consent from those individuals regarding how their Personal Information will be used.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Information We Don’t Collect</h3>
        <p className="text-gray-300 leading-relaxed">
          We do not collect any special categories of personal data about you, such as racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health data, sex life or sexual orientation information, or information about criminal convictions and offenses.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Please note: If you choose not to share personal data with us or refuse certain contact permissions, we might not be able to provide the products and services you've requested.
        </p>
      </section>

      {/* Security Measures */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
        <p className="text-gray-300 leading-relaxed">
          We use your Personal Data for various purposes, including providing Services, preventing fraud, investigating security risks, complying with laws, and defending our rights.
        </p>
      </section>

      {/* How Do We Use Your Personal Information? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How Do We Use Your Personal Information?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
          <li>Account Management</li>
          <li>Providing Services</li>
          <li>Customer Support</li>
          <li>Customer Analytics</li>
          <li>Marketing</li>
          <li>Security</li>
          <li>Legal Compliance</li>
        </ul>
      </section>

      {/* Children */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Children</h2>
        <p className="text-gray-300 leading-relaxed">
          Our Services are not intended for children under the age of 13. Users must be legally competent to enter a binding contract. If between 13 and 18 years old, use is permitted only under parental or guardian supervision. If we become aware that a child under this age has provided Personal Information, we will remove it. Parents or guardians should contact us if they believe their child has submitted such information.
        </p>
      </section>

      {/* Disclosure and Sharing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who Do We Disclose and Share Your Personal Information With?</h2>
        <p className="text-gray-300 leading-relaxed">
          We may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
          <li>Service Providers: To fulfill orders, process payments, store data, and provide customer service, we share data with trusted third-party service providers.</li>
          <li>Law Enforcement and Legal Requirements: We may share data in response to legal requests, investigations, or events of a merger, acquisition, sale of assets, bankruptcy, insolvency event, corporate reorganization, or similar event.</li>
        </ul>
      </section>

      {/* Responsibility for Protecting Your Personal Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsibility for Protecting Your Personal Information</h2>
        <p className="text-gray-300 leading-relaxed">
          You are entirely responsible for maintaining the confidentiality of your password and account, and for any and all activities that occur under your account or password. You agree to immediately notify us of any unauthorized use of your account or password. We will not be liable for any loss resulting from someone else using your password or account, either with or without your knowledge. However, you may be held liable for losses incurred by us or any other party due to unauthorized access to your password or account.
        </p>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Terms & Conditions and Privacy Policy</h2>
        <p className="text-gray-300 leading-relaxed">
          We may update this Terms & Conditions and  Privacy Policy to reflect changes in technology, industry practices, or regulations. Any updates will be posted on our Sites as required by law. Please check periodically for updates. Your continued use of our Services implies acceptance of the revised Terms & Conditions and  Privacy Policy .From time to time, we may change this Terms & Conditions and  Privacy Policy to accommodate new technologies, industry practices, regulatory requirements or for other purposes. We reserve the right to modify this Terms & Conditions and  Privacy Policy at any time in accordance with the applicable law, so it is important that you check them each time you wish to use the Site or place a new Order.
        </p>
      </section>
    </>

  )
}


const Page2 = () => {
  return (
    <>
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Acknowledgment</h2>
        <p className="text-gray-300 leading-relaxed">
          InkMudra will send an acknowledgment text upon order submission. We reserve the right to reject any order without providing a reason, including breaches of these Terms & Conditions and  Privacy Policy. An order is confirmed only when we send an official confirmation email or verify via call or message. If we cannot fulfill an order, we will notify you and issue a full refund, including any shipping charges.
        </p>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mt-6 mb-2">Account Management</h2>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed">
          <li>InkMudra reserves the right to disable or terminate your account at any time for any reason, including non-compliance with these Terms & Conditions and  Privacy Policy. </li>
          <li>You are responsible for all activities under your account, including orders placed through it.</li>

        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Pricing & Charges</h3>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed">
          <li>Prices displayed exclude shipping charges, which will be calculated at checkout. </li>
          <li>Prices and fees exclude applicable Sales Tax, determined based on delivery location at checkout.</li>
          <li>Inkmudra uses its reasonable efforts to ensure that the Standard Prices are correct at the time when the relevant information was entered onto the system. However, Inkmudra sells a large number of products through the Site. Despite Inkmudra’s efforts, some of the Inkmudra Products or services on the Site may be incorrectly priced. If Inkmudra discovers an error in the price of the Inkmudra Products or services in an Order, Inkmudra will contact you to inform you of this error and give you the option of continuing to purchase the Inkmudra Products and services at the correct price or canceling the Order. Inkmudra will not process the Order until it has your instructions. If Inkmudra is unable to contact you using the contact details provided by you during the order process, Inkmudra will treat the Order as canceled, notify you in writing, and refund any sums already paid by you for the Inkmudra Products or services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Delivery & Ownership</h3>
        <li>Orders will be shipped via standard mail unless a faster delivery option is chosen at checkout.  </li>
        <li>Estimated delivery dates are approximate, and we are not responsible for delays.  </li>
        <li>Orders may be split into multiple shipments when necessary.  </li>
        <li>You must provide Inkmudra with your Delivery Information when you Order. Inkmudra will deliver your print to the address in the Delivery Information. Inkmudra only accepts one delivery address. If your specified address is not recognized in the shipping carrier's system, Inkmudra reserves the right to alter the delivery address to the closest match recognized by the carrier.</li>
        <li>Ownership and responsibility for products transfer to you upon delivery. </li>
        <li>If an order remains undelivered for five business days after notification, we may dispose of it without issuing a refund.</li>


        <h3 className="text-xl font-semibold mt-6 mb-2">Events Outside Our Control</h3>
        <p className="text-gray-300 leading-relaxed">
          InkMudra is not liable for delays or failures in service due to unforeseen circumstances, including but not limited to delays caused by delivery companies or a supplier of Inkmudra, or your failure to provide Inkmudra with adequate delivery instructions, or any natural disasters, terrorist attacks, criminal activity, failure of internet or communications networks, government orders, or pandemics or similar serious outbreaks of disease), Inkmudra will not be responsible to you for such breach or delay.</p>

      </section>

      {/* Security Measures */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Site Updates and Suspending or Withdrawing the Site or Inkmudra Products</h2>
        <p className="text-gray-300 leading-relaxed">
          Inkmudra has the right to modify, update, or change any part of the website at any time. This could be due to changes in its products, customer needs, business priorities, third-party supplier requirements, or legal obligations.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The website is free to use, but Inkmudra does not guarantee its continuous availability. It may suspend, withdraw, or limit access to the website or its content for any reason. </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Customer Content & Restrictions
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Customers must ensure that any content (“Customer Assets”) uploaded to the Inkmudra website complies with all applicable laws, regulations, and Inkmudra’s content standards. Customer Assets must:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
          <li>Be accurate when presenting facts.</li>
          <li>Be genuinely held when expressing opinions.</li>
          <li>Comply with the laws of any jurisdiction from which they are uploaded.</li>

        </ul>


        <p className="text-gray-300 leading-relaxed mt-4">
          Customer Assets must not:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed ">
          <li>Be defamatory, obscene, offensive, hateful, or inflammatory.</li>
          <li> Include or promote any sexually explicit content or child sexual abuse material.</li>
          <li>Encourage, incite, or glorify violence, terrorism, or other unlawful activities.</li>
          <li>Bully, intimidate, harass, humiliate, or threaten any individual or group.</li>
          <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.</li>
          <li>Infringe any third-party intellectual property rights, including copyright, trademarks, and database rights.</li>
          <li>Contain deceptive, misleading, or fraudulent information.</li>
          <li>Breach any legal or contractual duty, including confidentiality obligations.</li>
          <li>Be in contempt of court or violate any legal proceedings.</li>
          <li>Invade another person’s privacy or cause unnecessary distress, annoyance, or alarm.</li>
          <li>Impersonate any person, misrepresent identity, or falsely claim an affiliation.</li>
          <li>Advocate, promote, or assist in any unlawful act, including hacking, fraud, or copyright infringement.</li>
          <li>Contain statements that could be understood as encouraging or inciting terrorism.</li>

        </ul>

        <h2 className="text-2xl font-semibold mb-2 mt-6">
          Inkmudra’s Rights:
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Inkmudra reserves the right, at its sole discretion, to review, remove, restrict, or disable access to any Customer Assets that violate this clause or are deemed inappropriate, without prior notice. Inkmudra is not responsible for monitoring all uploaded content but retains the authority to take action where necessary.</p>

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4"> Limits & Exclusions of Liability</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          To the fullest extent permitted by applicable law, neither Inkmudra nor its licensors shall be liable for any indirect, incidental, special, consequential, or exemplary damages. This includes, but is not limited to, damages for loss of profits, revenue, business opportunities, goodwill, data, personal injury, death, or damage to property, arising from the use of or inability to use the Site or any Order. This limitation applies regardless of the legal theory invoked (including tort, contract, strict liability, or otherwise), even if Inkmudra has been advised of the possibility of such damages.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          To the maximum extent permitted by law, Inkmudra’s total liability in connection with any Order shall not exceed the total amount paid by the customer for that specific Order.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Not with standing above two clauses, nothing in these Terms shall limit or exclude Inkmudra’s liability for:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed ">
          <li> Death or personal injury caused by negligence.</li>
          <li>Fraud or fraudulent misrepresentation.</li>
          <li>Any liability that cannot be lawfully excluded or limited under applicable laws.</li>


        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4"> Complaints & Dispute Resolution</h2>
        <p className="text-gray-300 leading-relaxed">
          These Terms & Conditions and Privacy Policy are between you and InkMudra only.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Any disputes will be resolved as per applicable laws. Nobody else can enforce them, and neither you nor Inkmudra will need to ask anybody else to sign-off on ending or changing them.
        </p>
      </section>

      {/* Disclosure and Sharing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
        <p className="text-gray-300 leading-relaxed">
          In these Inkmudra Terms, the following definitions apply:
        </p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
          <li>	<strong>Account</strong> – The personal account you create on the Site, accessible behind a login.</li>
          <li>	<strong>Applicable Laws</strong> – All laws, regulations, and mandatory codes of practice that apply to a Party.</li>
          <li>	<strong>Business Day</strong> – Any day except Saturday or Sunday.</li>
          <li>	<strong>Customer, You, or Your</strong> – Any user of the Site or purchaser of Inkmudra Products and services (excluding Business Services customers with a subscription to the Business Platform).</li>
          <li>	<strong>Customer Assets</strong> – Any assets uploaded to the Site or provided to Inkmudra by you, including text, fonts, information, files, and PDFs.</li>
          <li>	<strong>Delivery Information</strong> – The name, address, email, and phone number you provide for delivery of Inkmudra Products and services .</li>
          <li>	<strong>Losses</strong> – Includes all claims, demands, actions, awards, judgments, settlements, costs, expenses, liabilities, damages, and losses (including interest, fines, penalties, management time, and legal or professional fees).</li>
          <li>	<strong>Inkmudra Products</strong> – Print products available for purchase from Inkmudra (as specified in each Order).</li>
          <li>	<strong>Inkmudra Technology & Content</strong> – Any software, databases, or materials owned by or licensed to Inkmudra, including the Site.</li>
          <li>	<strong>Order</strong> – Any order for Inkmudra Products and services  placed by you and accepted by Inkmudra in accordance with these Terms.</li>
          <li>	<strong>Party</strong> – Either you or Inkmudra (together referred to as Parties).</li>
          <li>	<strong>Representatives</strong> – Officers, employees, advisors, subcontractors, contractors, or any other persons engaged by a Party.</li>
          <li>	<strong>Sales Tax</strong> – Any sales tax, value-added tax (VAT), or similar taxes chargeable under Applicable Laws.</li>
          <li>	<strong>Shipping Charges</strong> – Fees for handling, shipping, and delivery of Inkmudra Products and services, as specified during checkout and recorded in an Order.</li>
          <li>	<strong>Company / Inkmudra</strong> – Refers to the owner of the Website, including its affiliates, employees, agents, and partners.</li>
          <li>	<strong>User</strong> – Any individual or entity accessing, browsing, or using Inkmudra’s services.</li>
          <li>	<strong>Services</strong> – Includes all printing services, price estimates, order placements, and courier-based deliveries offered by Inkmudra.</li>
          <li>	<strong>Content</strong> – Any materials, graphics, images, text, videos, and designs uploaded or created by Users.</li>

        </ul>
      </section>

      {/* Responsibility for Protecting Your Personal Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User’s Responsibility</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          You are entirely responsible for maintaining the confidentiality of your password and account, and for any and all activities that occur under your account or password.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          You agree to immediately notify us of any unauthorized use of your account or password.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We will not be liable for any loss resulting from someone else using your password or account, either with or without your knowledge. However, you may be held liable for losses incurred by us or any other party due to unauthorized access to your password or account.
        </p>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Restrictions</h2>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li>You may only use this site to make legitimate requests to purchase the products or services offered, and shall not use the site to make speculative, false, or fraudulent requests.</li>
          <li>You may not use robots or other automated means to access this site, unless specifically permitted by InkMudra.</li>
          <li>You represent that you are of sufficient legal age to create binding legal obligations for any liability you may incur as a result of using this site.</li>
          <li>It is a violation of law to place a request under a false name or with an invalid credit card. Fraudulent users may be prosecuted to the fullest extent of the law. </li>
        </ul>

        <p className="text-gray-300 leading-relaxed font-bold"> You must not:</p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4">
          <li>Harm the website’s performance using viruses or other disruptive technologies.</li>
          <li>Modify, reverse engineer, or disassemble any technology related to the website.</li>
          <li>Collect or misuse user data without consent.</li>
          <li>Upload malicious, abusive, defamatory, vulgar, or obscene content.</li>
          <li>Harm minors or impersonate any person or entity.</li>
          <li>Misrepresent your affiliation or reveal confidential information.</li>
          <li>Engage in activities that disrupt the website or servers.</li>
          <li>Assist others in violating these terms.</li>
          <li>Create documents for illegal activities or upload materials infringing intellectual property rights.</li>
          <li>Upload or distribute software viruses or programs that could harm or interrupt the system or service.</li>
          <li>Engage in activities that disrupt the website or servers.</li>
          <li>Harass, threaten, or defame others.</li>
          <li>Use automated systems to monitor or copy content without permission.</li>

        </ul>
      </section>
    </>

  )
}


const Page3 = () => {
  return (
    <div className="terms-container p-8 text-white">

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Pricing & Payment</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Currency:</strong> All prices and amounts displayed on the Site are in Indian Rupees (Rs), unless otherwise specified.</li>
          <li><strong>Price Changes:</strong> Prices and payment amounts are subject to change without prior notice.</li>
          <li><strong>Payment Authorization:</strong> By placing an order on the Site, you authorize Inkmudra to charge all applicable costs, including product charges, taxes, and shipping/handling fees, to your approved payment method.</li>
          <li><strong>Transaction Failures:</strong> Inkmudra is not responsible for failed transactions due to banking errors, incorrect payment details, or technical issues beyond its control.</li>
          <li><strong>Payment Delays:</strong> Orders may be placed on hold if payment is not received within the specified timeframe.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Color Accuracy & Limitations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>No Guarantee of Exact Color Matching: Inkmudra will strive to reproduce colors from submitted print-ready files as accurately as possible but cannot guarantee an exact color match due to limitations in the printing process.</li>
          <li>Factors Affecting Color Accuracy: Variations in equipment, paper, inks, coatings (such as UV coating), and other production factors may cause slight differences between the submitted file and the final printed product. Additionally, screen calibrations may result in discrepancies between digital previews and printed outputs.</li>
          <li>Acceptance of Color Variations: By placing an order, you acknowledge and accept these limitations. Slight color variations will not be considered errors and do not qualify for refunds, reprints, or replacements.</li>
          <li>Liability Disclaimer: Inkmudra assumes no responsibility for color variations that arise from the printing process, including but not limited to differences caused by coatings, material changes, or production methods.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> No Liability for Errors</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>User Responsibility: The user is responsible for ensuring that their order accurately specifies all relevant details, including size, color, quantity, and other specifications.</li>
          <li>Inkmudra’s Liability Exclusions:
            <ul className="list-disc pl-6 space-y-2">
              <li>Spelling, punctuation, and grammatical mistakes in the submitted files.</li>
              <li>Low-resolution graphics or images that affect print quality.</li>
              <li>Damaged fonts or transparency issues in the artwork.</li>
              <li>Artwork files that do not meet Inkmudra’s submission specifications.</li>
              <li>Incorrect user-selected options (e.g., size, quantity, paper type, or finish).</li>
              <li>Duplicate orders or incorrect files being uploaded.</li>
              <li>Errors in the shipping address provided by the user.</li>
              <li>Damage occurring after the delivery of the order.</li>
              <li>Cutting variances that occur during production.</li>
              <li>Minor discolorations resulting from laser cutting processes.</li>
            </ul>
          </li>
          <li>File Review Responsibility: Users are responsible for reviewing their files thoroughly and ensuring that all submitted materials meet Inkmudra’s specifications before placing an order.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Policy for Idea Submission</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>If you submit ideas or suggestions for products and services, these will be owned by Inkmudra. By submitting them, you assign all intellectual property rights in these ideas to us.</li>
          <li>If you wish to retain intellectual property rights, you must obtain prior written approval from Inkmudra.</li>
          <li>If Inkmudra is interested in your idea, we will contact you, and an additional legal agreement may be required to evaluate your idea.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Work Orders</h3>
        <p className="text-lg font-semibold mb-4">Alterations / Corrections:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>User alterations must be specified in writing and will be charged as per current rates.</li>
          <li>Alterations are only allowed within an hour of order placement.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Turnaround Time</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Turnaround time begins after proof approval.</li>
          <li>	We offer estimated turnaround times on the website, excluding holidays.</li>
          <li>	Special production requirements (e.g., binding, folding) may extend turnaround times.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Intellectual Property Rights</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>All content on the website, including templates, logos, and software, is copyrighted and protected by intellectual property laws.</li>
          <li>Users are not permitted to copy, display, or distribute any content without our explicit consent.</li>
          <li>Users retain ownership of the content they upload but grant us a license to use the content for production, marketing, and promotional purposes.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Governing Law and Jurisdiction</h3>
        <p>These Terms of Use will be governed by the laws of Mumbai, India. Any disputes will be subject to the exclusive jurisdiction of the courts in Mumbai.</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Indemnification</h3>
        <p>You agree to indemnify, defend, and hold Inkmudra and its affiliates, officers, employees, agents, and partners harmless from any loss, damage, or expense, including legal fees, arising from:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Any third-party claims resulting from your breach of these terms and conditions.</li>
          <li>Copyright or trademark infringements related to user-uploaded content.</li>
          <li>Defamatory, unlawful, or otherwise harmful material submitted by you.</li>
        </ul>
        <p className="mt-4">Intellectual Property & Defamation: You further agree to indemnify Inkmudra against any liabilities, including claims for infringement of intellectual property rights (such as copyright, trademark, etc.) or defamation caused by the content you upload or submit.</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> License to Use Website</h3>
        <p>Inkmudra grants Users a limited, revocable, non-transferable license to access and use the Website solely for personal and commercial printing purposes. This license is subject to the following restrictions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prohibited Actions: Users must not:
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, distribute, or sell any content or materials available on the Website.</li>
              <li>Use the Website for any illegal or unlawful activities.</li>
              <li>Reverse-engineer, decompile, or otherwise interfere with the functionality or security of the Website.</li>

            </ul>
          </li>
          <li>Right to Revoke Access: Inkmudra reserves the right to revoke or suspend access to the Website at any time, without notice, if these terms are violated.</li>
        </ul>
      </section>
      

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Intellectual Property Rights</h3>
        <p className="mb-4">Ownership of Inkmudra’s Content: All templates, designs, software, and other content available on www.inkmudra.com are the exclusive intellectual property of Inkmudra, protected by copyright, trademark, and other intellectual property laws.</p>
        <p className="mb-4">User-Owned Content: Users retain full ownership of any content they upload to the Site. However, by submitting content, Users grant Inkmudra a non-exclusive, royalty-free license to use, reproduce, modify, and distribute their uploaded content solely for the purposes of fulfilling printing orders and for promotional activities related to Inkmudra's business.</p>
        <p className="mb-4">Prohibited Use: Unauthorized use, copying, modification, or distribution of Inkmudra’s intellectual property, including its content, designs, templates, or software, is strictly prohibited.</p>
        
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4"> Disclaimer of Warranties & Limitation of Liability</h3>
        <p className="mb-4">Website "As Is": The Website and its services are provided "as is" without any warranties or guarantees of any kind, either express or implied. Inkmudra does not guarantee that the Website will be error-free, uninterrupted, or available at all times, or that services will be timely or flawless.</p>
        <p className="">Limitations on Liability: Inkmudra shall not be liable for the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>	User errors in the submitted files that lead to incorrect prints or other issues.</li>
              <li>	Infringements arising from user-uploaded content, including but not limited to intellectual property violations.</li>
              <li>Courier delays or mishandling that affect delivery timelines or quality.</li>
              <li>Loss of business, profits, or other financial losses resulting from printing errors.</li>

            </ul>
          
          <p>Maximum Liability: In the event of a defect or issue with an order, Inkmudra’s maximum liability is limited to the value of the defective order only. This liability does not extend beyond the specific order in question.</p>
        
      </section>
    </div>
  );
};


