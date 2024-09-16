# 🚆 eTicketing System

An eTicketing web application that helps train conductors manage fines for passengers based on travel distance. The application allows the conductor to input station names, select the type of train, and specify the coach where the passenger is located. Based on the distance traveled, fines are calculated, and a notification message is sent to the customer's mobile number. 📲

## ✨ Features

- 📝 Input station names, type of train, and coach number.
- 💰 Fine calculation based on travel distance.
- 📩 Automatic SMS notification sent to the fined passenger.
- 💻 Responsive and user-friendly interface for train conductors.

## 🛠️ Technologies Used

- **Frontend**: ⚛️ React.js
- **Backend**: 🟢 Node.js, Express.js
- **Database**: 🗃️ (Specify the database used, e.g., MongoDB)
- **SMS Gateway**: 📱 (Specify the SMS service/API used, e.g., Twilio)
- **Styling**: 🎨 (Specify any CSS framework or libraries used, e.g., Bootstrap, Material UI)

## 🔄 Application Flow

1. **🔐 Conductor Login**: The conductor logs into the system.
2. **🛤️ Passenger Information**: Input the station details, type of train, and coach number.
3. **🧮 Fine Calculation**: The system calculates the fine based on distance.
4. **📲 Notification**: The customer receives an SMS with the fine details.

## 🚀 Installation and Setup

Follow these steps to launch the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/eticketing.git

2. **Fo to the directory**:
   ```bash
   cd eTicketing

3. **Install frontend dependencies**:
   ```bash
   cd client
   npm install

4. **Install Backend dependencies**:
   ```bash
   cd ../server
   npm install

5. **Configure environment variables:**
    Add your SMS API keys and other configuration settings in a .env file (example: SMS_API_KEY, DB_URI, etc.).

6. **Start the server**:
   ```bash
   cd server
   npm start

7. **Start the react app**
   ```bash
   cd ../client
   npm start

8. **Access the application**: Open http://localhost:3000 in your browser.


**Screenshots**

