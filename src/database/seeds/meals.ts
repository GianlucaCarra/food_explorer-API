import { Knex } from "knex";

const meals = [
    {
        name: "Kebab",
        desc: "Delicious grilled meat served with fresh vegetables.",
        imageURL: "https://minervafoods.com/wp-content/uploads/2022/12/kebab-3.jpg",
        publicID: "KEB",
        price: 8.50,
        type: "meal"
    },
    {
        name: "Pad Thai",
        desc: "Stir-fried rice noodles with shrimp and peanuts.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyOIAA9BA7UNRFUyF_LJWGjH6eRypsPckyg&s",
        publicID: "PAD",
        price: 9.00,
        type: "meal"
    },
    {
        name: "Tacos al Pastor",
        desc: "Spicy pork tacos with pineapple.",
        imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg",
        publicID: "TAC",
        price: 7.50,
        type: "meal"
    },
    {
        name: "Risotto alla Milanese",
        desc: "Creamy saffron risotto from Milan.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OQB46rOBk5f3t0eJs57Qfh618VkvPvyCsQ&s",
        publicID: "RIS",
        price: 10.00,
        type: "meal"
    },
    {
        name: "Biryani",
        desc: "Fragrant rice dish with marinated meat and spices.",
        imageURL: "https://static.itdg.com.br/images/1200-675/908beb537a204529e3fc9c016973d21f/354804-original.jpg",
        publicID: "BIR",
        price: 12.00,
        type: "meal"
    },
    {
        name: "Falafel Wrap",
        desc: "Crispy falafel served in pita bread.",
        imageURL: "https://cookingwithayeh.com/wp-content/uploads/2024/03/Falafel-Wrap-SQ-1.jpg",
        publicID: "FAL",
        price: 6.50,
        type: "meal"
    },
    {
        name: "Goulash",
        desc: "Hearty stew of beef and vegetables.",
        imageURL: "https://minervafoods.com/wp-content/uploads/2022/12/goulash_img_0045_foto.jpg",
        publicID: "GOU",
        price: 11.00,
        type: "meal"
    },
    {
        name: "Chili con Carne",
        desc: "Spicy stew of ground beef and beans.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHxNwsm3lg4f5lv2qaqizZYpb-ZsoUTqcog&s",
        publicID: "CHI",
        price: 9.50,
        type: "meal"
    },
    {
        name: "Lasagna",
        desc: "Layered pasta dish with meat and cheese.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuN3AiqhHJdkT9OuaJKC_ZtLGxI_wxdFYPg&s",
        publicID: "LAS",
        price: 10.50,
        type: "meal"
    },
    {
        name: "Moussaka",
        desc: "Baked dish of eggplant and ground meat.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYxexR5-9RMVv_os3kzyf7Um9-mB7NSt6TQ&s",
        publicID: "MOUS",
        price: 10.00,
        type: "meal"
    },
    {
        name: "Tiramisu",
        desc: "Classic Italian coffee-flavored dessert.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnulTZG9c7sN24AcLcv_KeDkTlwihqjuM_A&s",
        publicID: "TIR",
        price: 5.50,
        type: "dessert"
    },
    {
        name: "Cheesecake",
        desc: "Creamy dessert with a graham cracker crust.",
        imageURL: "https://static.itdg.com.br/images/360-240/722816207b46644920ab0c65a7faab72/shutterstock-2202992931.jpg",
        publicID: "CHE",
        price: 6.00,
        type: "dessert"
    },
    {
        name: "Crème Brûlée",
        desc: "Rich custard topped with caramelized sugar.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSsxVvyH3MBNAfglbltg69zO8tyayumWjMw&s",
        publicID: "CRE",
        price: 7.00,
        type: "dessert"
    },
    {
        name: "Chocolate Mousse",
        desc: "Light and fluffy chocolate dessert.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-RL4bkqcfRWaCzcUaQuXy8jhXyC0z8h4Iw&s",
        publicID: "MOUS",
        price: 6.50,
        type: "dessert"
    },
    {
        name: "Panna Cotta",
        desc: "Italian cooked cream dessert.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYIrZzsSCWCV3PN97n_1z4Nk1R5UQst-HkA&s",
        publicID: "PAN",
        price: 6.00,
        type: "dessert"
    },
    {
        name: "Margarita",
        desc: "Classic cocktail with tequila and lime.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNh_9lux1Gr6BtS5NEGsd3oIJxDJXtGPa6WA&s",
        publicID: "MAR",
        price: 8.00,
        type: "drink"
    },
    {
        name: "Apple Pie",
        desc: "Traditional dessert made with apples and spices.",
        imageURL: "https://static01.nyt.com/images/2023/11/09/multimedia/09piesrex3-apple/09piesrex4-lemon-cqtk-square640.jpg",
        publicID: "APP",
        price: 5.00,
        type: "dessert"
    },
    {
        name: "Brownies",
        desc: "Fudgy chocolate squares with a crispy top.",
        imageURL: "https://static.itdg.com.br/images/360-240/9e621f4e0b36756979fda3f87f8279a5/340593-original.jpg",
        publicID: "BRO",
        price: 4.50,
        type: "dessert"
    },


    {
        name: "Mojito",
        desc: "Refreshing cocktail with mint and lime.",
        imageURL: "https://i.panelinha.com.br/i1/228-q-6121-mojito.webp",
        publicID: "MOJ",
        price: 7.00,
        type: "drink"
    },
    {
        name: "Pina Colada",
        desc: "Tropical cocktail with rum and pineapple.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1V9Bdk9b211Ij-Kvm_3B2-BEXW1TeGjx1-Q&s",
        publicID: "PIN",
        price: 7.50,
        type: "drink"
    },
    {
        name: "Lemonade",
        desc: "Refreshing drink made with lemon juice and sugar.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Oe0cfizikfWR-AscJvvxLF6yzne56XiiWQ&s",
        publicID: "LEM",
        price: 2.50,
        type: "drink"
    },
    {
        name: "Iced Tea",
        desc: "Chilled tea, perfect for hot days.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvP-CwuLrcooQcJzNj3XihsPr0_k22BSG4kQ&s",
        publicID: "ITEA",
        price: 3.50,
        type: "drink"
    },
    {
        name: "Smoothie",
        desc: "Blended fruit drink, refreshing and healthy.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHArZFmC9vryb8PDEzB_M-FjvU8kiPdsG7A&s",
        publicID: "SMO",
        price: 5.50,
        type: "drink"
    },
    {
        name: "Hot Chocolate",
        desc: "Rich chocolate drink, perfect for winter.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdcO_vSFWM8UGZXN70gi-Ai5UR12ZqISnQg&s",
        publicID: "HOT",
        price: 4.50,
        type: "drink"
    },
    {
        name: "Cappuccino",
        desc: "Rich coffee topped with frothy milk.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRM2K2P6AxpBi242WNHHfxVF7kbxfdVA0LSg&s",
        publicID: "CAP",
        price: 4.00,
        type: "drink"
    },
    {
        name: "Chicken Curry",
        desc: "Spicy curry with tender chicken.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt_ptBFInUH3fMEUvHTRhK7YFYTPHhfiagw&s",
        publicID: "CUR",
        price: 9.00,
        type: "meal"
    },
    {
        name: "Fettuccine Alfredo",
        desc: "Creamy pasta with cheese and butter.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSul2t4BwMDhbuAfVBEJkm3i5-uKtudyAGzTA&s",
        publicID: "FET",
        price: 8.50,
        type: "meal"
    },
    {
        name: "Sushi",
        desc: "Japanese dish with vinegared rice and fresh fish.",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg",
        publicID: "SUS",
        price: 15.00,
        type: "meal"
    },
];


