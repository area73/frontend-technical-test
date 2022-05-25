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

/**
 * Pull vehicles information
 *
 * @param {string} [url=defaultUrl]
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 *
 */
export default async function getData(url = defaultUrl) {
  return request(url);
}
