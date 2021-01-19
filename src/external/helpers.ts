/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const decodeSocketInnerData = function (encodedString: string, schema: { sequence: { [x: string]: any } }) {
  const separator = '~',
    minusSign = '-',
    lessThanSign = '<',
    GreaterThanSign = '>';

  return encodedString.split(separator).reduce(function (currObj, subStrToParse, index) {
    const currSign = subStrToParse.charAt(0);
    if (currSign !== minusSign) {
      let parsedSubStr;
      const field = schema.sequence[index];
      (parsedSubStr =
        currSign === lessThanSign
          ? void 0
          : currSign === GreaterThanSign
          ? null
          : field.type.unconvert(subStrToParse.substring(1))),
        (currObj[field.name] = parsedSubStr);
    }
    return currObj;
  }, {} as { [x: string]: any });
};
