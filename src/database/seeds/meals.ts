import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("ingredients").del();
    await knex("meals").del();

    const mealsToInsert = [
        { name: "Burger", desc: "A juicy beef burger with cheese and veggies.", imageURL: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg", publicID: "BUR", price: 8.50, type: "meal" },
        { name: "Pizza Margherita", desc: "Classic Margherita pizza with fresh mozzarella and basil.", imageURL: "https://www.donguilherme.com.br/assets/userfiles/archives/6405dff0d4d8d.jpg", publicID: "PIZ", price: 10.00, type: "meal" },
        { name: "Sushi", desc: "Fresh sushi with fish and rice.", imageURL: "https://cdn.prod.website-files.com/5edf7b44b7a4f6000913a233/669906a1a1d568ab50da617b_Nomes-de-Sushi_.webp", publicID: "SUS", price: 12.00, type: "meal" },
        { name: "Caesar Salad", desc: "A crisp Caesar salad with parmesan and croutons.", imageURL: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/whatsapp-image-2023-02-28-at-01-53-47-(1)-1iyhprrq5e9tc.jpeg", publicID: "SAL", price: 7.00, type: "meal" },
        { name: "Chicken Alfredo", desc: "Pasta with creamy Alfredo sauce and grilled chicken.", imageURL: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-V3.jpg", publicID: "ALF", price: 9.50, type: "meal" },
        { name: "Steak", desc: "Grilled steak served with mashed potatoes.", imageURL: "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg", publicID: "STK", price: 15.00, type: "meal" },
        { name: "Fish Tacos", desc: "Crispy fish tacos with salsa and slaw.", imageURL: "https://www.howsweeteats.com/wp-content/uploads/2023/08/grilled-fish-tacos-20.jpg", publicID: "TAC", price: 8.00, type: "meal" },
        { name: "Pad Thai", desc: "Stir-fried rice noodles with shrimp and peanuts.", imageURL: "https://www.onceuponachef.com/images/2016/03/pad-thai.jpg", publicID: "PAD", price: 9.00, type: "meal" },
        { name: "Beef Stroganoff", desc: "Tender beef in a creamy sauce.", imageURL: "https://saltedmint.com/wp-content/uploads/2024/01/Beef-stroganoff-with-rice-1.jpg", publicID: "STR", price: 11.00, type: "meal" },
        { name: "Grilled Salmon", desc: "Grilled salmon with steamed vegetables.", imageURL: "https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2.jpg", publicID: "SAL", price: 13.00, type: "meal" },
        { name: "Chocolate Cake", desc: "Rich chocolate cake with a creamy frosting.", imageURL: "https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_4087-er-new1.jpg", publicID: "CAK", price: 6.00, type: "dessert" },
        { name: "Cheesecake", desc: "Creamy cheesecake with a graham cracker crust.", imageURL: "https://naminhapanela.com/wp-content/uploads/2023/05/Cheesecake-de-baunilha-2-720x405.jpg", publicID: "CHE", price: 6.50, type: "dessert" },
        { name: "Tiramisu", desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers.", imageURL: "https://static.itdg.com.br/images/1200-675/4667c6b17f2c045e601de0d092c2d318/339498-original-1-.jpg", publicID: "TIR", price: 7.00, type: "dessert" },
        { name: "Apple Pie", desc: "Warm apple pie with a flaky crust.", imageURL: "https://herbsandflour.com/wp-content/uploads/2020/10/Classic-Apple-Pie.jpg", publicID: "APP", price: 5.50, type: "dessert" },
        { name: "Panna Cotta", desc: "Italian creamy dessert topped with berries.", imageURL: "https://www.allrecipes.com/thmb/NlP50cO2BjJdN4uGvl5JhW0Rx2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72567-Panna-cotta-ddmfs-4x3-14ae724a2a8e4ca3a79c5e27b2b61994.jpg", publicID: "PAN", price: 6.50, type: "dessert" },
        { name: "Brownie", desc: "Chocolate brownie with a soft center.", imageURL: "https://kitchen335co.com/wp-content/uploads/2023/03/fudgy-brownies-thumbnail-1-of-1.jpg", publicID: "BRO", price: 5.00, type: "dessert" },
        { name: "Ice Cream Sundae", desc: "Vanilla ice cream topped with chocolate sauce and nuts.", imageURL: "https://dinnerthendessert.com/wp-content/uploads/2021/02/Ice-Cream-Sundae-2.jpg", publicID: "SUN", price: 4.50, type: "dessert" },
        { name: "Lemon Tart", desc: "Zesty lemon tart with a crisp pastry base.", imageURL: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-198460_11-a8d172b.jpg?quality=90&webp=true&resize=440,400", publicID: "TAR", price: 5.50, type: "dessert" },
        { name: "Crème Brûlée", desc: "Creamy dessert with a caramelized sugar topping.", imageURL: "https://www.estadao.com.br/resizer/v2/MTDFNUJOIVAN5BMKB4SPSHOPEM.JPG?quality=80&auth=19dc75d19ff7ed155e7c46775f40928e4f084ebb5f99a882fd3a2f22c4400e43&width=720&height=503&smart=true", publicID: "CRE", price: 7.00, type: "dessert" },
        { name: "Fruit Salad", desc: "Fresh fruit salad with a light syrup.", imageURL: "https://www.chelseasmessyapron.com/wp-content/uploads/2014/04/FRUIT-SALAD-CHELSEASMESSYAPRON-1200-3.jpeg", publicID: "FRU", price: 4.00, type: "dessert" },    
        { name: "Mojito", desc: "A refreshing cocktail with lime and mint.", imageURL: "https://i.panelinha.com.br/i1/228-q-6121-mojito.webp", publicID: "MOJ", price: 6.00, type: "drink" },
        { name: "Lemonade", desc: "Freshly squeezed lemonade.", imageURL: "https://mojo.generalmills.com/api/public/content/S3v1myzakEC_8MtBvag4gw_webp_base.webp?v=7cce746c&t=e724eca7b3c24a8aaa6e089ed9e611fd", publicID: "LEM", price: 3.50, type: "drink" },
        { name: "Iced Coffee", desc: "Chilled coffee served over ice.", imageURL: "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6-683x1024.jpg", publicID: "ICE", price: 4.00, type: "drink" },
        { name: "Green Tea", desc: "Hot green tea.", imageURL: "https://images.healthshots.com/healthshots/en/uploads/2023/10/30172251/best-green-tea.jpg", publicID: "GRE", price: 3.00, type: "drink" },
        { name: "Coca-Cola", desc: "Classic Coca-Cola.", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coca_cola_world_cup_2002.jpg/800px-Coca_cola_world_cup_2002.jpg", publicID: "COK", price: 2.50, type: "drink" },   
        { name: "Mango Smoothie", desc: "Smoothie made with fresh mango.", imageURL: "https://lovingitvegan.com/wp-content/uploads/2016/10/Mango-Smoothie-2.jpg", publicID: "MAN", price: 5.00, type: "drink" },
        { name: "Orange Juice", desc: "Freshly squeezed orange juice.", imageURL: "https://healthmylifestyle.com/wp-content/uploads/2023/01/Fresh-squeezed-orange-juice.jpg", publicID: "ORA", price: 4.00, type: "drink" },
        { name: "Espresso", desc: "Strong and rich espresso.", imageURL: "https://conscienciacafe.com.br/wp-content/uploads/2023/09/cafe-espresso-maquina.jpg", publicID: "ESP", price: 3.00, type: "drink" },
        { name: "Hot Chocolate", desc: "Warm hot chocolate with whipped cream.", imageURL: "https://www.foodandwine.com/thmb/wn0viyKCsvqfHHrx7zyDDAFUcog=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg", publicID: "HOT", price: 3.50, type: "drink" },
        { name: "Milkshake", desc: "Creamy milkshake with flavored syrup.", imageURL: "https://blog.biglar.com.br/wp-content/uploads/2022/08/iStock-1308045723.jpeg", publicID: "MIL", price: 5.00, type: "drink" },
    ];

    const insertedMeals = await knex("meals").insert(mealsToInsert).returning("id");

    const mealMap: { [key: string]: number } = mealsToInsert.reduce((acc, meal, index) => {
        acc[meal.name] = insertedMeals[index].id;
        return acc;
    }, {} as { [key: string]: number });

    const ingredients = [
        { meal_id: mealMap["Burger"], name: "Beef Patty" },
        { meal_id: mealMap["Burger"], name: "Cheese" },
        { meal_id: mealMap["Burger"], name: "Lettuce" },
        { meal_id: mealMap["Burger"], name: "Tomato" },
        { meal_id: mealMap["Burger"], name: "Mayonnaise" },

        { meal_id: mealMap["Pizza Margherita"], name: "Pizza Dough" },
        { meal_id: mealMap["Pizza Margherita"], name: "Tomato Sauce" },
        { meal_id: mealMap["Pizza Margherita"], name: "Mozzarella Cheese" },
        { meal_id: mealMap["Pizza Margherita"], name: "Basil" },

        { meal_id: mealMap["Sushi"], name: "Sushi Rice" },
        { meal_id: mealMap["Sushi"], name: "Fish" },
        { meal_id: mealMap["Sushi"], name: "Nori Seaweed" },

        { meal_id: mealMap["Caesar Salad"], name: "Romaine Lettuce" },
        { meal_id: mealMap["Caesar Salad"], name: "Parmesan Cheese" },
        { meal_id: mealMap["Caesar Salad"], name: "Croutons" },
        { meal_id: mealMap["Caesar Salad"], name: "Caesar Dressing" },

        { meal_id: mealMap["Chicken Alfredo"], name: "Pasta" },
        { meal_id: mealMap["Chicken Alfredo"], name: "Alfredo Sauce" },
        { meal_id: mealMap["Chicken Alfredo"], name: "Grilled Chicken" },

        { meal_id: mealMap["Steak"], name: "Beef Steak" },
        { meal_id: mealMap["Steak"], name: "Mashed Potatoes" },

        { meal_id: mealMap["Fish Tacos"], name: "Tortillas" },
        { meal_id: mealMap["Fish Tacos"], name: "Crispy Fish" },
        { meal_id: mealMap["Fish Tacos"], name: "Salsa" },
        { meal_id: mealMap["Fish Tacos"], name: "Cabbage Slaw" },

        { meal_id: mealMap["Pad Thai"], name: "Rice Noodles" },
        { meal_id: mealMap["Pad Thai"], name: "Shrimp" },
        { meal_id: mealMap["Pad Thai"], name: "Peanuts" },
        { meal_id: mealMap["Pad Thai"], name: "Lime" },

        { meal_id: mealMap["Beef Stroganoff"], name: "Beef" },
        { meal_id: mealMap["Beef Stroganoff"], name: "Mushrooms" },
        { meal_id: mealMap["Beef Stroganoff"], name: "Cream Sauce" },

        { meal_id: mealMap["Grilled Salmon"], name: "Salmon" },
        { meal_id: mealMap["Grilled Salmon"], name: "Steamed Vegetables" },

        { meal_id: mealMap["Chocolate Cake"], name: "Chocolate" },
        { meal_id: mealMap["Chocolate Cake"], name: "Flour" },
        { meal_id: mealMap["Chocolate Cake"], name: "Sugar" },
        { meal_id: mealMap["Chocolate Cake"], name: "Eggs" },

        { meal_id: mealMap["Cheesecake"], name: "Cream Cheese" },
        { meal_id: mealMap["Cheesecake"], name: "Graham Cracker Crust" },

        { meal_id: mealMap["Tiramisu"], name: "Mascarpone Cheese" },
        { meal_id: mealMap["Tiramisu"], name: "Espresso" },
        { meal_id: mealMap["Tiramisu"], name: "Ladyfingers" },
        { meal_id: mealMap["Tiramisu"], name: "Cocoa Powder" },

        { meal_id: mealMap["Apple Pie"], name: "Apples" },
        { meal_id: mealMap["Apple Pie"], name: "Pie Crust" },
        { meal_id: mealMap["Apple Pie"], name: "Cinnamon" },

        { meal_id: mealMap["Panna Cotta"], name: "Cream" },
        { meal_id: mealMap["Panna Cotta"], name: "Gelatin" },
        { meal_id: mealMap["Panna Cotta"], name: "Berries" },

        { meal_id: mealMap["Brownie"], name: "Cocoa Powder" },
        { meal_id: mealMap["Brownie"], name: "Butter" },
        { meal_id: mealMap["Brownie"], name: "Sugar" },

        { meal_id: mealMap["Ice Cream Sundae"], name: "Vanilla Ice Cream" },
        { meal_id: mealMap["Ice Cream Sundae"], name: "Chocolate Sauce" },
        { meal_id: mealMap["Ice Cream Sundae"], name: "Nuts" },

        { meal_id: mealMap["Lemon Tart"], name: "Lemon Curd" },
        { meal_id: mealMap["Lemon Tart"], name: "Pastry Shell" },

        { meal_id: mealMap["Crème Brûlée"], name: "Egg Yolks" },
        { meal_id: mealMap["Crème Brûlée"], name: "Cream" },
        { meal_id: mealMap["Crème Brûlée"], name: "Sugar" },

        { meal_id: mealMap["Fruit Salad"], name: "Mixed Fruits" },
        { meal_id: mealMap["Fruit Salad"], name: "Light Syrup" },

        { meal_id: mealMap["Mojito"], name: "Mint" },
        { meal_id: mealMap["Mojito"], name: "Lime" },
        { meal_id: mealMap["Mojito"], name: "Rum" },

        { meal_id: mealMap["Lemonade"], name: "Lemons" },
        { meal_id: mealMap["Lemonade"], name: "Water" },
        { meal_id: mealMap["Lemonade"], name: "Sugar" },

        { meal_id: mealMap["Iced Coffee"], name: "Coffee" },
        { meal_id: mealMap["Iced Coffee"], name: "Ice" },

        { meal_id: mealMap["Green Tea"], name: "Green Tea Leaves" },
        { meal_id: mealMap["Green Tea"], name: "Hot Water" },

        { meal_id: mealMap["Coca-Cola"], name: "Coca-Cola" },

        { meal_id: mealMap["Mango Smoothie"], name: "Mango" },
        { meal_id: mealMap["Mango Smoothie"], name: "Yogurt" },
        { meal_id: mealMap["Mango Smoothie"], name: "Honey" },

        { meal_id: mealMap["Orange Juice"], name: "Oranges" },

        { meal_id: mealMap["Espresso"], name: "Espresso Beans" },
        { meal_id: mealMap["Espresso"], name: "Water" },

        { meal_id: mealMap["Hot Chocolate"], name: "Milk" },
        { meal_id: mealMap["Hot Chocolate"], name: "Cocoa Powder" },
        { meal_id: mealMap["Hot Chocolate"], name: "Sugar" },

        { meal_id: mealMap["Milkshake"], name: "Milk" },
        { meal_id: mealMap["Milkshake"], name: "Ice Cream" },
        { meal_id: mealMap["Milkshake"], name: "Flavored Syrup" },
    ];

    await knex('ingredients').insert(ingredients);
}
