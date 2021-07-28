import { fn } from "./functions.js";
//GENERATE DATA (8)
// fn()
//   .generateData(8)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//SEARCH BY NAME 'Plate #5'
// fn()
//   .searchByName("Plate #5")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//ASYNC AWAIT
async function getData(num) {
  try {
    const genData = await fn().generateData(num);
    console.log(genData);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Generating Data has been completed.");
  }
}
async function searchUser(name) {
  try {
    const searchResult = await fn().searchByName(name);
    console.log(searchResult);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Search by name has been completed.");
  }
}

getData(10);
searchUser("Plate #4");
