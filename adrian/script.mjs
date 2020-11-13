import { input } from "./input.mjs";

//1nd solution with recursion. In this case this solution is better because if can
//search for other nested paths.
function convertData(input) {
  const pathsArray = [];

  function pathFinder(array) {
    if (array === undefined) {
      return;
    }
    array.forEach((obj) => {
      let formatedString = obj.path.slice(1).replace(/\//g, "_");
      pathsArray.push({ params: { page: formatedString } });

      return pathFinder(obj.options);
    });
  }
  pathFinder(input);
  return pathsArray;
}
console.log(convertData(input));

//
//
//2nd solution without recursion (Not very good because just works for this particular)
//amount of nesting.
function convertData1(input) {
  const pathsArray = [];
  input.forEach((entry) => {
    pathsArray.push({ params: { page: entry.path } });
    if (entry.options) {
      for (const object of entry.options) {
        if (object.path) {
          pathsArray.push({ params: { page: object.path } });
        }
        if (object.options) {
          for (const obj of object.options) {
            pathsArray.push({ params: { page: obj.path } });
          }
        }
      }
    }

    return { params: { page: entry.path } };
  });

  return pathsArray;
}
