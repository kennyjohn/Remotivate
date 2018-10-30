import React from 'react';
import { Link } from 'react-router-dom';

const margin = {
  margin: '10px'
}

// In React, inline styles are not specified as a string.
// Instead they are specified with an object whose key 
// is the camelCased version of the style name, and 
// whose value is the style’s value, usually a string.

const NotFoundPage = () => (
  <div style={margin}>
    404 – Go back to <Link to="/">Remotivate dashboard</Link>
  </div>
);

export default NotFoundPage;
