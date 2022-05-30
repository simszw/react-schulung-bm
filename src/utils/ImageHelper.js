export const getRandomImageUrl = () => {
  const randNum = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/400?random=${randNum}`;
};
