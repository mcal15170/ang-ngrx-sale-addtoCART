var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var products = [
        {
            id: 1,
            title: "Samsung A50",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110,
            qty: 10,
            img: 'item1.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 2,
            title: "Sparx",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item2.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 3,
            title: "Bluetooth Headphones",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 10,
            img: 'item3.jpeg',
            active: true,
            category: 'HP&SP',
            cartQty:0
        },
        {
            id: 4,
            title: "Fastrack Watch",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
            qty: 10,
            img: 'item4.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 5,
            title: "American Tour Bag",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
            qty: 10,
            img: 'item5.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 6,
            title: "Redmi Note 7 Pro",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
            qty: 10,
            img: 'item6.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 7,
            title: "Ray-Ban",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item7.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 8,
            title: "Skullcandy",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 40,
            qty: 10,
            img: 'item8.jpeg',
            active: true,
            category: 'HP&SP',
            cartQty:0
        },
        {
            id: 9,
            title: "Casio watch",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 740,
            qty: 23,
            img: 'item9.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 10,
            title: "Cross,Woodland Belt",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 9,
            img: 'item10.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 11,
            title: "Woodland",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110,
            qty: 10,
            img: 'item11.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 12,
            title: "Headphones",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item12.jpeg',
            active: true,
            category: 'HP&SP',
            cartQty:0
        },
        {
            id: 13,
            title: "Premium Headphones",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 10,
            img: 'item13.jpeg',
            active: true,
            category: 'HP&SP',
            cartQty:0
        },
        {
            id: 14,
            title: "Nike",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
            qty: 10,
            img: 'item14.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 15,
            title: "Vivo Z1pro",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
            qty: 10,
            img: 'item15.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 16,
            title: "Headphones  Boult",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
            qty: 10,
            img: 'item16.jpeg',
            active: true,
            category: 'HP&SP',
            cartQty:0
        },
        {
            id: 17,
            title: "Realme 3",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item17.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 18,
            title: "Casual Shoes",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 40,
            qty: 10,
            img: 'item18.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 19,
            title: "Honor 7s",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 740,
            qty: 23,
            img: 'item19.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 20,
            title: "Mouse",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 9,
            img: 'item20.jpeg',
            active: true,
            category: 'MB',
            cartQty:0
        },
        {
            id: 21,
            title: "Woodlen Furniture",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110,
            qty: 10,
            img: 'item21.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 22,
            title: "Beds",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item22.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 23,
            title: "Recliners",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 10,
            img: 'item23.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 24,
            title: "Sofa",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
            qty: 10,
            img: 'item24.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 25,
            title: "Tables",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
            qty: 10,
            img: 'item25.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 26,
            title: "Springtec Mattresses",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
            qty: 10,
            img: 'item26.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        },
        {
            id: 27,
            title: "Puma",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            qty: 10,
            img: 'item27.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 28,
            title: "Fila & More",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 40,
            qty: 10,
            img: 'item28.jpeg',
            active: true,
            category: 'FW',
            cartQty:0
        },
        {
            id: 29,
            title: "Titan,Fastrack",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 740,
            qty: 23,
            img: 'item29.jpeg',
            active: true,
            category: 'FA',
            cartQty:0
        },
        {
            id: 30,
            title: "TV Units",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            qty: 9,
            img: 'item30.jpeg',
            active: true,
            category: 'FB',
            cartQty:0
        }
    ]
    res.send(products)
});

module.exports = router;