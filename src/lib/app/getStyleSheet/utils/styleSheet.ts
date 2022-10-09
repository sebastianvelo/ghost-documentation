import Declaration from "../types/Declaration";

export const Rule = (selector: string): string => `${selector} {}`;

export const MinBreakpoint = (min: number) => `min-width: ${min}px`;

export const MediaRule = (selector: string, min: number): string => `
  @media (${MinBreakpoint(min)}) {
    ${Rule(selector)}
  }
`;

const getPriority = (isImportant?: boolean) => isImportant ? "important" : undefined;

export const insertRuleAndDeclarationBlock = (selector: string, declarations: Declaration[], element: HTMLStyleElement) => {
  const ruleIdx = element.sheet!.insertRule(Rule(selector));
  const rule = element.sheet!.cssRules.item(ruleIdx) as CSSStyleRule;
  declarations.forEach(({ property, value, isImportant }) =>
    rule.style.setProperty(property, value, getPriority(isImportant))
  );
  element.innerHTML += `${rule.cssText}\n`; // eslint-disable-line no-param-reassign
};

