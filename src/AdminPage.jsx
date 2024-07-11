import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [packageName, setPackageName] = useState('');
  const [paymentAccount, setPaymentAccount] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      customerName: customerName,
      packageName: packageName,
      paymentAccount: paymentAccount
    }).toString();
    const link = `${window.location.origin}/info?${params}`;
    setGeneratedLink(link);
  };

  const handleSendLink = () => {
    // Implement your logic to send the link (e.g., via email)
    alert(`Link sent to customer: ${generatedLink}`);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Package:</label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Payment Account:</label>
          <input
            type="text"
            value={paymentAccount}
            onChange={(e) => setPaymentAccount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Generate Link</button>
      </form>
      {generatedLink && (
        <div>
          <p>Generated Link: <a href={generatedLink}>{generatedLink}</a></p>
          <button onClick={handleSendLink}>Send Link to Customer</button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
