import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  color: white;
  background-color: #e74c3c;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
`;

interface ErrorNotificationProps {
  message: string;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorNotification;
