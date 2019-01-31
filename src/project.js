/*
 * This project is intended to show a 'Pokedex', a set of Pokemon and
 * their stats. Here the name 'pokemon' is used in the singular sense,
 * and 'pokedex' an array of them.
 *
 * The file 'index.js' is a React app that queries a JSON datafile and
 * displays the data, but it is our job to transform it into the format
 * required by the React app, as done by the exported 'process' function
 * below.
 *
 * The format of the original JSON can be seen here:
 * https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json
 *
 * If you get stuck, there are some hints as to what is intended for
 * each step at the bottom of this file. See if you can solve this
 * without them by looking back at the earlier part of the course!
 *
 * Note, try using Chrome's debugging console (F12) if it's not clear
 * what's wrong.
 */

/* Process an array of Pokemon specified by 'pokedex' */
export const process = pokedex => {
  return undefined;
};

// Exercise 1:
// Write a function that takes an array, and limits it to the first 8 items
// We'll use this in a moment to help us during development.

// Exercise 2:
// Change the process function above to return the pokedex array
// You should now see many 'missing' items shown. This is because the React app doesn't
// understand the JSON data format, but it knows there 800+ Pokemon hiding there!

// Exercise 3:
// Change the function 'process' above to return a limited pokedex
// This avoid having to render all the Pokemon cards while we're developing

// Exercise 4:
// Write a function to convert each Pokemon item from the JSON supplied by the pokedex.
// For now, just return an empty object (we will fill the required data later)
// but remember to update the 'process' function to call it

// Exercise 5:
// Have a look at each pokemon by printing the item: console.log(obj)
// Note how you can explore the data from CodeSandbox or Chrome's debug console
// Only add this when needed, it can dramatically slow down your app!

// Exercise 6:
// Write a function that takes a number, e.g. 42 and turns it into a 3-digit code
// string, e.g. '042'. Use this to define a property in your convert function 'code'
// which converts the JSON 'id' number property. You should now have pictures!
// Hint: Remember that the input number is not a string.

// Exercise 7:
// Each Pokemon have one or more types, e.g. ['Grass', 'Bug']
// Create a function that takes an array of types and returns a single type
// (e.g. first) in lower case.
// Add a property to the 'convert' function called 'kind' that uses this function with
// the JSON 'type' array. You should now have colours based on the Pokemon type!

// Exercise 8:
// Let's find out the names of those Pokemon. Change your convert function to expose
// two properties 'name_en' and 'name_jp' from the ones in the JSON - note the names
// in the original JSON are not at the top level

// Exercise 9:
// Finally populate a new 'stats' property from what is contained in the original JSON.
// The target format is in a 'stats' property:
/*
  stats: {
    health: ?,
    attack: ?,
    defense: ?,
    speed: ?
  }
*/

// Exercise 10a:
// Now you have you're completed convert method, temporarily remove the limit
// to have a look at all those Pokemon!
// For the remainder of this exercise, perhaps keep a limit of 50 - but remember
// to apply the limit last so we can query all our Pokemon

// Exercise 10b:
// We currently have the data ordered by the external JSON (by code). That's not very
// useful if we're hunting Zubats. Define a sort function that takes a Pokedex and sorts
// the Pokemon by name. Update the process function to call it.
// Note 1: Do not modify the original array!
// Note 2: As ever with expensive functions like sort, so it as late in the chain as possible.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Hint: You do not need to create your own compare function (String has one)

// Exercise 11:
// Let's hunt for some interesting Pokemon!
// Allow filtering the array in the 'process' function from other predicate function.
// Just return 'true' for now, but make it's applied after our conversion so we only
// need to deal with the format we defined not the external one.

// Exercise 12:
// Show all the "dark" kind of Pokemon by changing your new predicate function.

// Exercise 13:
// Let's see what other 'kinds' are available. Define a query function in the 'process'
// method that allows us to query the data after conversion, but before filtering and
// limiting. See if you can show the distinct set of 'kind' (using a collection type
// we've not really covered - Google it!)

// Exercise 14:
// Plugin a few interesting kinds into your predicate function to have a look at them

// Exercise 15:
// Look at the 'flying' Pokemon... Most are missing! (e.g. the Pidgey)
// The reason is that we only extract the first 'type' to use as a 'kind' that is
// driving the card colour. To fix this, copy the type array using the convert function.
// I'm going to refer as 'types' as it's an array - the original name was confusing

// Exercise 16:
// Now update your filter function to find all flying Pokemon by using the new 'types'
// property. Don't see anything? Remember the original type names were mixed case

// Exercise 17:
// Update your 'query' to print out all the distinct types
// (a simple map() to extract the types won't work here as it's an array)

// Exercise 18:
// We'd now like to find the Pokemon shown with the greatest stat.
// We can't use 'find' for this because we need to compare it against all others.
// Change the 'selected' function below to return the fastest Pokemon (a flyer).
// Note: Adjust 'predicate' and limit functions to compute for all Pokemon.

// export const selected = pokedex => undefined
export const selected = pokedex => {
  return undefined;
};

//
// HINTS
// =====

// Exercise 2: slice
// Exercise 4: object literal, map
// Exercise 6: toString, padStart
// Exercise 7: array indexing, toLowerCase
// Exercise 10b: sort with comparator (using localeCompare), spread copy
// Exercise 11: filter, function values
// Exercise 13: map, uniqueness provided by the JS 'Set'
// Exercise 16: includes
// Exercise 17: flatMap
// Exercise 18: reduce (or sort by and get the last, but that's very inefficient)
