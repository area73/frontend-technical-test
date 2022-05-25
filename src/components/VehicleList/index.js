import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    /**
     * I don't want to show the real error message that comes from fetch, because of two things.
     * The first one is that we are giving some value info to an attacker , so I try to follow the rule of "silent is gold"
     * The other reason is that for a user having something like:
     * "SyntaxError: Unexpected token < in JSON at position 0"
     * is confusing and not helping the user, so a prefer to lgo an standard message.
     *
     * I log the error only for this challenge purpose, but in a real scenario I wouldn't log it
     * in production
     */
    // console.error(error);
    return <div data-testid="error">An error ocurred, please try again later</div>;
  }

  return (
    <div data-testid="results">
      <p>List of vehicles will be displayed here</p>
      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        {' '}
        (vehicle without any price)
      </p>
    </div>
  );
}
