const ALPHABET = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
const LENGTH = 8;

const shortId = () => {
  let result = '';
  for (let i = 0; i < LENGTH; i++) {
    result += ALPHABET.charAt(
      Math.floor(Math.random() * ALPHABET.length));
  }
  return result;
};

export default shortId;
