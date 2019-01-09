import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! Page not found. :(
        <br/>
        <Link to="/">Return to Home page</Link>
    </div>
);

export default NotFoundPage;