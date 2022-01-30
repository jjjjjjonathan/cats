// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!data) {
      error = "can't find anything";
      done(error);
    }
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) done(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

// we try to get the return value
breedDetailsFromFile('asf', printOutCatBreed);

module.exports = breedDetailsFromFile;