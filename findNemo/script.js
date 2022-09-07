//Simple search

const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      document.write("Found Nemo!");
    }
  }
}

findNemo(nemo);
