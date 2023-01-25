module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/test",
        destination: "http://127.0.0.1:5000/test",
      },
    ];
  };
  return {
    rewrites,
  };
};
