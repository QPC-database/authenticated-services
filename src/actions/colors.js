export const GENERATE_COLOR = 'GENERATE_COLOR';
export const generateColor = () => {
  const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
  let hexStr = randomNumber.toString(16);
  while (hexStr.length < 6) {
    hexStr = `0${hexStr}`;
  }
  return {
    type: GENERATE_COLOR,
    color: `#${hexStr}`,
  };
};
