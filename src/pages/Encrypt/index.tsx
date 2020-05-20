import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export const EncryptPageComponent: React.FC = () => (
  <div>
    <h1>EncryptPage</h1>
    <Link to="/decrypt">
      Decrypt
    </Link>
  </div>
);

const EncryptPage = memo(EncryptPageComponent);
EncryptPage.displayName = 'EncryptPage';

export default EncryptPage;
