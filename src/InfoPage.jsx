import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const InfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerName = queryParams.get('customerName');
  const packageName = queryParams.get('packageName');
  const paymentAccount = queryParams.get('paymentAccount');

  // Restricting access if the required parameters are not present
  if (!customerName || !packageName || !paymentAccount) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Information for {customerName}</h1>
      <p><strong>Customer Name:</strong> {customerName}</p>
      <p><strong>Package:</strong> {packageName}</p>
      <p><strong>Payment Account:</strong> {paymentAccount}</p>
    </div>
  );
};

export default InfoPage;
