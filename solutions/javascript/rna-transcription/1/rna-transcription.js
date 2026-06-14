//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const TRANSLATE = {
  'G':'C',
  'C':'G',
  'T':'A',
  'A':'U',
}

export const toRna = (dnaString) => {
  let temp = [...dnaString];
  let result = temp.map((char) => char = TRANSLATE[char]);
  return result.join("");
};
