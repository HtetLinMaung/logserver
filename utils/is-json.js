module.exports = (v) => {
  try {
    JSON.parse(v);
    return true;
  } catch (err) {
    return false;
  }
};
