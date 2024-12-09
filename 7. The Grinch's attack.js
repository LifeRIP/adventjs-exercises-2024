/* 
 * The grinch 👹 has passed through Santa Claus's
 * workshop! And what a mess he has made. He has
 * changed the order of some packages, so shipments
 * cannot be made.
 * 
 * Luckily, the elf Pheralb has detected the pattern
 * the grinch followed to jumble them. He has written
 * the rules that we must follow to reorder the
 * packages. The instructions are as follows:
 * - You will receive a string containing letters
 * and parentheses.
 * - Every time you find a pair of parentheses, you
 * need to reverse the content within them.
 * - If there are nested parentheses, solve the
 * innermost ones first.
 * - Return the resulting string with parentheses
 * removed, but with the content correctly reversed.

// Main Function
/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let restPart = '';
  let firstPart = '';
  let reversed = '';

  // Stop condition when there's no '(' in the string
  if (!packages.includes('(')) return packages;

  for (let i = 0; i < packages.length; i++) {
    // If there's a '(' call recursively with the rest
    // of the string store the first part too
    if (packages[i] == '(') {
      restPart = fixPackages(packages.substring(i + 1));
      firstPart = packages.substring(0, i);
      break;
    }
  }

  for (let i = 0; i < restPart.length; i++) {
    // Reverse the rest part until a ')' then join
    // firstPart with the reversed and the rest
    reversed += restPart[i];
    if (restPart[i] == ')') {
      reversed = reversed.substring(0, reversed.length - 1);
      return (
        firstPart +
        reversed.split('').reverse().join('') +
        restPart.substring(i + 1)
      );
    }
  }
}

// Tests
console.log(fixPackages('a(cb)de'));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages('a(bc(def)g)h'));
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'));
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'));
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
