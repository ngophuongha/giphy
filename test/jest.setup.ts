import "@testing-library/jest-dom";

Object.assign(process.env, {
  REACT_APP_STORAGE_CHECK_TIME: "1",
  REACT_APP_AUTH_EXPIRE: "20",
});
