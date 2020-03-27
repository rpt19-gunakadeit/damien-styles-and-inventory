const axios = require('axios');
 

describe("API test", () => {

  test("request for product data should return JSON data", () => {
    const baseURL = 'http://localhost:4000';
    const APIURL = '/api/products/';
    const sampleProductId = 67;
    var result = '';

    const p = Promise.resolve( axios.get( baseURL + APIURL + sampleProductId ) );
    return expect(p.id).resolves.toBe(sampleProductId);
    
  });
  

  test('properly test a Promise', () => {
    return somePromise.then(value => {
      expect(value).toBeTrue();
    })
  })


  // test('should reject to error', () => {
  //   const p = Promise.reject('error');
  //   return expect(p).rejects.toBe('error');
  // });





  //   test("request for product data should return JSON data", () => {
  //       const baseURL = 'http://localhost:4000';
  //       const APIURL = '/api/products/';
  //       const sampleProductId = 67;
  //       var result = '';
        
  //       axios.get( baseURL + APIURL + sampleProductId )
  //       .then(function (response) {
  //         try {
  //           result = JSON.parse(response);
  //           console.log('successful call');
  //           it('API should return the data for the specified product', () => {
  //             expect(result.id).toBe(sampleProductId);
  //           })
  //           it('Product data should contain an array of styles for this product', () => {
  //             expect(Array.isArray(result.styles)).toBe(true);
  //           })
  //           it('Style data should contain an array of inventory for each style', () => {
  //             expect(Array.isArray(result.styles[0].stock)).toBe(true);
  //           })
  //         }
  //         catch (e) { 
  //           result = 'Invalid JSON';
  //         }
  //         it('API should return valid JSON data', () => {
  //           expect(result).not.toBe('Invalid JSON');
  //         })
  //       })
  //       .catch(function (error) {
  //         it('API call should not return errors', () => {
  //           expect(error).toBe(null);
  //         })
  //       })

  //   })


  });