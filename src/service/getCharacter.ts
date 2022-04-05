import { BASE_URL_API } from "../constants";

export const getCharacter = async (url: string) => {
  const response = await fetch(`${BASE_URL_API}character/${url}`);

  if (!response.ok) {
    throw new Error(`Could not fetch ${BASE_URL_API}character/${url} 
    received ${response.status}`);
  }
  return await response.json();
};