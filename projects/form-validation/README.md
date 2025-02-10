#README - Form Validation project

These files are from the tasks and assignments at [Mozailla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation).

2025.02.06 ama

## fruit-start.html

This example uses the "required" attribute, with some CSS, to indicate that a reponse is required.
The "pattern" attribute was also added to limit the responses accepted (either banana, Banana, cherry, or Cherry).

The "pattern" attribute can include many inclusions or exclusions, depending on the restrictions (Regexps, or Regular expressions).

- a - Matches one character that is a (not b, not aa, and so on).
- abc - Matches a, followed by b, followed by c.
- ab?c - Matches a, optionally follwed by a single b, followed by c. (ac or abc)
- ab*c - Matches a, optionally follwed by any number of b's, followed by c. (ac, abc, abbbbbc, and so on).
- a|b - Matches one character that is a or b.
- abc|xyz - Matches exactly abc or exactly xyz (but not abcxyz or a or y, and so on).

## fruit-length.html

Here we took the same form and added the restrictions to the number of characters that can be entered, as well as adding a quantity, with a restriction of a response between 1-10.

## full-example.html

This form uses HTML for required responses, number response restriction, pattern restriction, and email validation.

