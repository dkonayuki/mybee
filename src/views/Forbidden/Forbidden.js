import React from 'react';
import { Helmet } from 'react-helmet';

import './Forbidden.css';

function Forbidden() {
  return (
    <div className="forbidden">
      <Helmet>
        <title>Forbidden</title>
      </Helmet>
      Oops! You are not allowed to access this resource.
    </div>
  );
}

export default Forbidden;
