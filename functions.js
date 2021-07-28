const sampleObject = { name: "Plate", length: 1, width: 1, color: "Gray" };
export let data = [];

export function fn() {
  function generateData(num) {
    return new Promise((resolve, reject) => {
      if (Number.isInteger(num)) {
        for (let x = 0; x < num; x++) {
          let obj = {
            name: `${sampleObject.name} #${x}`,
            length: `${randomNum()}cm`,
            width: `${randomNum()}cm`,
            color: `${sampleObject.color} #${randomNum()}`,
          };
          data = [...data, obj];
        }
        resolve(data);
      } else {
        reject("ERROR: Please Enter a Number");
      }
    });
  }

  function searchByName(name) {
    return new Promise((resolve, reject) => {
      for (const [index, val] of data.entries()) {
        if (name === val.name) {
          resolve(val);
        } else if (name !== val.name && index === data.length - 1) {
          reject("ERROR: Name not found.");
        }
      }
    });
  }

  function randomNum() {
    return Math.floor(Math.random() * 9) + 1;
  }
  return { generateData, searchByName };
}
