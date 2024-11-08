'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyle = {};
  const arrStr = sourceString.split(';');

  for (const pieceArr of arrStr) {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.log(pieceArr);

    if (pieceArr) {
      const [styleName, value] = pieceArr.trim().split(':');

      if (styleName && value) {
        cssStyle[styleName.trim()] = value.trim();
      }
    }
  }

  return cssStyle;
}

module.exports = convertToObject;
