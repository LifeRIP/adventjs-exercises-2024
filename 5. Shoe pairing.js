/*
 * Santa Claus's elves 🧝🧝‍♂️ have found a bunch of
 * mismatched magic boots in the workshop. Each boot
 * is described by two values:
 * - type indicates if it's a left boot (I) or a right
 * boot (R).
 * - size indicates the size of the boot.
 *
 * Your task is to help the elves pair all the boots
 * of the same size having a left and a right one. To
 * do this, you should return a list of the available
 * boots after pairing them.
 *
 * Note: You can have more than one pair of boots of
 * the same size!
 */

// Main Function
/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  let tempShoes = [...shoes];
  let out = [];
  for (let i in shoes) {
    if (shoes[i].type == 'I') {
      //console.log(i, shoes[i].type);
      tempShoes.splice(i, 1);
      //console.log(tempShoes);
      for (let j in tempShoes) {
        if (tempShoes[j].type == 'R' && tempShoes[j].size == shoes[i].size) {
          out.push(tempShoes.splice(j, 1)[0].size);
        }
      }
    }
  }
  return out;
}

// Tests
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
];

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 },
];

console.log(organizeShoes(shoes3));
// []
