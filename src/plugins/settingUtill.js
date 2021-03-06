function extractFiles(fileNames, folderName) {
  return fileNames.map(async (fileName) => {
    const { default: file } = await import(
      `@/locales/${folderName}/${fileName}`
    );
    return { key: fileName, file };
  });
}

function keyFileReducer(fileObjects) {
  return fileObjects.reduce(
    (acc, { key, file }) => ({ ...acc, [key]: file }),
    {}
  );
}

function getUserLocale() {
  console.log(navigator.userAgent)
  const locale =
    localStorage.getItem("hello-vuejs-locale") || "en-US";
  const lang =
    localStorage.getItem("hello-vuejs-lang") ||
    "en";
  return {
    locale,
    lang,
  };
}

export { extractFiles, keyFileReducer, getUserLocale };
