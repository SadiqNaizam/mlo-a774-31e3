import React from 'react';
import LoginForm from '../components/Login/LoginForm';

/**
 * @page IndexPage
 * @description The main login page for the application.
 * It implements a full-screen, centered layout to display the login form,
 * as defined by the AuthLayout requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <LoginForm />
    </main>
  );
};

export default IndexPage;
