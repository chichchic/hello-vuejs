function extractNonNumber(str) {
  // 아라비아 숫자와 아랍 숫자 콤마(,)를 제외
  return str.match(/[^0-9,^\u066B^\u066C^\u0660-\u0669]+/g);
}

export { extractNonNumber };
