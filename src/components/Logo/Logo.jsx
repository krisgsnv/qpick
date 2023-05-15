import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">Qpick</Link>
  );
};

export default Logo;
