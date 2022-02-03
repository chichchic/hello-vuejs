// NOTE: https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html
export default function (choice, choicesLength) {
  if (choicesLength > 1 && choice > 1) {
    return 1;
  }
  return 0;
}
