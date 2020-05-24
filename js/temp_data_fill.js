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
        for (var j = 0; j < menu[i].tags.length; j++) {
            var gridRoot = document.getElementById('menu_grid_' + menu[i].tags[j]);
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
    var articles = [
        {
            id: 1,
            name: "Tracking the expanding ingredient list",
            author: "Charlotte Atchley",
            date: "05.22.2020",
            img: "img/news/Ingredient-HandlingAdobeStock_234612790.jpg",
            text: `As bakeries expand, it’s important that ingredients are traceable in compliance with the Food Safety Modernization Act.`
        },
        {
            id: 2,
            name: "Frito-Lay Snack Index Outlines Shifting Consumer Preferences",
            img: "img/news/salty-snacks_chips-1.jpg",
            author: "Isabelle Gustafson",
            date: "21.05.2020",
            text: `<p>Data shows consumers still largely prefer in-person shopping with most survey respondents (74%) saying that's where they look first for their favorite snacks.</p>
<p> issued the latest edition of its <a href="http://FritoLay.com/SnackIndex" target="_blank" rel="noopener noreferrer">U.S. Snack Index</a>, finding snacks remain essential to summer, but with consumers increasingly buying through new channels and eating snacks differently than ever before.</p>
<p>The majority of Americans (86%) anticipate their summers will be different compared to last year in light of the COVID-19 pandemic.&nbsp;From minimal travel and socially distanced gatherings, to when, where and how consumers shop for snacks — consumer behavior is likely to have a lasting impact on the months ahead.</p>
<p>“Since the onset of the pandemic — what we eat, where we buy, and how we engage with one another has shifted dramatically — and we’ve had to reorient our business to address this,” said Steven Williams, CEO, <a href="http://www.pepsico.com" target="_blank" rel="noopener noreferrer">PepsiCo</a> Foods North America. “Our ability to remain agile at the most critical time has enabled us to successfully meet consumer demand.”</p>
<p>Additional market trends and U.S. Snack Index highlights show:</p>
<p><strong>Summer gatherings evolve, but snacks are still a welcome guest.</strong></p>
<ul>
<li>Recent IRI data shows more than three-quarters (77%) of Americans expect to make changes to their Memorial Day plans in 2020 — including 82% noting they’ll stay at home.</li>
<li>As such, people are adapting how they snack to fit their changing plans, with 86% saying they will probably bring snacks to a small group gathering and more than one in three (34%) expecting to do more virtual hangouts with friends over the next few months.</li>
</ul>
<p><strong>As people continue looking for some level of normalcy, many are turning to snacking.</strong></p>
<ul>
<li>The Frito-Lay Snack Index found 85% of respondents say eating their favorite snack makes them feel normal.</li>
<li>The overwhelming majority (83%) said their favorite summer snacks remind them of good times and nearly half (48%) said eating their favorite snack makes them feel happy.</li>
</ul>
<p><strong>Although there are many differences this year — favorite snacks are a mainstay and are seeing more demand.</strong></p>
<ul>
<li>IRI retail sales data also shows salty snacks have been the No. 1 food item that’s contributed to sales growth at retailers since early March when consumers were shifting purchasing priorities amid stay-at-home orders for various states.</li>
<li>Frito-Lay has seen the same demand in its own sales data, as in recent weeks consumers have increased purchasing snack items like Lay’s (up 32%), Cheetos Popcorn (contributing to 65% of the ready-to-eat popcorn category) and Tostitos (up 42%).</li>
</ul>
<p><strong>Many are trying new snacks during the pandemic, with variety and convenience helping in how they make their snack choices.</strong></p>
<ul>
<li>U.S. Snack Index survey data also revealed many consumers are still trying new snacks (with 92% saying they plan to continue to eat them once the pandemic is over) and about one-fifth of respondents are developing new rituals around food.</li>
<li>The most willing groups to try a new snack in the “new normal” skew younger. Gen Z and millennials tend to be the most adventurous with nearly four in 10 (36%) saying they are likely to try a new snack option.</li>
<li>When choosing snacks to enjoy during the summer, Americans consider several important factors. The top deciding factor is convenience (86%), and staying true to favorites (83%), with only 22% of respondents taking budget into account.</li>
<li>And, when they find their favorite snacks, they are stocking up. Seventy-three percent of respondents said they are likely to buy more than usual in store.</li>
</ul>
<p><strong>Purchasing snacks online is on the rise, with younger and higher income Americans more likely to try eCommerce, including choosing to buy online from retailers via “Click and Collect” and pick up curbside.</strong></p>
<ul>
<li>IRI data shows snack sales through eCommerce sites are up 44% since March 1.</li>
<li>While consumers say in-store shopping during this time has been stressful, they’re still heading to the store. More than one-third (37%) of respondents feel stress shopping for groceries during the pandemic. However, U.S. Snack Index data showed consumers still largely prefer in-person shopping with most survey respondents (74%) saying that’s where they look first for their favorite snacks. IRI data also confirms the in-person shopping preference for snacks as in-store sales of salty and savory snacks each grew more than 15% in the last eight weeks.</li>
</ul>
<p><strong>Snack availability, demand lead to new direct-to-consumer channels.</strong></p>
<ul>
<li>The global pandemic has further highlighted the need to directly serve consumers, who have had difficulty locating their favorite snacks in this challenging environment. In fact, less than half (47%) say they can find all the snacks they want when shopping.</li>
<li>With this in mind, Frito-Lay recently launched <a href="http://Snacks.com" target="_blank" rel="noopener noreferrer">Snacks.com</a>, its first direct-to-consumer offering that allows consumers to purchase snack favorites and ship directly to their home.</li>
</ul>
<p>“While summer may be a very different experience for Americans this year, we expect Frito-Lay snacks will be there for consumers in new moments of enjoyment and togetherness,” Williams said. “Our continued focus has been creating smiles with our snacks, even during these challenging times.”</p>
<p>This poll was conducted by Morning Consult between May 1-4, 2020, among a national sample of 2,200 adults. The interviews were conducted online, and the data were weighted to approximate a target sample of Adults based on age, educational attainment, gender, race, and region. Results from the full survey have a margin of error of plus or minus two percentage points.</p>
`
        },
        {
            id: 3,
            name: "Global Partners Provides Family Meals to More Than 3,000 Frontline Employees",
            img: "img/news/global-partners-employee.jpg",
            author: "Isabelle Gustafson",
            date: "22.05.2020",
            text: `<p>Every employee currently working in Global’s gas stations and convenience stores across the region will receive a meal for a family of four.</p>
<p>Boston-based <a href="http://www.Globalp.com" target="_blank" rel="noopener noreferrer">Global Partners</a>, which operates&nbsp;nearly 300 company-owned convenience stores throughout the Northeast and Mid-Atlantic, including Alltown and Alltown Fresh, is thanking its more than 3,000 frontline employees with a handcrafted family meal.</p>
<p>“From behind the counter to behind the scenes, our dedicated team is keeping drivers fueled, homes warm and neighbors fed. We can’t do enough to thank our team. They have our sincere gratitude, and we hope these meals help support them as they support our communities,” said Eric Slifka, Global Partners’ CEO.</p>
<p>In early March, Global gave all retail associates a $2 per hour raise as well as monthly gift cards to help with their personal needs. The meal delivery program is part of an overall effort to show gratitude to members of the Global family on the front line.</p>
<p>Global’s chef Joshua Smith, who leads the fresh food concept behind their popular Alltown Fresh brand, quickly mobilized to make the meals and delivery happen. He is partnering with Joe Faro and his team at locally owned Tuscan Kitchen in Salem, N.H., to prepare the meals from scratch using locally sourced ingredients from Joyce Farms, Kitchen Garden Farm, Tempest Artisan Salumi and North Country Smokehouse. The meals will include handcrafted artisan Stagioni pasta plus grilled chicken and organic vegetables.</p>
<p>Every employee currently working in Global’s gas stations and convenience stores across the region will receive a meal for a family of four. For employees out on a leave of absence and those working in energy terminals, Global is mailing a provision box containing fresh, local ingredients with instructions and a video showing how to prepare the meal.</p>
<p>“I share my heart through food. There is nothing that makes me happier than to nourish and support others with a delicious, healthy meal. And what better comfort food than pasta,” said Smith. “We want our team to know they matter and recognize their service. They are doing so much every day to help our community, and this was something we could do to help them.”</p>
<p>Global Partners delivers the energy, goods and services that make life better. With an extensive network of terminals, gas stations and convenience stores, Global helps people heat their homes, operate their businesses and get where they’re going conveniently and quickly. Global has nearly 300 company-owned convenience stores throughout the Northeast and Mid-Atlantic – including homegrown brands Alltown and Alltown Fresh™ – as well as XtraMart, Honey Farms, Jiffy Mart, T-Bird, Mr. Mike’s, Fast Freddie’s, Convenience Plus and P&amp;H Truck Stop. Approximately 1.1 million automobile tanks are filled per day through this broad Global network. The company is a third- generation, family-founded business centered in the Northeast but with operations throughout the U.S. Global is committed to strategic growth and to supporting the communities where it works.</p>`
        },
        {
            id: 4,
            name: "New Herr’s snack features two flavors in one potato chip",
            date: "05.22.2020",
            author: "REBEKAH SCHOUTEN",
            img: "img/news/HerrsFlavorMixChips_Lead.jpg",
            text: `<p>NOTTINGHAM, PA. — Herr Foods Inc. is launching Herr’s Flavor Mix, a new snack concept featuring two potato chip flavors in one chip.</p>
<p>Each 9-oz bag of the limited-time-only offering contains a combination of two best-selling Herr’s potato chip flavors. Varieties include cheddar and sour cream and onion; barbecue and salt and vinegar; and red hot and honey barbecue.</p>
<p>“It’s a lot of fun to take two classic Herr’s flavors and put them together to create a great new flavor,” said Bob Clark, vice president of marketing for Herr Foods. “Loyal Herr’s fans and new flavor seekers alike will enjoy the unique, flavorful combinations that can be found only in our new Herr’s Flavor Mix.”&nbsp;</p>
<p>Herr’s Flavor Mix chips are gluten-free and available from May to September for a suggested retail price of $4.29.</p>
<p></p>`

        },
        {
            id: 5,
            name: "Add popular characters to your cakes and bakerys",
            date: "05.22.2020",
            author: "By Sam Danley",
            img: "img/news/22727.photo.2.jpg",
            text: `<p>Licensing concerns and difficulties can deter bakers from capitalising on the use of popular TV or film characters on their celebration cakes and baked goods. However, there are ways to satisfy customer demand for these characters and keep them coming back for more</p>
                    <p>TV and movie characters will always be popular for children, influencing consumer decisions in all aspects of our life. ‘Pester power’ is not a new phenomenon and we hear it every day, across all shopping situations – and perhaps even more so currently with our children at home and likely spending more time watching TV and online. As a parent, it can be repetitive and draining, but as a business, there is significant value in being able to tap into a world of super-heroes, talking animals and fairy tales.</p>
                    <p>When considering a child’s birthday cake purchase, research indicates that 45% of mums head to the supermarket to buy a ready-made celebration cake<sup>1</sup> and this is primarily because they want their child’s favourite character on the cake. Supermarkets are undoubtedly extremely well serviced with impressive licensed cakes. At least in ‘normal’ trading circumstances, without lengthy queues and consumer confidence in what they’ll find on-shelf, they get another tick in the box for convenience – this being cited as the next most important factor influencing the buying decision.&nbsp;</p>
                    <p>However, arguably more so now than ever, opportunity exists for smaller bakeries and food-to-go outlets to meet the demands of the significant number of consumers who are actively seeking more bespoke solutions, featuring licensed characters.</p>
                    <p>As a bakery or food-to-go outlet, consumers are looking for something in your counter that captures their eye at that moment. Instantly recognisable and emotive, popular characters will bring success in the ‘grab and go’ market too.&nbsp;</p>
                    <p>Consider, for example, selling themed cupcakes that tap into the enormous success of the recently released <em>Trolls World Tour</em> film, streaming to millions of living rooms across the nation. Or how about banana muffins to coincide with the launch of <em>Minions 2: The Rise of Gru</em>, or putting that iconic black and yellow emblem on a biscuit ahead of upcoming movie release, <em>The Batman</em>?</p>
                    <p>However, the licensing world is complex. As <em>British Baker</em> recently reported regarding the use of brand names such as Mars or Nutella, similar rules apply around reproducing a character image<sup>2</sup>. Intellectual property specialist Lucy Gray, Partner at Hay &amp; Kilner LLP confirms “It can be an infringement of copyright to copy and print character images without express permission from the brand and image owner. You can be pursued for copyright, and potentially trade mark, infringement for doing so, and disclaimer terminology does not protect the producer, or the customer.”</p>
                    <p><strong>So what’s the solution?</strong><br><img alt="Paw Patrol Photo Cake" height="206" src="https://bakeryinfo.co.uk/files/Promoted_content/BB_Feature_Paw_Patrol_Body_resized.jpg" style="float: left; margin: 5px;" width="320">Graham Broadbent runs a thriving tearoom in Gravesend. Baking on-site, he saw the potential of servicing the growing demand for character cakes and that, often, customers can’t get exactly what they want in a ready-made solution. “We were going through a stage of having lots of customers coming in and asking, in particular, for <em>PAW Patrol</em>. There might have been one in a supermarket, but they weren’t happy with it; it wasn’t big enough, it wasn’t one of our cakes – they love our cakes – and we weren’t able to offer something until PhotoCake came along.”</p>
                    <p>PhotoCake is a print-on-demand decorating tool which produces an exceptionally high quality Edible Image quickly and simply. Content is built in, so Graham has grown his business through being able to meet demand for a variety of occasions, trends and themes, including character cakes, without complex and time-consuming modelling.</p>
                    <p>The business model that Graham adopts is simple: keep stock of a selection of cakes in popular shapes, sizes and flavours, then customers choose their preferred cake construction, colours and theme for a set price and turnaround.</p>
                    <p>In this way, inventory challenges that come as popularity ebbs and flows can be mitigated with print on-demand. So, it is possible to introduce a character product into your business at a very low risk. Variety and uniqueness keep customers coming back for what’s new today.</p>
                    <p>PhotoCake content is officially licensed and approved by the copyright and trade mark owners to be used on cake decorations, so the system presents a great opportunity to those who seek to build their business and take a slice of the lucrative opportunities that licensed characters attract.</p>
                    <p>The PhotoCake system is now being rolled out in the UK following huge success in the US, where it services to more than 24,000 outlets via DecoPac Inc.</p>
                    <p>To find out more about PhotoCake, click <a href="https://www.culpitt.com/photocake" rel="nofollow">here</a>.</p>`
        },
        {
            id: 6,
            name: "Ferrero Names New Vice President of Trade Marketing and Category Management",
            date: "05.22.2020",
            author: "Isabelle Gustafson",
            img: "img/news/Ferrero-1.jpg",
            text: `<p>Michael Zacharias will lead trade marketing, category management and shopper marketing for Ferrero USA’s portfolio, which includes Nutella, Kinder, Tic Tac, Ferrero Rocher, Crunch, Baby Ruth and Butterfinger.</p>
<p><a href="https://www.ferreronorthamerica.com" target="_blank" rel="noopener noreferrer">Ferrero USA Inc.</a>, part of the global confectionery company <a href="https://www.ferrero.com/the-ferrero-group/a-family-story" target="_blank" rel="noopener noreferrer">Ferrero Group</a>, announced that Michael Zacharias has joined the organization as Vice President, Trade Marketing and Category Management, U.S.A.</p>
<p>In this new role, Zacharias will lead trade marketing, category management and shopper marketing for Ferrero’s portfolio, which includes Nutella, Kinder, Tic Tac, Ferrero Rocher, Crunch, Baby Ruth and Butterfinger.</p>
<p>Zacharias will report to James Klein, Ferrero Chief Customer Officer, Ferrero USA.</p>
<p>“Michael’s deep experience in the food and beverage industry, his extensive market management and his strategic planning experience expertise will be valuable assets to Ferrero and help drive the continued growth of our brand portfolio,” said Klein.</p>
<p>Zacharias joins Ferrero from American brewing company Anheuser-Busch, where he spent the entirety of his career. Most recently, he served as Vice President of Sales for the company’s northeast region. In his role, he was responsible for the full profit &amp; loss center of the Northeast Business Unit, including strategic planning, human resources, sales and marketing, business development and customer satisfaction.</p>
<p>Throughout his tenure with the company, Michael has held other corporate leadership positions, including stints as Vice President of Trade Marketing and Group Director of Revenue Management.</p>
<p>“I’m honored to join the Ferrero ranks and build upon an impressive legacy of product excellence and commercial integrity that has sustained the company for decades,” said Zacharias, who will be based in Parsippany, N.J.</p>
<p>Zacharias holds a Bachelor of Science degree in computer science from Valparaiso University and a Master of Business Administration degree from Washington University.</p>
<p>For over 70 years, Ferrero has been creating products loved by generations. The company is&nbsp;proud to be family-owned with 3,000 employees in seven offices and eight plants and warehouses in North America.</p>`
        }
    ];
    var root = document.getElementById('news_article');
    if (root) {
        var GETParams = getParams(window.location.href);
        var GetId;
        if (GETParams && GETParams.id) {
            GetId = parseInt(GETParams.id)
        }
        var gettedArticle = articles.find(function (element, index, array) {
            if (element.id === GetId) {
                return true;
            }
        });
        generateArticles(gettedArticle, root);
        var pageTitle = document.getElementById('breadcrumbs_last_element');
        pageTitle.innerText = gettedArticle.name.replace(/(.{26})..+/, "$1…");
    }
}

function generateArticles(article, root) {
    var result = `<div class="featured-pic">
                <img src="${article.img}" alt="${article.name}">
            </div>
            <div class="news_article__content_wrap">
                <div class="news_article__addinfo">
                    <div class="news_article__date">${article.date}</div>
                    <div class="news_article__author">By ${article.author}</div>
                </div>
                <div class="news_article__title"><h1>${article.name}</h1></div>
                <div class="news_article__content_text">${article.text}</div>
            </div>
            <div class="hr_wrap"><hr></div>
            <div class="news_article__footer">
                <ul class="news_article__footer_nav clearfix">`;
    if (article.id && article.id > 0) result = result + `<li><a href="${'articles.html?id=' + (article.id - 1)}">< Prev</a></li>`;
    if (article.id && article.id < 60) result = result +`<li><a href="${'articles.html?id=' + (article.id + 1)}">Next ></a></li>`;
    root.innerHTML = root.innerHTML + `</ul>
            </div>`;

    root.innerHTML = result;
}

function getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}

document.addEventListener("DOMContentLoaded", loadTempData);


