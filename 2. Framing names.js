/*
 * Santa Claus 🎅 wants to frame the names of the good
 * children to decorate his workshop 🖼️, but the frame
 * must follow specific rules. Your task is to help
 * the elves generate this magical frame.
 *
 * Rules:
 * - Given an array of names, you must create a
 * rectangular frame that contains all of them.
 * - Each name must be on a line, aligned to the left.
 * - The frame is built with * and has a border one
 * line thick.
 * - The width of the frame automatically adapts to
 * the longest name plus a margin of 1 space on each
 * side.
 */

// Main Function
function createFrame(names) {
  let out = `${horizontalBorder(largestStringLength(names))}\n`;
  out = out.concat(concatAndFormatStrings(names));
  out = out.concat(`${horizontalBorder(largestStringLength(names))}`);
  return out;

  // Aux Functions
  function concatAndFormatStrings(arr) {
    let offset = '';
    return arr
      .map((str) => {
        offset = largestStringLength(arr) - str.length;
        return '* '.concat(str, rightOffsetSpaces(offset), ' *\n');
      })
      .join('');
  }

  function rightOffsetSpaces(num) {
    return ' '.repeat(num);
  }

  function largestStringLength(arr) {
    const lengths = arr.map((str) => str.length);
    return Math.max(...lengths);
  }

  function horizontalBorder(num) {
    return '****'.concat('*'.repeat(num));
  }
}

// Tests
createFrame(['midu', 'madeval', 'educalvolpz']);

// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Expected result:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));

// Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
