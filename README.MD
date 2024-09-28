# 🍽️ Food Explorer API

[👉 Explore the Food Explorer Frontend Here](https://vististudi.online)

Welcome to the **Food Explorer API**! This API powers the backend for the Food Explorer platform, allowing foodies to dive into a world of delicious dishes, add their favorites, place orders, and more. Built with 💻 **Node.js**, 🚀 **Express**, ⚙️ **Knex**, and 🔥 **TypeScript**, this robust API ensures smooth and scalable operations. From **JWT authentication** to image handling with **Cloudinary**, the Food Explorer API covers it all!

## 🍴 Features Overview

### 1. **User Authentication (JWT & Cookies) 🍪**
Security first! Authentication is handled using **JWT tokens** stored in **cookies**. When users log in, a token is safely generated and stored to keep track of their session without exposing sensitive data.

- 🔒 **JWT** ensures secure and scalable authentication.
- 🍪 **Cookies** store the token on the client side, making login seamless and safe.

### 2. **User Functions 👨‍🍳**
Regular users have access to a variety of tasty features:
- 🍕 **View Food Items:** Browse through a curated list of mouth-watering dishes.
- 🔍 **Search by Name or Ingredients:** Find exactly what you're craving by searching for food or ingredients.
- ❤️ **Add to Favorites:** Love a dish? Add it to your favorites list for easy access later.
- 🛒 **Select Quantity & Add to Cart:** Pick your favorites and add them to your cart with the quantity of your choice.
- 💳 **Payment Options:** Pay easily via **QR code** or **credit card**.
- 🕒 **Purchase History:** Check out your past orders whenever you want.

### 3. **Admin Functions 🛠️**
Admins have superpowers! They can:
- ✏️ **Edit Food Items:** Update details of dishes, making sure everything is accurate and delicious.
- 🍲 **Create New Dishes:** Add new food items to the menu and keep the offerings fresh.
- 📝 **Order Status Management:** Track and change the status of customer orders (from pending to complete).
- 🔍 **Search Dishes:** Easily find and manage dishes by searching by name.

### 4. **Environments (Development & Production) 🌍**
To ensure smooth operations in different scenarios:
- **Development**: Uses **SQLite** for quick and easy testing.
- **Production**: Uses a more powerful database, still managed with **Knex** for consistency.
- **Knex** manages migrations and keeps both environments in sync.

### 5. **Libraries & Tools 🔧**
We use some awesome libraries to keep things running smoothly:
- 📂 **Multer**: For handling file uploads like delicious food item images.
- 🌐 **Cors**: Enables sharing of resources across different origins.
- 🍪 **Cookie-Parser**: Manages cookies for user sessions.
- 🚀 **PM2**: Allows multiple instances of the API to run simultaneously for improved performance, especially on platforms like **Render**.

### 6. **Error Handling 🚨**
No more crashing servers! A custom error handler ensures that any unexpected issues are caught and handled gracefully, preventing server downtime.

### 7. **Image Storage (Cloudinary) 🌩️**
For all food images, we use **Cloudinary**! All images are automatically uploaded, stored, and managed, making sure your dishes look as good as they taste.

### 8. **Health Check Endpoints 🩺**
We’ve added endpoints to monitor the health of the server and database:
- **Server health:** Ensures the server is up and running.
- **Database health:** Checks that the database connection is active and healthy.

## 🎉 Conclusion
The **Food Explorer API** is a complete solution for managing a food service platform. It’s designed with scalability in mind, using cutting-edge tech like **Express**, **Knex**, and **PM2**. Whether you're a regular user looking to order your favorite meal or an admin managing the backend, the API ensures a seamless and delightful experience. 🍔🥤🍩

This project showcases key skills in **Node.js**, **TypeScript**, **API design**, and **database management**, making it an excellent addition to my developer portfolio. 🚀

For more details or to check out the frontend, visit [👉 Food Explorer Frontend](https://vististudi.online). Happy exploring! 🌟
