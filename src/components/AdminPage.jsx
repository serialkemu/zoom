import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [packageName, setPackageName] = useState('');
  const [paymentAccount, setPaymentAccount] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const navigate = useNavigate();

  const BITLY_ACCESS_TOKEN = 'YOUR_BITLY_ACCESS_TOKEN';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      customerName: customerName,
      packageName: packageName,
      paymentAccount: paymentAccount
    }).toString();
    const longLink = `${window.location.origin}/info?${params}`;
    setGeneratedLink(longLink);
    
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: longLink,
          domain: "bit.ly"
        },
        {
          headers: {
            Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setShortenedLink(response.data.link);
    } catch (error) {
      console.error('Error creating short link:', error);
    }
  };

  const handleSendLink = () => {
    // Implement your logic to send the link (e.g., via email)
    alert(`Link sent to customer: ${shortenedLink || generatedLink}`);
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
      {shortenedLink && (
        <div>
          <p>Shortened Link: <a href={shortenedLink}>{shortenedLink}</a></p>
          <button onClick={handleSendLink}>Send Link to Customer</button>
        </div>
      )}
      {generatedLink && !shortenedLink && (
        <div>
          <p>Generated Link: <a href={generatedLink}>{generatedLink}</a></p>
          <button onClick={handleSendLink}>Send Link to Customer</button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
