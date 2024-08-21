import React, { useState } from 'react';
import logo from '../../src/internpluss-logo.png';

const CertificateVerification = () => {
  const [isInternship, setIsInternship] = useState(true);

  const switchMode = () => {
    setIsInternship(!isInternship);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full bg-custom-teal text-black py-4 shadow-md flex max-w-full relative justify-center">
        <a href="https://www.internpluss.com/"><img src={logo} alt="Internpluss Logo" className="h-8 mr-4 absolute left-5" /></a>
        <h1 className="text-center text-3xl font-bold">Internpluss Certificate Verification</h1>
      </header>
      <main className="w-full flex flex-col lg:flex-row mt-8 px-4 lg:px-16">
        <section className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <div className="flex justify-center mb-4">
            <button
              onClick={switchMode}
              style={{ backgroundColor: isInternship ? 'rgb(26, 182, 157)' : 'rgb(211, 211, 211)' }}
              className="px-4 py-2 text-white rounded-l-lg focus:outline-none">
              Verify Internship Certificate
            </button>
            <button
              onClick={switchMode}
              style={{ backgroundColor: !isInternship ? 'rgb(26, 182, 157)' : 'rgb(211, 211, 211)' }}
              className="px-4 py-2 text-white rounded-r-lg focus:outline-none">
              Verify Hackathon Certificate
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label for='text' className="block text-gray-700">Candidate Name <span className="text-red-600">*</span></label>
              <input id='text' type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-emerald-400" required />
            </div>
            <div>
              <label for='text' className="block text-gray-700">Certificate Number <span className="text-red-600">*</span></label>
              <input id='text' type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-emerald-400" required />
            </div>
            <div>
              <label for="email" className="block text-gray-700">Email ID</label>
              <input id='email' type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-emerald-400" />
            </div>
            <button id='submit' type="submit" className="w-full custom-bg text-white py-2 rounded-lg hover:bg-emerald-600">Submit</button>
          </form>
        </section>
        <section className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg lg:ml-4 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Verify the Certificate</h2>
          <p className="text-gray-600 mb-4">Follow these steps to verify your certificate:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Enter the candidate's name in the form.</li>
            <li>Enter the certificate number in the form.</li>
            <li>If you want, enter your email ID for updates.</li>
            <li>Click the submit button to verify the certificate.</li>
          </ol>
          <p className="text-gray-600 mt-4">For any issues, contact us at <a href="https://www.internpluss.com/contact" style={{ color: 'rgb(26, 182, 157)' }}>contact@internpluss.com</a>.</p>
        </section>
      </main>
    </div>
  );
};

export default CertificateVerification;
