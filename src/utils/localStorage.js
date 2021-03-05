const setItem = (key, keyword) => {
  localStorage.setItem(key, JSON.stringify(keyword));
};

const getItem = async (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export { setItem, getItem };
