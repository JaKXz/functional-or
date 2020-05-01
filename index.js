const isFunction = fn => typeof fn === "function";

/**
 * functional-or
 *
 *
 * @param fns
 * @returns {function(...[*]=)}
 */
module.exports = function functionalOr(...fns) {
  return (...data) => {
    if (fns.length > 0 && fns.every(isFunction)) {
      return fns.reduce((acc, fn) => acc + !!fn(...data), 0) >= 1;
    } else if (fns.some(isFunction)) {
      throw new Error("the first set of args must be ALL functions.");
    } else {
      console.info("checking truthyness of data args only");
    }

    return data.reduce((acc, val) => acc + !!val, 0) >= 1;
  };
}
