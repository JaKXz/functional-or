<a name="module_@jakxz/functional-or"></a>

## @jakxz/functional-or

<a name="exp_module_@jakxz/functional-or--functionalOr"></a>

### functionalOr(...fns) ⇒ <code>function</code> ⏏

A utility for composing a set of predicate functions that check against the
curried data to find if one of the predicate conditions is met. This is most
helpful when your predicates are relatively complex and you want to compose
the checks in existing piped or composed functions; for the simplest example,
if you have:

```js
const isFoo = (str) => str === "foo";
const isBar = (str) => str === "bar";
```

you can compose these functions into:

```js
import or from "@jakxz/functional-or";

const isFooOrBar = or(isFoo, isBar);
```

and use it like so:

```js
const results = ["foo", "bar", "baz"].filter(isFooOrBar);
```

If you don't want to pass any functions at all, you can just check the truthyness
of your data args:

```js
const isAnyTruthy = or()("x", "y", 0, null);
```

**Kind**: Exported function

| Param  | Description                                     |
| ------ | ----------------------------------------------- |
| ...fns | pass in any number of functions or none at all. |
