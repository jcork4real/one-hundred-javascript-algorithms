//Simple search

const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      document.write("Found Nemo!");
    }
  }
  let t1 = performance.now();
  document.write(`<br><br>Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(nemo);
