import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deleta as tabelas de meals e ingredients, se já existirem
    await knex('ingredients').del();
    await knex('meals').del();

    // Insere as refeições
    const mealsToInsert = [
        { name: "Burger", desc: "A juicy beef burger with cheese and veggies.", imageURL: "https://image.example.com/burger.jpg", publicID: "BUR", price: 8.50, type: "meal" },
        { name: "Pizza Margherita", desc: "Classic Margherita pizza with fresh mozzarella and basil.", imageURL: "https://image.example.com/pizza.jpg", publicID: "PIZ", price: 10.00, type: "meal" },
        { name: "Sushi", desc: "Fresh sushi with fish and rice.", imageURL: "https://image.example.com/sushi.jpg", publicID: "SUS", price: 12.00, type: "meal" },
        { name: "Caesar Salad", desc: "A crisp Caesar salad with parmesan and croutons.", imageURL: "https://image.example.com/caesar.jpg", publicID: "SAL", price: 7.00, type: "meal" },
        { name: "Chicken Alfredo", desc: "Pasta with creamy Alfredo sauce and grilled chicken.", imageURL: "https://image.example.com/alfredo.jpg", publicID: "ALF", price: 9.50, type: "meal" },
        { name: "Steak", desc: "Grilled steak served with mashed potatoes.", imageURL: "https://image.example.com/steak.jpg", publicID: "STK", price: 15.00, type: "meal" },
        { name: "Fish Tacos", desc: "Crispy fish tacos with salsa and slaw.", imageURL: "https://image.example.com/tacos.jpg", publicID: "TAC", price: 8.00, type: "meal" },
        { name: "Pad Thai", desc: "Stir-fried rice noodles with shrimp and peanuts.", imageURL: "https://image.example.com/padthai.jpg", publicID: "PAD", price: 9.00, type: "meal" },
        { name: "Beef Stroganoff", desc: "Tender beef in a creamy sauce.", imageURL: "https://image.example.com/stroganoff.jpg", publicID: "STR", price: 11.00, type: "meal" },
        { name: "Grilled Salmon", desc: "Grilled salmon with steamed vegetables.", imageURL: "https://image.example.com/salmon.jpg", publicID: "SAL", price: 13.00, type: "meal" },

        // Sobremesas
        { name: "Chocolate Cake", desc: "Rich chocolate cake with a creamy frosting.", imageURL: "https://image.example.com/cake.jpg", publicID: "CAK", price: 6.00, type: "dessert" },
        { name: "Cheesecake", desc: "Creamy cheesecake with a graham cracker crust.", imageURL: "https://image.example.com/cheesecake.jpg", publicID: "CHE", price: 6.50, type: "dessert" },
        { name: "Tiramisu", desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers.", imageURL: "https://image.example.com/tiramisu.jpg", publicID: "TIR", price: 7.00, type: "dessert" },
        { name: "Apple Pie", desc: "Warm apple pie with a flaky crust.", imageURL: "https://image.example.com/applepie.jpg", publicID: "APP", price: 5.50, type: "dessert" },
        { name: "Panna Cotta", desc: "Italian creamy dessert topped with berries.", imageURL: "https://image.example.com/pannacotta.jpg", publicID: "PAN", price: 6.50, type: "dessert" },
        { name: "Brownie", desc: "Chocolate brownie with a soft center.", imageURL: "https://image.example.com/brownie.jpg", publicID: "BRO", price: 5.00, type: "dessert" },
        { name: "Ice Cream Sundae", desc: "Vanilla ice cream topped with chocolate sauce and nuts.", imageURL: "https://image.example.com/sundae.jpg", publicID: "SUN", price: 4.50, type: "dessert" },
        { name: "Lemon Tart", desc: "Zesty lemon tart with a crisp pastry base.", imageURL: "https://image.example.com/tart.jpg", publicID: "TAR", price: 5.50, type: "dessert" },
        { name: "Crème Brûlée", desc: "Creamy dessert with a caramelized sugar topping.", imageURL: "https://image.example.com/brulee.jpg", publicID: "CRE", price: 7.00, type: "dessert" },
        { name: "Fruit Salad", desc: "Fresh fruit salad with a light syrup.", imageURL: "https://image.example.com/fruit.jpg", publicID: "FRU", price: 4.00, type: "dessert" },

        // Bebidas
        { name: "Mojito", desc: "A refreshing cocktail with lime and mint.", imageURL: "https://image.example.com/mojito.jpg", publicID: "MOJ", price: 6.00, type: "drink" },
        { name: "Lemonade", desc: "Freshly squeezed lemonade.", imageURL: "https://image.example.com/lemonade.jpg", publicID: "LEM", price: 3.50, type: "drink" },
        { name: "Iced Coffee", desc: "Chilled coffee served over ice.", imageURL: "https://image.example.com/icedcoffee.jpg", publicID: "ICE", price: 4.00, type: "drink" },
        { name: "Green Tea", desc: "Hot green tea.", imageURL: "https://image.example.com/greentea.jpg", publicID: "GRE", price: 3.00, type: "drink" },
        { name: "Coca-Cola", desc: "Classic Coca-Cola.", imageURL: "https://image.example.com/coke.jpg", publicID: "COK", price: 2.50, type: "drink" },
        { name: "Mango Smoothie", desc: "Smoothie made with fresh mango.", imageURL: "https://image.example.com/mango.jpg", publicID: "MAN", price: 5.00, type: "drink" },
        { name: "Orange Juice", desc: "Freshly squeezed orange juice.", imageURL: "https://image.example.com/orange.jpg", publicID: "ORA", price: 4.00, type: "drink" },
        { name: "Espresso", desc: "Strong and rich espresso.", imageURL: "https://image.example.com/espresso.jpg", publicID: "ESP", price: 3.00, type: "drink" },
        { name: "Hot Chocolate", desc: "Warm hot chocolate with whipped cream.", imageURL: "https://image.example.com/hotchocolate.jpg", publicID: "HOT", price: 3.50, type: "drink" },
        { name: "Milkshake", desc: "Creamy milkshake with flavored syrup.", imageURL: "https://image.example.com/milkshake.jpg", publicID: "MIL", price: 5.00, type: "drink" },
    ];

    const insertedMeals = await knex('meals').insert(mealsToInsert).returning('id');

    // Map IDs to meal names
    const mealMap: { [key: string]: number } = mealsToInsert.reduce((acc, meal, index) => {
        acc[meal.name] = insertedMeals[index].id;
        return acc;
    }, {} as { [key: string]: number });

    // Insere os ingredientes
    const ingredients = [
        // Ingredients for savory dishes
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

        // Ingredients for desserts
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

        // Ingredients for drinks
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
