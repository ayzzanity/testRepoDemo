//module
function fn() {
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
  }

  function searchByUser(name) {
    return new Promise((resolve, reject) => {
      for (const [index, val] of data.entries()) {
        if (name === val.username) {
          resolve(val);
        } else if (name !== val.username && index === data.length - 1) {
          reject("ERROR: Name not found.");
        }
      }
    });
  }

  return { fetchData, searchByUser };
}

//main
let data = [];

(async () => {
  try {
    await fn().fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Fetch data has been completed.");
  }

  try {
    const result = await fn().searchByUser("Samantha");
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Search has been completed.");
  }
})();
