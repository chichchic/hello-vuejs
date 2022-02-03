const importAll = (r) =>
  r.keys().map((key) => key.slice(2).replace(".js", "").split("/"));
const stores = importAll(
  require.context("@/modules", true, /\/store\/index\.js$/)
);
const generateStore = (path) => path[0].toLowerCase();

export default stores.map(async (path) => {
  const { default: module } = await import(`@/modules/${path.join("/")}`);
  return {
    name: generateStore(path),
    module,
  };
});
