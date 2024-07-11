import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const InfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerName = queryParams.get('customerName');

  // Mock data for other details based on customerName
  const details = {
    packageName: 'Gold',
    paymentAccount: '1234-5678-9101-1121'
  };

  // Restricting access if the required parameters are not present
  if (!customerName) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Information for {customerName}</h1>
      <p><strong>Customer Name:</strong> {customerName}</p>
      <p><strong>Package:</strong> {details.packageName}</p>
      <p><strong>Payment Account:</strong> {details.paymentAccount}</p>
    </div>
  );
};

export default InfoPage;
