// NOTE: https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html
export default function (choice, choicesLength) {
  if (choice <= 2) {
    return Math.min(choice, choicesLength - 1);
  }
  const threshold = choice % 100;
  if (threshold >= 3 && threshold <= 10) {
    return Math.min(3, choicesLength - 1);
  }
  if (threshold >= 11 && threshold <= 99) {
    return Math.min(4, choicesLength - 1);
  }
  return Math.min(5, choicesLength - 1);
}
