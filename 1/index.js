const fs = require('fs');

const main = async () => {
  const rawData = fs.readFileSync('./input', 'utf-8');
  const data = rawData.split('\n');

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        const eye = parseInt(data[i]);
        const jay = parseInt(data[j]);
        const kay = parseInt(data[k]);

        if (eye + jay + kay === 2020) {
          console.log(eye * jay * kay);
          return;
        }
      }
    }
  }
};

main();