const ingredients = [
    // Ingredients for Kebab
    { meal_id: 0, name: "Pita Bread" },
    { meal_id: 0, name: "Lamb Meat" },
    { meal_id: 0, name: "Fresh Vegetables" },
    { meal_id: 0, name: "Yogurt Sauce" },

    // Ingredients for Pad Thai
    { meal_id: 1, name: "Rice Noodles" },
    { meal_id: 1, name: "Shrimp" },
    { meal_id: 1, name: "Peanuts" },
    { meal_id: 1, name: "Soy Sauce" },
    { meal_id: 1, name: "Egg" },
    
    // Ingredients for Tacos al Pastor
    { meal_id: 2, name: "Tortillas" },
    { meal_id: 2, name: "Pork Meat" },
    { meal_id: 2, name: "Pineapple" },
    { meal_id: 2, name: "Cilantro" },
    { meal_id: 2, name: "Onion" },
    
    // Ingredients for Risotto alla Milanese
    { meal_id: 3, name: "Arborio Rice" },
    { meal_id: 3, name: "Chicken Broth" },
    { meal_id: 3, name: "Saffron" },
    { meal_id: 3, name: "Parmesan Cheese" },
    { meal_id: 3, name: "Butter" },
    
    // Ingredients for Biryani
    { meal_id: 4, name: "Basmati Rice" },
    { meal_id: 4, name: "Marinated Meat" },
    { meal_id: 4, name: "Spices" },
    { meal_id: 4, name: "Herbs" },
    { meal_id: 4, name: "Yogurt" },
    
    // Ingredients for Falafel Wrap
    { meal_id: 5, name: "Falafel Balls" },
    { meal_id: 5, name: "Pita Bread" },
    { meal_id: 5, name: "Tahini Sauce" },
    { meal_id: 5, name: "Lettuce" },
    { meal_id: 5, name: "Tomato" },

    // Ingredients for Goulash
    { meal_id: 6, name: "Beef" },
    { meal_id: 6, name: "Potatoes" },
    { meal_id: 6, name: "Onion" },
    { meal_id: 6, name: "Paprika" },
    { meal_id: 6, name: "Carrots" },

    // Ingredients for Chili con Carne
    { meal_id: 7, name: "Ground Beef" },
    { meal_id: 7, name: "Beans" },
    { meal_id: 7, name: "Bell Pepper" },
    { meal_id: 7, name: "Onion" },
    { meal_id: 7, name: "Chili Powder" },

    // Ingredients for Lasagna
    { meal_id: 8, name: "Lasagna Sheets" },
    { meal_id: 8, name: "Ground Beef" },
    { meal_id: 8, name: "Cheese" },
    { meal_id: 8, name: "Tomato Sauce" },
    { meal_id: 8, name: "Egg" },
    
    // Ingredients for Moussaka
    { meal_id: 9, name: "Eggplant" },
    { meal_id: 9, name: "Ground Beef" },
    { meal_id: 9, name: "Bechamel Sauce" },
    { meal_id: 9, name: "Potatoes" },
    
    // Ingredients for Tiramisu
    { meal_id: 10, name: "Ladyfingers" },
    { meal_id: 10, name: "Mascarpone" },
    { meal_id: 10, name: "Coffee" },
    { meal_id: 10, name: "Cocoa Powder" },
    { meal_id: 10, name: "Sugar" },

    // Ingredients for Cheesecake
    { meal_id: 11, name: "Cream Cheese" },
    { meal_id: 11, name: "Sugar" },
    { meal_id: 11, name: "Graham Crackers" },
    { meal_id: 11, name: "Eggs" },
    
    // Ingredients for Crème Brûlée
    { meal_id: 12, name: "Heavy Cream" },
    { meal_id: 12, name: "Sugar" },
    { meal_id: 12, name: "Eggs" },
    { meal_id: 12, name: "Vanilla" },

    // Ingredients for Chocolate Mousse
    { meal_id: 13, name: "Dark Chocolate" },
    { meal_id: 13, name: "Heavy Cream" },
    { meal_id: 13, name: "Eggs" },
    { meal_id: 13, name: "Sugar" },
    
    // Ingredients for Panna Cotta
    { meal_id: 14, name: "Heavy Cream" },
    { meal_id: 14, name: "Sugar" },
    { meal_id: 14, name: "Gelatin" },
    { meal_id: 14, name: "Vanilla" },
    
    // Ingredients for Baklava
    { meal_id: 15, name: "Phyllo Dough" },
    { meal_id: 15, name: "Nuts" },
    { meal_id: 15, name: "Honey" },
    { meal_id: 15, name: "Cinnamon" },

    // Ingredients for Apple Pie
    { meal_id: 16, name: "Pie Crust" },
    { meal_id: 16, name: "Apples" },
    { meal_id: 16, name: "Sugar" },
    { meal_id: 16, name: "Cinnamon" },
    
    // Ingredients for Mango Sticky Rice
    { meal_id: 17, name: "Sticky Rice" },
    { meal_id: 17, name: "Coconut Milk" },
    { meal_id: 17, name: "Mango" },

    // Ingredients for Brownies
    { meal_id: 18, name: "Chocolate" },
    { meal_id: 18, name: "Butter" },
    { meal_id: 18, name: "Sugar" },
    { meal_id: 18, name: "Eggs" },

    // Ingredients for Lemon Tart
    { meal_id: 19, name: "Pastry" },
    { meal_id: 19, name: "Lemon Juice" },
    { meal_id: 19, name: "Sugar" },
    { meal_id: 19, name: "Meringue" },

    // Ingredients for Mojito
    { meal_id: 20, name: "Rum" },
    { meal_id: 20, name: "Mint" },
    { meal_id: 20, name: "Lime" },
    { meal_id: 20, name: "Sugar" },
    { meal_id: 20, name: "Sparkling Water" },

    // Ingredients for Pina Colada
    { meal_id: 21, name: "Rum" },
    { meal_id: 21, name: "Coconut Cream" },
    { meal_id: 21, name: "Pineapple Juice" },
    { meal_id: 21, name: "Fresh Pineapple" },

    // Ingredients for Lemonade
    { meal_id: 22, name: "Lemon Juice" },
    { meal_id: 22, name: "Sugar" },
    { meal_id: 22, name: "Water" },

    // Ingredients for Iced Coffee
    { meal_id: 23, name: "Coffee" },
    { meal_id: 23, name: "Ice" },
    { meal_id: 23, name: "Milk" },

    // Ingredients for Smoothie
    { meal_id: 24, name: "Mixed Fruits" },
    { meal_id: 24, name: "Yogurt" },
    { meal_id: 24, name: "Milk" },
    { meal_id: 24, name: "Ice" },

    // Ingredients for Green Tea
    { meal_id: 25, name: "Green Tea Leaves" },
    { meal_id: 25, name: "Hot Water" },

    // Ingredients for Cappuccino
    { meal_id: 26, name: "Espresso" },
    { meal_id: 26, name: "Steamed Milk" },
    { meal_id: 26, name: "Milk Foam" },

    // Ingredients for Chicken Curry
    { meal_id: 27, name: "Chicken" },
    { meal_id: 27, name: "Curry Powder" },
    { meal_id: 27, name: "Coconut Milk" },
    { meal_id: 27, name: "Onion" },
    
    // Ingredients for Fettuccine Alfredo
    { meal_id: 28, name: "Fettuccine" },
    { meal_id: 28, name: "Cream" },
    { meal_id: 28, name: "Parmesan Cheese" },
    { meal_id: 28, name: "Butter" },

    // Ingredients for Sushi
    { meal_id: 29, name: "Sushi Rice" },
    { meal_id: 29, name: "Nori" },
    { meal_id: 29, name: "Fresh Fish" },
    { meal_id: 29, name: "Soy Sauce" },
    { meal_id: 29, name: "Wasabi" }
];


export async function seed(knex: Knex): Promise<void> {
    await knex("meals").del();

    await knex("ingredients").del();

    await knex("meals").insert(meals);

    await knex("ingredients").insert(ingredients);
};
