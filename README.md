<div align="center">
  <a href="https://service-orbit.web.app" target="_blank">
    <img src="https://i.ibb.co.com/SVm55YV/service-logo.png" width="250px" alt="Service Orbit"/> 
  </a>
  <h1>Service Orbit</h1>
</div>

## 📜 Project Overview

**Service Orbit** is a service-sharing web application designed to connect service providers with potential customers. The platform facilitates seamless interactions and transactions, empowering users to discover, offer, and engage with services efficiently.

---

## 🚀 Live Links

- **Client Repo:** [_github/tariqul420/client_](https://github.com/tariqul420/Service-Orbit.git)
- **Server Repo:** [_github/tariqul420/server_](https://github.com/tariqul420/Service-Orbit-Server.git)
- **Live Site:** [_Service-Orbit.com_](https://service-orbit.web.app)
- **Alternate Live Site:** [_Service-Orbit-2.com_](https://service-orbit.firebaseapp.com)

---

## 🔍 React Concepts Used

- **Components**
- **Hooks**: `useState`, `useEffect`, `useContext`
- **React Router**: `useLoaderData`, `useParams`, `useLocation`
- **Conditional Rendering**

---

## 🛠️ Technologies Used

### 👩🏼‍💻 Frontend

- **React**
- **Firebase**
- **Tailwind CSS**
- **DaisyUI**
- **React Router**
- **React Icons**
- **React Hot Toast**
- **Context API**
- **JWT-based Authentication**

### ｡🇯‌🇸‌ Backend

- **Node.js**
- **Express.js**

### 🛢️ Database

- **MongoDB**

---

## ✨ Features

1. **User Profiles**
2. **Search and Filter**
3. **Service Listings**
4. **Interactive Dashboard**
5. **Responsive Design**
6. **Booking System**
7. **Rating and Reviews**

---

## 🧰 NPM Packages Used

- **@tanstack/react-query**
- **aos**
- **axios**
- **firebase**
- **lottie-react**
- **prop-types**
- **react**
- **react-countup**
- **react-dom**
- **react-hook-form**
- **react-hot-toast**
- **react-icons**
- **react-paginate**
- **react-router-dom**
- **react-slick**
- **react-spinners**
- **slick-carousel**
- **swiper**

---

## 🛠 Installation

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** connection string

---

### Client Side Setup

1. Clone the client-side repository:

   ```bash
   git clone https://github.com/tariqul420/Service-Orbit.git
   cd Service-Orbit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in a code editor:
   ```bash
   code .
   ```
5. Add the `.env` file in the root directory and include the following environment variables:
   ```bash
   VITE_API_KEY=YOUR_VITE_API_KEY
   VITE_AUTH_DOMAIN=YOUR_VITE_AUTH_DOMAIN
   VITE_PROJECT_ID=YOUR_VITE_PROJECT_ID
   VITE_STORAGE_BUCKET=YOUR_VITE_STORAGE_BUCKET
   VITE_MESSAGE_SENDER_ID=YOUR_VITE_MESSAGE_SENDER_ID
   VITE_APP_ID=YOUR_VITE_APP_ID
   VITE_MEASUREMENT_ID=YOUR_VITE_MEASUREMENT_ID
   VITE_API_URL=YOUR_VITE_API_URL
   ```
   > **Note:** Replace the `VITE_API_KEY` and `VITE_AUTH_DOMAIN`, along with other placeholders, with actual values.

### Server Side Setup

1. Clone the client-side repository:

   ```bash
   git clone https://github.com/tariqul420/Service-Orbit-Server.git
   cd Service-Orbit-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   --- OR ---

   ```bash
   nodemon index.js
   ```

4. Open the project in a code editor:
   ```bash
   code .
   ```
5. Add the `.env` file in the root directory and include the following environment variables:
   ```bash
   DATABASE_USERNAME=YOUR_DATABASE_USERNAME
   DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
   ACCESS_TOKEN_SECRET=YOUR_ACCESS_TOKEN_SECRET
   ```
   > **Note:** Replace the `index.js` file's `your_mongo_connection_string` and the `.env` file's `YOUR_DATABASE_USERNAME`, along with other placeholders, with actual values.
