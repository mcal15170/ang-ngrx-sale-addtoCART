var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var products = [
    {
      id: 1,
      title: "Samsung A50",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 21100,
      qty: 10,
      img: "item1.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "samsung" },
        { name: "ram", value: "4gb" },
        { name: "network_type", value: "2g" },
        { name: "os", value: "android" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 2,
      title: "Sparx",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item2.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "sparx" },
        { name: "color", value: "silver" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 3,
      title: "Bluetooth Headphones",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      qty: 10,
      img: "item3.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "sony" },
        { name: "color", value: "black" },
        { name: "wired_type", value: "wireless" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 4,
      title: "Fastrack Watch",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      qty: 10,
      img: "item4.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "round" },
        { name: "color", value: "red" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 5,
      title: "NG7982PP03J Digital Watch - For Men",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1600,
      qty: 10,
      img: "item5.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "round" },
        { name: "color", value: "black" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 6,
      title: "Redmi Note 7 Pro",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 11190,
      qty: 10,
      img: "item6.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "redmi" },
        { name: "ram", value: "4gb" },
        { name: "network_type", value: "4g" },
        { name: "os", value: "android" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 7,
      title: "Ray-Ban",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item7.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "squre" },
        { name: "color", value: "silver" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 8,
      title: "Skullcandy",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 40,
      qty: 10,
      img: "item8.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "sony" },
        { name: "color", value: "blue" },
        { name: "wired_type", value: "wireless" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 9,
      title: "Casio watch",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1740,
      qty: 23,
      img: "item9.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "ovel" },
        { name: "color", value: "silver" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 10,
      title: "Cross,Woodland Belt",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      qty: 9,
      img: "item10.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "diesel" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "ovel" },
        { name: "color", value: "black" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 11,
      title: "Woodland",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      qty: 10,
      img: "item11.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "woodland" },
        { name: "color", value: "brown" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 12,
      title: "Headphones",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item12.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "jbl" },
        { name: "color", value: "black" },
        { name: "wired_type", value: "wireless" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 13,
      title: "Premium Headphones",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      qty: 10,
      img: "item13.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "jbl" },
        { name: "color", value: "white" },
        { name: "wired_type", value: "wireless" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 14,
      title: "Nike",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      qty: 10,
      img: "item14.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "nike" },
        { name: "color", value: "black" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 15,
      title: "Vivo Z1pro",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      qty: 10,
      img: "item15.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "vivo" },
        { name: "ram", value: "3gb" },
        { name: "network_type", value: "4g" },
        { name: "os", value: "ios" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 16,
      title: "Headphones  Boult",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      qty: 10,
      img: "item16.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "philips" },
        { name: "color", value: "white" },
        { name: "wired_type", value: "wired" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 17,
      title: "Realme 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 8080,
      qty: 10,
      img: "item17.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "realme" },
        { name: "ram", value: "6gb" },
        { name: "network_type", value: "3g" },
        { name: "os", value: "android" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 18,
      title: "Casual Shoes",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 40,
      qty: 10,
      img: "item18.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "nike" },
        { name: "color", value: "blue" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 19,
      title: "Honor 7s",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90740,
      qty: 23,
      img: "item19.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "honer" },
        { name: "ram", value: "6gb" },
        { name: "network_type", value: "4g" },
        { name: "os", value: "ios" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 20,
      title: "Mouse",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12120,
      qty: 9,
      img: "item20.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "samsung" },
        { name: "ram", value: "3gb" },
        { name: "network_type", value: "3g" },
        { name: "os", value: "android" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 21,
      title: "Woodlen Furniture",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      qty: 10,
      img: "item21.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "bharat" },
        { name: "material", value: "bamboo" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 22,
      title: "Beds",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item22.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "bharat" },
        { name: "material", value: "bamboo" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 23,
      title: "Recliners",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      qty: 10,
      img: "item23.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "hometown" },
        { name: "material", value: "leather" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 24,
      title: "Sofa",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      qty: 10,
      img: "item24.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "nilkamal" },
        { name: "material", value: "leather" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 25,
      title: "Tables",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      qty: 10,
      img: "item25.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "hometown" },
        { name: "material", value: "solidwood" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 26,
      title: "Springtec Mattresses",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      qty: 10,
      img: "item26.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "nilkamal" },
        { name: "material", value: "leather" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 27,
      title: "Puma",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item27.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "puma" },
        { name: "color", value: "brown" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 28,
      title: "Fila & More",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 40,
      qty: 10,
      img: "item28.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "puma" },
        { name: "color", value: "blue" },
        { name: "ideal_for", value: "male" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 29,
      title: "Titan,Fastrack",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 740,
      qty: 23,
      img: "item29.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "m",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "diesel" },
        { name: "ideal_for", value: "male" },
        { name: "shape", value: "round" },
        { name: "color", value: "silver" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 30,
      title: "TV Units",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      qty: 9,
      img: "item30.jpeg",
      active: true,
      category: "FB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "nilkamal" },
        { name: "material", value: "solidwood" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 31,
      title: "Dynore 1000 ml Cooking Oil Dispenser",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 220,
      qty: 19,
      img: "item31.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "dawan" },
        { name: "color", value: "pink" },
        { name: "material", value: "plastic" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 32,
      title: "Nightstar Kitchen Rack Stainless Steel Kitchen Rack",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 450,
      qty: 22,
      img: "item32.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "dawan" },
        { name: "color", value: "blue" },
        { name: "material", value: "nonstick" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 33,
      title: "Floraware Fridge Space Saver Organizer Slide Storage Ra",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1120,
      qty: 23,
      img: "item33.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "kumka" },
        { name: "color", value: "silver" },
        { name: "material", value: "still" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 34,
      title: "Cronus 360° Revolving Spice Box Masala Box Spice Rack M",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 679,
      qty: 12,
      img: "item34.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "kumka" },
        { name: "color", value: "pink" },
        { name: "material", value: "plastic" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 35,
      title: "Bluewhale Condiment Set",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 420,
      qty: 34,
      img: "item35.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "kumka" },
        { name: "color", value: "blue" },
        { name: "material", value: "plastic" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 36,
      title: "Ganesh Masher Plastic Masher",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 920,
      qty: 21,
      img: "item36.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "kumka" },
        { name: "color", value: "silver" },
        { name: "material", value: "still" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 37,
      title: "Chefstar 3 in 1 Large Sink Set Dish Rack Plastic Kitche",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 653,
      qty: 11,
      img: "item37.jpeg",
      active: true,
      category: "KA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "dawan" },
        { name: "color", value: "blue" },
        { name: "material", value: "nonstick" },
        { name: "offer", value: "special price" }
      ]
    },
    {
      id: 38,
      title: "Sony XB10 10 W Portable Bluetooth  Speaker",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1200,
      qty: 23,
      img: "item38.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "sony" },
        { name: "color", value: "blue" },
        { name: "wired_type", value: "both" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 39,
      title: "Philips BT40 Portable Bluetooth Speaker",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 920,
      qty: 29,
      img: "item39.jpeg",
      active: true,
      category: "HP&SP",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "philips" },
        { name: "color", value: "black" },
        { name: "wired_type", value: "wired" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 40,
      title: "Realme 3i (Diamond Black, 32 GB)",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1200,
      qty: 9,
      img: "item40.jpeg",
      active: true,
      category: "MB",
      cartQty: 0,
      cartPrice: 0,
      productFor: "all",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "realme" },
        { name: "ram", value: "4gb" },
        { name: "network_type", value: "4g" },
        { name: "os", value: "ios" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 41,
      title: "Crocs",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 345,
      qty: 9,
      img: "item41.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "nike" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "female" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 42,
      title: "Women Black Flats",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 890,
      qty: 19,
      img: "item42.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "woodland" },
        { name: "color", value: "brown" },
        { name: "ideal_for", value: "female" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 43,
      title: "Bata",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 234,
      qty: 23,
      img: "item43.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "sparx" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "female" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 44,
      title: "Puma",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 453,
      qty: 34,
      img: "item44.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "puma" },
        { name: "color", value: "brown" },
        { name: "ideal_for", value: "female" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 45,
      title: "Pooja",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 788,
      qty: 32,
      img: "item45.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "puma" },
        { name: "color", value: "brown" },
        { name: "ideal_for", value: "female" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 46,
      title: "AMNBANGLE-910 BLACK DIAL ANALOG WATCH FOR WOMEN Analog ...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 670,
      qty: 23,
      img: "item46.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "skmei" },
        { name: "ideal_for", value: "female" },
        { name: "shape", value: "round" },
        { name: "color", value: "blue" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 47,
      title: "LADIES_704 Silver Dial Enchant Analog Watch For Women A...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 888,
      qty: 3,
      img: "item47.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "skmei" },
        { name: "ideal_for", value: "femal" },
        { name: "shape", value: "round" },
        { name: "color", value: "black" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 48,
      title: "AMNBANGLE-905 RED ANALOG WATCH FOR WOMEN Analog Watch  ...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 888,
      qty: 32,
      img: "item48.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "female" },
        { name: "shape", value: "ovel" },
        { name: "color", value: "red" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 49,
      title: "New Collection And Sport Look Best Deal Fast Selling An...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 230,
      qty: 72,
      img: "item49.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "female" },
        { name: "shape", value: "squre" },
        { name: "color", value: "blue" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 50,
      title: "Formal Collection Black Women Fast Selling Girls Analog...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 658,
      qty: 12,
      img: "item50.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "female" },
        { name: "shape", value: "squre" },
        { name: "color", value: "pink" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 51,
      title: "New Stylish Best Deal And Fast Selling11 Analog Watch  ...",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 388,
      qty: 22,
      img: "item51.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "f",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "female" },
        { name: "shape", value: "squre" },
        { name: "color", value: "blue" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 52,
      title: "Girls Slip on Casual Boots",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 450,
      qty: 10,
      img: "item52.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "smartots" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 53,
      title: "Begetter The Inceptioner",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 980,
      qty: 10,
      img: "item53.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "smartots" },
        { name: "color", value: "blue" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "exchange offer" }
      ]
    },
    {
      id: 54,
      title: "SMARTOTS",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 867,
      qty: 10,
      img: "item54.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: false,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "smartots" },
        { name: "color", value: "blue" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 55,
      title: "Begetter The Inceptioner",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 234,
      qty: 10,
      img: "item55.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "neobaby" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 56,
      title: "NEOBABY",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 340,
      qty: 10,
      img: "item56.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: false,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "neobaby" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "buy more save more" }
      ]
    },
    {
      id: 57,
      title: "NEOBABY",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 860,
      qty: 10,
      img: "item57.jpeg",
      active: true,
      category: "FW",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "neobaby" },
        { name: "color", value: "red" },
        { name: "ideal_for", value: "child" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 58,
      title: "Kemei",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 499,
      qty: 10,
      img: "item58.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "squre" },
        { name: "color", value: "blue" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 59,
      title: "Verni Rtail",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 280,
      qty: 10,
      img: "item59.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "timex" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "round" },
        { name: "color", value: "green" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 60,
      title: "Nikola",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      qty: 10,
      img: "item60.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "squre" },
        { name: "color", value: "red" },
        { name: "offer", value: "no cost EMI" }
      ]
    },
    {
      id: 61,
      title: "RedDiamand",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 480,
      qty: 10,
      img: "item61.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "round" },
        { name: "color", value: "pink" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 62,
      title: "ANAGH",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 809,
      qty: 10,
      img: "item62.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: true,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "round" },
        { name: "color", value: "pink" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 63,
      title: "peter india",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 980,
      qty: 10,
      img: "item63.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: false,
      diliveyCharge: true,
      tags: [
        { name: "brand", value: "diesel" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "round" },
        { name: "color", value: "pink" },
        { name: "offer", value: "bank offer" }
      ]
    },
    {
      id: 64,
      title: "Mint Green M2 Led Silicon Belt",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1460,
      qty: 91,
      img: "item64.jpeg",
      active: true,
      category: "FA",
      cartQty: 0,
      cartPrice: 0,
      productFor: "c",
      discount: false,
      diliveyCharge: false,
      tags: [
        { name: "brand", value: "fastrack" },
        { name: "ideal_for", value: "child" },
        { name: "shape", value: "squre" },
        { name: "color", value: "green" },
        { name: "offer", value: "no cost EMI" }
      ]
    }
  ];
  res.send(products);
});

module.exports = router;
