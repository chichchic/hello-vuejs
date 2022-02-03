const nullGuard = ({ to, from }, res, rej) => {
  if (to.name !== null) res();
  else rej();
};
export default nullGuard;
