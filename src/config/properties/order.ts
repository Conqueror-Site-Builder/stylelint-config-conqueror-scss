import {
  ATTRIBUTE_CHILD_REGEX,
  ATTRIBUTE_REGEX,
  ATTRIBUTE_SIBLING_REGEX,
  CHILD_REGEX,
  CLASS_CHILD_REGEX,
  CLASS_REGEX,
  CLASS_SIBLING_REGEX,
  NESTED_ATTRIBUTE_CHILD_REGEX,
  NESTED_ATTRIBUTE_REGEX,
  NESTED_ATTRIBUTE_SIBLING_REGEX,
  NESTED_CLASS_CHILD_REGEX,
  NESTED_CLASS_REGEX,
  NESTED_CLASS_SIBLING_REGEX,
  NESTED_ELEMENT_REGEX,
  NESTED_MODIFIER_REGEX,
  SIBLING_REGEX,
} from '@archoleat/reglib';

import { createAtRule } from '#utils/create-at-rule/create-at-rule.ts';
import { createRule } from '#utils/create-rule/create-rule.ts';

import { appearance } from './appearance.ts';
import { boxModel } from './box-model.ts';
import { common } from './common.ts';
import { content } from './content.ts';
import { experimental } from './experimental.ts';
import { image } from './image.ts';
import { interaction } from './interaction.ts';
import { layout } from './layout.ts';
import { nonStandard } from './non-standard.ts';
import { positioning } from './positioning.ts';
import { svg } from './svg.ts';
import { transitions } from './transitions.ts';
import { typography } from './typography.ts';

