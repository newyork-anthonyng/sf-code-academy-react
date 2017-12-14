// Generate a beautiful gradient 🌈
export default function colorGenerator(length) {
  const colors = [];

  for (let i = 0; i < length; i += 1) {
    colors.push(
      `hsl(${Math.round((i / 500) * 360)}, 100%,50%)`
    );
  }

  return colors;
}
