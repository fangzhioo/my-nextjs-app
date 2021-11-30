import { defs as petstoreDefs, petstore } from './petstore';

export const defs = {
  petstore: petstoreDefs,
};
export const API = {
  petstore,
};
const pont = { defs, API };

export default pont;
