import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export const DecryptPageComponent: React.FC = () => (
  <div>
    <h1>DecryptPage</h1>
    <Link to="/encrypt">
      Encrypt
    </Link>
  </div>
);

const DecryptPage = memo(DecryptPageComponent);
DecryptPage.displayName = 'DecryptPage';

export default DecryptPage;
