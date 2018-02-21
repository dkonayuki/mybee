import React from 'react';
import Forbidden from '../views/Forbidden';

/**
 *
 * function that generates HOCs (higher-order components)
 *
 * @param allowdedRoles: roles that are allowed to access the resource
 * @return a HOC
 *
 */
function generateAuthorization(allowedRoles) {
  return (
    /**
     *
     * @param WrappedComponent: origin component
     * @param role: user's auth level
     * @return a new component with inheritted props
     *
     */
    (WrappedComponent, role) =>
      (props) => {
        // check role
        if (allowedRoles.includes(role)) {
          return <WrappedComponent {...props} />;
        }
        return <Forbidden />;
      }
  );
}

// for management-tool
export const admin = generateAuthorization([4]);
export const user = generateAuthorization([2, 3, 4]);
export const visitor = generateAuthorization([1, 2, 3, 4]);
