
let currentId = 1;

export const saveUser = (
  firstName,
  lastName,
  username,
  email,
) => new Promise(
  resolve => setTimeout(
    () => resolve({
      id: currentId++,
      firstName,
      lastName,
      username,
      email,
    }),
    1000,
  ),
);
