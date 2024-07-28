import { type Props } from './props.ts';

/**
 * The asynchronous function `createRule` in TypeScript creates
 * a CSS rule with a specified selector.
 *
 * @param {string} selector - The `selector` parameter in the `createRule`
 * function is a string that
 * represents the CSS selector for which a rule is being created.
 */

const createRule = async (props: Props) => {
  const { selector } = props;

  return {
    selector: `&${selector}`,
    type: 'rule',
  };
};

export { createRule };
