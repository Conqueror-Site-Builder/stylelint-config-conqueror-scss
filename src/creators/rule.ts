/**
 * The asynchronous function `createRule` in TypeScript creates
 * a CSS rule with a specified selector.
 * @param {string} selector - The `selector` parameter in the `createRule`
 * function is a string that
 * represents the CSS selector for which a rule is being created.
 */
export default async (selector: string) => ({
  selector: `&${selector}`,
  type: 'rule',
});
