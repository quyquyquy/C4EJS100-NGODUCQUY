// Get all data
axios.get('https://sheetdb.io/api/v1/a585fxozolgss')
.then( response => {
    console.log(response.data);
});

//get name of sheet
// axios.get('https://sheetdb.io/api/v1/a585fxozolgss/name')
// .then( response => {
//     console.log(response.data);
// });

// axios.get('https://sheetdb.io/api/v1/a585fxozolgss/keys')
// .then( response => {
//     console.log(response.data);
// });

// axios.get('https://sheetdb.io/api/v1/a585fxozolgss/sheets')
// .then( response => {
//     console.log(response.data);
// });

// Search
// axios.get('https://sheetdb.io/api/v1/a585fxozolgss/search?Name=iphone 12&Brand=apple&color=black&casesensitive=true')
// .then( response => {
//     console.log(response.data);
// });

// axios.post('https://sheetdb.io/api/v1/a585fxozolgss',{
//     "data": {"Name": "Mouse", "Brand": "VietNam"}
// }).then( response => {
//     console.log(response.data);
// });

// axios.delete('https://sheetdb.io/api/v1/a585fxozolgss/Name/Mouse')
// .then( response => {
//     console.log(response.data);
// });

// axios.patch('https://sheetdb.io/api/v1/a585fxozolgss/Name/Mouse',{
//      "data": {"Name": "Mouse", "Brand": "VietNam"}
//  }).then( response => {
//     console.log(response.data);
//  });