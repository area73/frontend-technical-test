import React from 'react';
import useData from './useData';
import './style.scss';
import LoadingWidget from '../LoadingWidget';
import ErrorWidget from '../ErrorWidget';
import Vehicle from '../Vehicle';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) { return <LoadingWidget />; }

  if (error) {
    /**
     * I don't want to show the real error message that comes from fetch, because of two things.
     * The first one is that we are giving some valuable info to an attacker , so I try to follow
     * the rule of "silent is gold"
     * The other reason is that for a user having something like:
     * "SyntaxError: Unexpected token < in JSON at position 0"
     * is confusing and not helping the user, so a prefer to log an standard message.
     *
     */
    return <ErrorWidget />;
  }

  return (
    <ul className="vehicleList">
      {vehicles.map((props) => {
        const {
          id, price, description, media
        } = props;
        return (
          <li className="vehicleList__vehicle" key={id}><Vehicle id={id} price={price} description={description} media={media} /></li>
        );
      })}
    </ul>
  );
}
