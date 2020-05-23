
function loadTempData() {
    /* MENU */
    var menu = [
        {
            img: 'img/menu/small/menu-pic.jpg',
            name: 'Breakfast Complete',
            tags: ['All', 'Breakfast'],
            price: '$120.00',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            img: 'img/menu/small/menu-pic2.jpg',
            name: 'Pizza Capricciosa',
            tags: ['All', 'Dinner'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic3.jpg',
            name: 'Vegetarian Breakfast',
            tags: ['All', 'Breakfast'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic4.jpg',
            name: 'Fried Potatoes Garlic',
            tags: ['All', 'Breakfast'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic5.jpg',
            name: 'Fresh Brasserie Pasta',
            tags: ['All', 'Lunch'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic6.jpg',
            name: 'Smoky Veggie Chilli',
            tags: ['All', 'Lunch'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic7.jpg',
            name: 'French Toast',
            tags: ['All', 'Lunch'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic8.jpg',
            name: 'Lobster Roll',
            tags: ['All', 'Dinner'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        },
        {
            img: 'img/menu/small/menu-pic9.jpg',
            name: 'Steak Sandwich',
            tags: ['All', 'Dessert'],
            price: '$20.00',
            description: `Lorem ipsum dolor sit amet, sectetuera con adipiscing elitan.`,
        }
    ];

    for (var i = 0; i < menu.length; i++) {
        for (var j = 0; j < menu[i].tags.length ; j++) {
            var gridRoot = document.getElementById('menu_grid_'+menu[i].tags[j]);
            if (!gridRoot) break;
            var element = document.createElement('div');
            element.classList.add('om_grid__item');
            gridRoot.appendChild(element);
            var article = document.createElement('article');
            article.classList.add('outmenu_item');
            element.appendChild(article);
            var imageWrap = document.createElement('div');
            imageWrap.classList.add('outmenu_item__image');
            article.appendChild(imageWrap);
            var image = document.createElement('img');
            image.src = menu[i].img;
            imageWrap.appendChild(image);
            var textWrap = document.createElement('div');
            textWrap.classList.add('outmenu_item__text_el');
            article.appendChild(textWrap);
            var header = document.createElement('header');
            textWrap.appendChild(header);
            var headerP2 = document.createElement('h2');
            headerP2.innerText = menu[i].name;
            var headerPrice = document.createElement('p');
            headerPrice.innerText = menu[i].price;
            header.appendChild(headerP2);
            header.appendChild(headerPrice);
            var description = document.createElement('p');
            description.classList.add('outmenu_item__description');
            description.innerText = menu[i].description;
            textWrap.appendChild(description);
        }
    }
    /* ARTICLES */
}
document.addEventListener("DOMContentLoaded", loadTempData);


