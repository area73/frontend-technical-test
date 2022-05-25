// eslint-disable-next-line no-unused-vars
import { request } from './helpers';
import {
  VEHICLES_RESOURCE, PORT, HOST, API_DIR
} from './config';

const defaultUrl = HOST + PORT + API_DIR + VEHICLES_RESOURCE;

/**
 * I think is a good idea to allow getData to receive a param with the URL just in case we need to
 *  use this function later to fetch any other resource.
 *
 * In order not to break the interface contract I also made url param to have a default value.
 *
 */

const isFulfilled = (response) => response.status === 'fulfilled';
const hasPrice = (response) => !!response.value?.price;

/**
 * Pull vehicles information
 *
 * @param {string} [url=defaultUrl]
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 *
 */
export default async function getData(url = defaultUrl) {
  try {
    const vehicles = await request(url);
    // Now that we have the vehicles we need to fetch other resources and get all the info needed
    // we first extract all apiUrl from vehicles and store in an array of promises to resolve all
    // together
    const apiUrlsCalls = vehicles.map((vehicle) => request(vehicle.apiUrl));
    const details = await Promise.allSettled(apiUrlsCalls);
    // now that we have all the extra info , we need to apply constrains:
    // - isFullfilled
    // - hasPrice
    const filteredDetails = details.filter((detail) => isFulfilled(detail) && hasPrice(detail)).map((detail) => detail.value);
    // finally we will merge vehicles main info with details by id
    const vehiclesWithDetails = filteredDetails.map((filteredDetail) => ({ ...filteredDetail, ...vehicles.find((vehicle) => vehicle.id === filteredDetail.id) }));
    return Promise.resolve(vehiclesWithDetails);
  } catch (error) {
    return Promise.reject(error);
  }
}
