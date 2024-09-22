import React from 'react';
import { motion } from 'framer-motion';

const Template = ({setActiveSection}) => {
  const downloadDocument = (fileName) => {
    const link = document.createElement('a');
    link.href = `/path/to/local/files/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-primary text-textPrimary flex flex-col items-center text-center p-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-white mt-10 mb-16"
      >
        Popular Document Categories & Templates
      </motion.h2>

      {/* Categories Container with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-7xl px-5"
      >
        {/* Business and Contracts */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[rgba(0,0,0,0.6)] p-8 rounded-lg shadow-lg text-center border border-accent space-y-4"
        >
          <img
            src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg"
            alt="Business and Contracts"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-3xl font-bold text-purple-300 mb-4">Business and Contracts</h3>
          <ul className="text-white text-xl space-y-2">
            {['Non-Disclosure Agreement (NDA)', 'Independent Contractor Agreement', 'LLC Operating Agreement'].map((item, index) => (
              <li
                key={index}
                onClick={() => downloadDocument(`${item.replace(/\s+/g, '-')}.pdf`)}
                className="cursor-pointer hover:text-accent hover:underline transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-4">These documents are essential for setting up and protecting your business relationships.</p>
        </motion.div>

        {/* Real Estate */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[rgba(0,0,0,0.6)] p-8 rounded-lg shadow-lg text-center border border-accent space-y-4"
        >
          <img
            src="https://carmencorporateservices.com/wp-content/uploads/2024/04/real-estate-business-compressor.jpg"
            alt="Real Estate"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-3xl font-bold text-purple-300 mb-4">Real Estate</h3>
          <ul className="text-white text-xl space-y-2">
            {['Lease Agreement', 'Eviction Notice', 'Intent to Purchase Real Estate', 'Quitclaim Deed'].map((item, index) => (
              <li
                key={index}
                onClick={() => downloadDocument(`${item.replace(/\s+/g, '-')}.pdf`)}
                className="cursor-pointer hover:text-accent hover:underline transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-4">Important documents for managing your real estate transactions and agreements.</p>
        </motion.div>

        {/* Family and Personal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[rgba(0,0,0,0.6)] p-8 rounded-lg shadow-lg text-center border border-accent space-y-4"
        >
          <img
            src="https://corewellceu.com/uploads/blog_images/Family-Therapy.jpg"
            alt="Family and Personal"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-3xl font-bold text-purple-300 mb-4">Family and Personal</h3>
          <ul className="text-white text-xl space-y-2">
            {['Last Will and Testament', 'Living Will', 'Divorce Settlement Agreement'].map((item, index) => (
              <li
                key={index}
                onClick={() => downloadDocument(`${item.replace(/\s+/g, '-')}.pdf`)}
                className="cursor-pointer hover:text-accent hover:underline transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-4">Protect your personal assets and manage family-related legal matters.</p>
        </motion.div>
      </motion.div>

      {/* Additional Information Section */}
      <div className="w-full mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[rgba(0,0,0,0.6)] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 w-3/4 mx-auto text-center border border-accent space-y-4 mb-16"
        >
          <h3 className="text-3xl font-bold text-purple-300">Why Choose Our Documents?</h3>
          <p className="text-lg text-gray-300">
            All our documents are carefully curated from the best resources we found, covering multiple areas and ensuring you have the most reliable and comprehensive templates available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-[rgba(0,0,0,0.6)] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 w-3/4 mx-auto text-center border border-accent space-y-4 mb-16"
        >
          <h3 className="text-3xl font-bold text-purple-300">Need Help Finding the Right Document?</h3>
          <p className="text-lg text-gray-300">
            Contact our support team for assistance. We’re here to guide you through the process and ensure you have the right documentation for every situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Template;
