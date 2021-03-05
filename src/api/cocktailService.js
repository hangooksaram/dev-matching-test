const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  getRandom: async () => {
    try {
      const result = await request(`${API_URL}/random.php`);
      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
  search: async (keyword) => {
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    try {
      const result = await request(`${API_URL}/search.php?s=${keyword}`, {
        signal: abortSignal,
      });
      if (keyword === "") {
        //abort()가 실행되면 모든 비동기 처리가 종료된다
        abortController.abort();
        console.log(abortSignal);
      } else
        return {
          isError: false,
          data: result,
        };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
  getAll: async () => {
    try {
      const result = await request(`${API_URL}/search.php?f=a`);
      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
  searchById: async (keyword) => {
    try {
      const data = await request(`${API_URL}/lookup.php?i=${keyword}`);
      return {
        isError: false,
        data: data,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
};

export { api };
