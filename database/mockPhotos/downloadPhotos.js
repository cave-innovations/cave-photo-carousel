const axios = require('axios');
const $ = require('jquery');

const getMockPhotos = () => {
  let counter = 1;
  const getHundred = () => {
    if (counter <= 100) {
      axios.get('https://loremflickr.com/json/1920/1080/house')
        .then((response) => {
        // console.log(typeof response.data.file)
          // fs.writeFile(`${__dirname}/photos/photo${counter}.txt`, response.data.file, (err) => {
          //   if (err) throw err;
          //   counter += 1;
          //   getHundred();
          // });
          $('#photos').append(`<img src="${response.data.file}">`);
          counter += 1;
          getHundred();
        });
    } else {
      console.log('100 pictures are now saved');
    }
  };
  getHundred();
};

getMockPhotos();
