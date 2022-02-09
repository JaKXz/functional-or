/**
 * @module @jakxz/functional-or
 */

/**
 * A utility for composing a set of predicate functions that check against the
 * curried data to find if one of the predicate conditions is met. This is most
 * helpful when your predicates are relatively complex and you want to compose
 * the checks in existing piped or composed functions; for the simplest example,
 * if you have:
 *
 * ```js
 * const isFoo = (str) => str === 'foo';
 * const isBar = (str) => str === 'bar';
 * ```
 *
 * you can compose these functions into:
 * ```js
 * import or from '@jakxz/functional-or';
 *
 * const isFooOrBar = or(isFoo, isBar);
 * ```
 *
 * and use it like so:
 * ```js
 * const results = ['foo', 'bar', 'baz'].filter(isFooOrBar);
 * ```
 *
 * If you don't want to pass any functions at all, you can just check the truthyness
 * of your data args:
 * ```js
 * const isAnyTruthy = or()('x', 'y', 0, null);
 * ```
 *
 * @param fns - pass in any number of functions or none at all.
 * @returns {function(...[*])}
 * @alias module:@jakxz/functional-or
 */
export default function functionalOr(...fns) {
  return (...data) => {
    if (fns.length > 0) {
      for (const fn of fns) {
        if (typeof fn !== "function") {
          throw new Error("the first set of args must be ALL functions.");
        }

        try {
          if (fn(...data) === true) {
            return true;
          }
        } catch {}
      }
      return false;
    } else {
      console.info("checking truthyness of data args only");
    }

    return data.reduce((acc, val) => acc + !!val, 0) >= 1;
  };
}
