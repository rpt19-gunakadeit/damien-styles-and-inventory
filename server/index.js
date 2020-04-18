const express = require('express')
const app = express()
const port = 4000

app.listen(port, () => console.log(`Nike app listening on port ${port}!`))

// GET PRODUCT/STYLE INFO
// Sample call: http://localhost:4000/api/products/88
app.get('/api/products/:productId', ( req, res) => {
    res.send( sampleAPI);
});

app.use(express.static('./client/dist'));

// returns sample data 
var sampleAPI = {
    name: 'Nike Air VaporMax FlyKnit 3',
    type: 'Women’s Shoe',
    styles: 
    [{
      id: 123,
      code: 'AS-7863-98', 
      name: 'Phantom/Laser Fuchsia/Pink Rise/White',
      retail: 200, 
      sale: 186.97, 
      stock:
      [{ size: '5', count: 3 },{ size: '5.5', count: 3 },
      { size: '6', count: 3 },{ size: '6.5', count: 3 },
      { size: '7', count: 3 },{ size: '7.5', count: 3 },
      { size: '8', count: 3 },{ size: '8.5', count: 3 },
      { size: '9', count: 3 },{ size: '9.5', count: 3 },
      { size: '10', count: 3 },{ size: '10.5', count: 3 },
      { size: '11', count: 3 },{ size: '11.5', count: 3 },
      { size: '12', count: 3 }]
    },
    {
        style_code: 'AS-7863-99', 
        style_name: 'Black/White',
        retail_price: 190, 
        sale_price: 178.97, 
        stock:
        [{ size: '5', count: 3 },{ size: '5.5', count: 3 },
        { size: '6', count: 3 },{ size: '6.5', count: 3 },
        { size: '7', count: 3 },{ size: '7.5', count: 3 },
        { size: '8', count: 3 },{ size: '8.5', count: 3 },
        { size: '9', count: 3 },{ size: '9.5', count: 3 },
        { size: '10', count: 3 },{ size: '10.5', count: 3 },
        { size: '11', count: 3 },{ size: '11.5', count: 3 },
        { size: '12', count: 3 }]
      }]
};

