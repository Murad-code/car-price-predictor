module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/price-prediction",
        destination: "http://127.0.0.1:5000/api/price-prediction",
      },
    ];
  };
  return {
    rewrites,
  };
};
