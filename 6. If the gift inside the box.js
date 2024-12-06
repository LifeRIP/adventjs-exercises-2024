/*
 * We have already wrapped hundreds of presents 🎁…
 * but an elf forgot to check if the present,
 * represented by an asterisk *, is inside the box.
 *
 * The box has a present (*) and counts as "inside the
 * box" if:
 * - It is completely surrounded by # on the box's
 * edges.
 * - The * is not on the box's edges.
 *
 * Keep in mind that the * can be inside, outside,
 * or may not even be there. We must return true if
 * the * is inside the box and false otherwise.
 */

// Main Function
/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  // If the asterisk is above or below the box or not in it returns false
  if (
    box[0].includes('*') ||
    box[box.length - 1].includes('*') ||
    !box.join('').includes('*')
  )
    return false;
  for (let i in box) {
    // If the asterik is on the border the box returns false
    if (box[i][0] == '*' || box[i][box[i].length - 1] == '*') return false;
  }
  return true;
}

// Tests
console.log(inBox(['###', '#*#', '###'])); // ➞ true

console.log(inBox(['####', '#* #', '#  #', '####'])); // ➞ true

console.log(inBox(['#####', '#   #', '#  #*', '#####'])); // ➞ false

console.log(inBox(['#####', '#   #', '#   #', '#   #', '#####'])); // ➞ false