const experimentalPseudoElement = experimental.pseudo.element;
const experimentalPseudoElementMozilla = experimental.pseudo.element.moz;
const experimentalPseudoElementWebkit = experimental.pseudo.element.webkit;
const nonStandardPseudoElementMozilla = nonStandard.pseudo.element.moz;
const nonStandardPseudoElementWebkit = nonStandard.pseudo.element.webkit;
const experimentalPseudoClass = experimental.pseudo.class;
const nonStandardPseudoClassMozilla = nonStandard.pseudo.class.moz;
const propertiesOrder = {
  'order/order': [
    'dollar-variables',
    'custom-properties',
    await createAtRule({ name: 'function' }),
    await createAtRule({ name: 'include' }),
    await createAtRule({ name: 'extend' }),
    'declarations',
    await createRule({ selector: '::before' }),
    await createRule({ selector: '::after' }),
    await createRule({ selector: '::selection' }),
    await createRule({ selector: '::backdrop' }),
    await createRule({ selector: '::marker' }),
    await createRule({ selector: '::first-line' }),
    await createRule({ selector: '::first-letter' }),
    await createRule({ selector: '::cue' }),
    await createRule({ selector: '::cue-region' }),
    await createRule({ selector: '::placeholder' }),
    await createRule({ selector: '::file-selector-button' }),
    await createRule({ selector: '::highlight' }),
    await createRule({ selector: '::part' }),
    await createRule({ selector: '::slotted' }),
    await createRule({ selector: experimentalPseudoElement.targetText }),
    await createRule({ selector: experimentalPseudoElement.error.spelling }),
    await createRule({ selector: experimentalPseudoElement.error.grammar }),
    await createRule({ selector: experimentalPseudoElement.viewTransition }),
    await createRule({ selector: experimentalPseudoElement.view.transition.group }),
    await createRule({
      selector: experimentalPseudoElement.view.transition.imagePair,
    }),
    await createRule({ selector: experimentalPseudoElement.view.transition.old }),
    await createRule({ selector: experimentalPseudoElement.view.transition.new }),
    await createRule({
      selector: experimentalPseudoElementWebkit.slider.runnableTrack,
    }),
    await createRule({ selector: experimentalPseudoElementWebkit.slider.thumb }),
    await createRule({ selector: experimentalPseudoElementMozilla.focusInner }),
    await createRule({ selector: nonStandardPseudoElementWebkit.innerSpinButton }),
    await createRule({ selector: nonStandardPseudoElementWebkit.meter.bar }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.meter.value.evenLessGood,
    }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.meter.innerElement,
    }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.meter.value.optimum,
    }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.meter.value.subOptimum,
    }),
    await createRule({ selector: nonStandardPseudoElementWebkit.progress.bar }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.progress.innerElement,
    }),
    await createRule({ selector: nonStandardPseudoElementWebkit.progress.value }),
    await createRule({ selector: nonStandardPseudoElementWebkit.scrollbar }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.search.button.results,
    }),
    await createRule({
      selector: nonStandardPseudoElementWebkit.search.button.cancel,
    }),
    await createRule({ selector: nonStandardPseudoElementMozilla.meterBar }),
    await createRule({ selector: nonStandardPseudoElementMozilla.colorSwatch }),
    await createRule({ selector: nonStandardPseudoElementMozilla.list.bullet }),
    await createRule({ selector: nonStandardPseudoElementMozilla.list.number }),
    await createRule({ selector: nonStandardPseudoElementMozilla.page }),
    await createRule({ selector: nonStandardPseudoElementMozilla.pageSequence }),
    await createRule({ selector: nonStandardPseudoElementMozilla.pageSequence }),
    await createRule({ selector: nonStandardPseudoElementMozilla.progressBar }),
    await createRule({ selector: nonStandardPseudoElementMozilla.range.track }),
    await createRule({ selector: nonStandardPseudoElementMozilla.range.progress }),
    await createRule({ selector: nonStandardPseudoElementMozilla.range.thumb }),
    await createRule({
      selector: nonStandardPseudoElementMozilla.scrolledPageSequence,
    }),
    await createRule({ selector: ':root' }),
    await createRule({ selector: ':lang' }),
    await createRule({ selector: ':scope' }),
    await createRule({ selector: ':host' }),
    await createRule({ selector: ':host-content' }),
    await createRule({ selector: ':modal' }),
    await createRule({ selector: ':popover-open' }),
    await createRule({ selector: ':fullscreen' }),
    await createRule({ selector: ':picture-in-picture' }),
    await createRule({ selector: ':first' }),
    await createRule({ selector: ':left' }),
    await createRule({ selector: ':right' }),
    await createRule({ selector: ':only-child' }),
    await createRule({ selector: ':only-of-type' }),
    await createRule({ selector: ':first-child' }),
    await createRule({ selector: ':first-of-type' }),
    await createRule({ selector: ':last-child' }),
    await createRule({ selector: ':last-of-type' }),
    await createRule({ selector: ':nth-child' }),
    await createRule({ selector: ':nth-of-type' }),
    await createRule({ selector: ':nth-last-child' }),
    await createRule({ selector: ':nth-last-of-type' }),
    await createRule({ selector: ':link' }),
    await createRule({ selector: ':visited' }),
    await createRule({ selector: ':hover' }),
    await createRule({ selector: ':focus' }),
    await createRule({ selector: ':focus-visible' }),
    await createRule({ selector: ':focus-within' }),
    await createRule({ selector: ':active' }),
    await createRule({ selector: ':enabled' }),
    await createRule({ selector: ':disabled' }),
    await createRule({ selector: ':checked' }),
    await createRule({ selector: ':indeterminate' }),
    await createRule({ selector: ':valid' }),
    await createRule({ selector: ':user-valid' }),
    await createRule({ selector: ':invalid' }),
    await createRule({ selector: ':user-invalid' }),
    await createRule({ selector: ':read-only' }),
    await createRule({ selector: ':read-write' }),
    await createRule({ selector: ':optional' }),
    await createRule({ selector: ':required' }),
    await createRule({ selector: ':placeholder-shown' }),
    await createRule({ selector: ':default' }),
    await createRule({ selector: ':past' }),
    await createRule({ selector: ':current' }),
    await createRule({ selector: ':future' }),
    await createRule({ selector: ':playing' }),
    await createRule({ selector: ':paused' }),
    await createRule({ selector: ':stalled' }),
    await createRule({ selector: ':muted' }),
    await createRule({ selector: ':volume-locked' }),
    await createRule({ selector: ':seeking' }),
    await createRule({ selector: ':buffering' }),
    await createRule({ selector: ':autofill' }),
    await createRule({ selector: ':in-range' }),
    await createRule({ selector: ':out-of-range' }),
    await createRule({ selector: ':empty' }),
    await createRule({ selector: ':target' }),
    await createRule({ selector: experimentalPseudoClass.targetWithin }),
    await createRule({ selector: ':any-link' }),
    await createRule({ selector: ':local-link' }),
    await createRule({ selector: ':defined' }),
    await createRule({ selector: ':dir' }),
    await createRule({ selector: ':where' }),
    await createRule({ selector: ':is' }),
    await createRule({ selector: ':has' }),
    await createRule({ selector: ':not' }),
    await createRule({ selector: experimentalPseudoClass.blank }),
    await createRule({ selector: experimentalPseudoClass.state }),
    await createRule({ selector: nonStandardPseudoClassMozilla.broken }),
    await createRule({ selector: nonStandardPseudoClassMozilla.dragOver }),
    await createRule({ selector: nonStandardPseudoClassMozilla.node.first }),
    await createRule({ selector: nonStandardPseudoClassMozilla.node.last }),
    await createRule({ selector: nonStandardPseudoClassMozilla.handler.disabled }),
    await createRule({ selector: nonStandardPseudoClassMozilla.handler.blocked }),
    await createRule({ selector: nonStandardPseudoClassMozilla.handler.crashed }),
    await createRule({ selector: nonStandardPseudoClassMozilla.loading }),
    await createRule({ selector: nonStandardPseudoClassMozilla.localeDir }),
    await createRule({ selector: nonStandardPseudoClassMozilla.onlyWhitespace }),
    await createRule({ selector: nonStandardPseudoClassMozilla.submitInvalid }),
    await createRule({ selector: nonStandardPseudoClassMozilla.suppressed }),
    await createRule({ selector: nonStandardPseudoClassMozilla.userDisabled }),
    await createRule({ selector: nonStandardPseudoClassMozilla.windowInactive }),
    await createRule({
      selector: new RegExp(`^${NESTED_ATTRIBUTE_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_ATTRIBUTE_SIBLING_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_ATTRIBUTE_CHILD_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_CLASS_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_CLASS_SIBLING_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_CLASS_CHILD_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_MODIFIER_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${NESTED_ELEMENT_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${ATTRIBUTE_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${ATTRIBUTE_SIBLING_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${ATTRIBUTE_CHILD_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${CLASS_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${CLASS_SIBLING_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${CLASS_CHILD_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${SIBLING_REGEX}$`),
    }),
    await createRule({
      selector: new RegExp(`^${CHILD_REGEX}$`),
    }),
    'rules',
    await createAtRule({ name: 'include', hasBlock: true }),
    await createAtRule({ name: 'media', hasBlock: true }),
  ],
  'order/properties-order': [
    [
      ...common,
      ...interaction,
      ...positioning,
      ...appearance,
      ...content,
      ...boxModel,
      ...layout,
      ...typography,
      ...image,
      ...svg,
      ...transitions,
    ],
    {
      severity: 'warning',
      emptyLineBeforeUnspecified: 'always',
      emptyLineMinimumPropertyThreshold: 5,
      unspecified: 'bottomAlphabetical',
    },
  ],
};

export { propertiesOrder };
