/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = function(conceptList) {
  //set up a place for the result..
  let result = "";
  //if we recieved an empty list, bail out, and return an empty string..
  if (conceptList === []) {
    return "";
  }
  // .. otherwise, stick a comma and a space between each word..
  for (const concept of conceptList) {
    result += concept + ", ";
  }
  // clean up the end of the string and remove teh last ", "
  result = result.substring(0,result.length - 2);
  return result;
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log(`Today I learned about ${concepts}.`);