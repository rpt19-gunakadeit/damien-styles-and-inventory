const fs = require('fs')

var sqlInit = `
DROP DATABASE IF EXISTS nike_inventory;
CREATE DATABASE nike_inventory;
USE nike_inventory;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  nameURL varchar(100) NOT NULL,
  type varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE styles (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  product_id int NOT NULL,
  code varchar(20) NOT NULL,
  price_retail DECIMAL(13,2) NOT NULL,
  price_sale DECIMAL(13,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE inventory (
  id int NOT NULL AUTO_INCREMENT,
  size varchar(20) NOT NULL,
  style_id int NOT NULL,
  stock int DEFAULT 0,
  PRIMARY KEY (id)
);

`

// ARRAYS THAT FEED THE RANDOMNESS

// 100 product names
var products = ["Blazer Mid '77 Vintage","SB Nyjah Free","Air Max Axis","Air Max Oketo","Air Max 200","Air Tailwind 79","Air Max Plus","Air Max 90 Essential","Lunar Force 1 Duckboot","M2K Tekno","Air Ghost Racer","Air Max 95","Internationalist","SB Stefan Janoski Max","Air Max 180","Air Max 97 SE Reflective","Air Force 1 High","Shox Gravity","Air Force 1 Travis Scott","SF Air Force 1 High","Shox TL","P-6000","Flyknit Trainer","Air Max Speed Turf","Air Max2 Light","SB Portmore II Ultralight","SB Delta Force Vulc","Air Huarache Drift","React Vapor Street Flyknit","Air Max 97 x Undefeated","Air Penny V","Air Max 270 Flyknit","Dualtone Racer","Roshe Two","Air Huarache Gripp","Flystepper 2K3 PRM","Air Shake Ndestrukt","Blazer Low","Duel Racer","Roshe Two Flyknit V2","Lunar Force 1 Duckboot Low","SB Check Solarsoft","React Element 55 SE","SB Blazer Mid","GTS 16 TXT","Cortez Basic Leather","Mayfly Woven","SB Dunk High Pro","Air Vapormax 2019 SE","SB Air Max Bruin Vapor","SB Zoom Bruin","Daybreak","Dunk Ultra","ACG Dog Mountain","Hakata","Acmi","SB Air Zoom Blazer Low GT","SB Zoom Stefan Janoski AC","LunarCharge Essential","Zoom Talaria Mid Flyknit","Dualtone Racer Woven","CK Racer","Roshe Two Flyknit","SB Bruin Premium SE","Current Slip-On","Vortak","Tanjun Racer","Classic Cortez Premium","Mayfly Lite SE","M2K Tekno SP","React Element 87","Tanjun Chukka","Air Footscape NM","Blazer Low Suede","FL-Rue","Lupinek Flyknit Low","Air Heights","Lunar Force 1 18","LunarCharge Premium","Daybreak SP","Cortez Basic Nylon","Zoom 2K","Tanjun Premium","SB Solarsoft Portmore II","Roshe One SE","Joyride CC3 Setter","LeBron XI NSW Lifestyle","Roshe LD 1000","Pocket Fly DM","React Element 55 Premium","SB Dunk High Pro QS","React Presto","Tennis Classic Ultra Flyknit","Air Max Tailwind IV","Dualtone Racer SE","MD Runner 2","Shox R4","Ebernon Low","EXP-X14","Viale"];
// var products = ["Blazer Mid '77 Vintage","SB Nyjah Free"];

// some prices
var price = [60, 70, 80, 80, 90, 90, 100, 100, 100, 110, 110, 110, 120, 120, 120, 130, 130, 130, 140, 140, 140, 150, 150, 150, 160, 160, 160, 170, 170, 170, 180, 180, 180, 190, 190, 190, 200, 200, 200, 210, 210, 210, 220, 220, 230, 230, 240, 240, 250]

// product types
var types = ["Men's Shoe", "Women's Shoe"];

