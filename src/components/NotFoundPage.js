import React from 'react';
import { Link } from 'react-router-dom';
//Link ne permite sa schimbam paginile fara sa fie dat un refresh la browser

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
