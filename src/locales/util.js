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

export { extractFiles, keyFileReducer };