// a bunch of random style descriptors
var styles = ["Team Red/Black/Bright Crimson","Platinum Tint/Black/Pure Platinum/Kumqu","White/Metallic Silver/Bright Crimson/Metallic Silver","Black/Game Royal","Black/Black/White/Black","Platinum Tint/Black/University Red","Pacific Blue/Mystic Red/Black/Pale Ivory","Geode Teal/Light British Tan/Kumquat/Pale Ivory","Black/Metallic Silver/Wolf Grey/Black","White/Platinum Tint/White","Black/Court Purple/Black/Jade Horizon","Light Bone/Metallic Gold/University Red/Summit White","Green Strike/Black/Watermelon","White/Metallic Silver/Light Aqua/Black","Platinum Tint/Black/University Red","Summit White/Solar","Red/White/Light Blue Fury","Blue/Photo Blue/White/Black","Royal Pulse/Light Aqua/Ember Glow/Oil Grey","BleachedCoral/White-AphidGreen","White/Anthracite/Black","White/Metallic Silver/Max Orange/White","Black/Metallic Hematite/Max Orange/Black","Black/Amarillo/University Red/Black","Black/Black","White/Neon Yellow/Dark Grey/Atom Red","Black/Dark Grey/White/Black","Black/Racer Blue/Wolf Grey/Hyper Jade","Orange Peel/Pure Platinum/White/Aphid Green","Habanero Red/White/Metallic Silver/Black","Midnight Navy/Wolf Grey/White/Black","Bordeaux/Sail/Hyper Jade/Bordeaux","Black/Mineral Teal/Black/Photo Blue","Pacific Blue/Deep Royal Blue/White/White","White/Metallic Silver/University Red","Team Gold/Black/White/University Red","Habanero Red/Oil Grey","Black/Bordeaux/University Gold/Anthracite","Thunder Grey/Black/Wolf Grey/Hot Punch","Racer Blue/Obsidian/White","Plum Eclipse/Pumice/Burgundy Ash/University Blue"]

// style adjustment pricing 
var priceAdjust = [-20, 20, -10, -10, -10, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 20, 20]

var sizes = {};
sizes["Men's Shoe"] = ['6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','12.5','13','14','15'];
sizes["Women's Shoe"]  = ['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12'];

var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var inventory = [0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]

// a more flexible randomizer that takes arrays and numbers
var rnd = n => Array.isArray(n) ? n[ rnd(n.length) - 1] : Math.floor( Math.random() * n ) + 1

// generate a random style code ( "AB-1234-styleId" )
var getStyleCode = id => rnd(chars) + rnd(chars) + (rnd(9000) + 1000) + "-" + id;

// from the base price of a product, returns an array containing plausible base & sale prices for a style 
var getStylePrice = base => {
  var adjust = base + rnd( priceAdjust ); // set the adjusted price for this style
  return rnd(2) == 2 
          ? [adjust, adjust] // 50% chance of a sale
          : [adjust, adjust - rnd( adjust / 4 ) - .03] // up to 25% off; sale prices end in .97
}

// for each of the 100 products, give it a range of style options
var generateSeedScript = (min, max) => {
  var styleId = 0, productList = '\n-- products\n', styleList = '\n-- styles\n', inventoryList = '\n-- inventory\n';

  products.forEach( (product, id) => {
    var productURI = encodeURIComponent( product.toLowerCase().split( ' ' ).join( '-' ) );
    productList += `INSERT into products (name, nameURL) VALUES ("${product}", "${productURI}");\n`;
    var stylesForThisProduct = [],
        numberOfStyles = rnd( max - min ) + min + 1,
        basePrice = rnd(price),
        type = rnd(types);
    for (var j = 0; j <= numberOfStyles; j++) {
      var randomstyle = rnd(styles);
      if ( !stylesForThisProduct.includes(randomstyle) ) { // skip duplicates
        stylesForThisProduct.push(randomstyle); // save to temp to avoid dupes
        stylePrices = getStylePrice(basePrice); // calculate adjusted & sale pricing
        styleList += 'INSERT into styles (name, product_id, code, price_retail, price_sale) ';
        styleList += `VALUES ("${randomstyle}", ${id + 1}, "${getStyleCode(++styleId)}", ${stylePrices[0]}, ${stylePrices[1]});\n`;
        sizes[type].forEach ( size => {
          inventoryList += `INSERT into inventory (size, style_id, stock)  VALUES ("${size}", ${styleId}, ${rnd(inventory)});\n`;
        })
      }
    }
  })
  return sqlInit + productList + styleList + inventoryList;
}


fs.writeFileSync( 'seedScript.sql', generateSeedScript( 2, 10 ))

// console.log( generateSeedScript( 2, 10 ) ); // produces products with between 2 and 10 style options


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < seedScript.sql
*/