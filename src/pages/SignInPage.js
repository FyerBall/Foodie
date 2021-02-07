import React from 'react';
import { Link } from 'react-router-dom';
function SignInPage() {
  return (
    <div>
      <Link to='/' className='btn nav-cta__secondary'>
        Sign up
      </Link>
    </div>
  );
}

// * FOR STYLED COMPONENTS
// .nav-cta__secondary {
//   color: var(--primary-color);
//   &:hover {
//     background: var(--primary-color-light);
//     color: var(--secondary-color);
//   }
// }
export default SignInPage;
