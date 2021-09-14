export const getShortenedAddress = (address) => {
  if (!address) {
    return '';
  }
  const beginning = address.substr(0, 6);
  const end = address.substr(address.length - 4, address.length);
  return `${beginning}...${end}`;
}