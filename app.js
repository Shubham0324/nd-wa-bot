const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.post("/api/v1/bot", (req, res) => {
  console.log();
  const phoneNumber = req.body.user.id;
  const name = req.body.user.name;
  const code = req.body.message.text;
  const fromMe = req.body.message.fromMe;

  let message = "";
  const snmhNumber = "918076415843";

  if (!fromMe) {
    if (true) {
      switch (code) {
        case "Hi": {
          message = `Hey there! I'm your friendly ND bot! How can I assist you today? 😊🤖

          Press any of the option below
          
          M to go to Main Menu
          N to Know Why ND
          C to see the Catalogue
          R to Request A Call Back
          A to Download the ND Furniture Mart App
          
          
          Regards,
          ND Bot`;

          sendMessages(phoneNumber, message);
          break;
        }
        case "M": {
          message = `Hey there! I'm your friendly ND bot! How can I assist you today? 😊🤖

          Press any of the option below
          
          M to go to Main Menu
          N to Know Why ND
          C to see the Catalogue
          R to Request A Call Back
          A to Download the ND Furniture Mart App
          
          
          Regards,
          ND Bot`;

          sendMessages(phoneNumber, message);

          break;
        }
        case "N": {
          message = `Welcome to 📍ND Chair Parts Solution Pvt. Ltd.!

          Discover comfort and success with us 😍. 20 years of experience and innovation ensure a low 3% parts breakage rate 🥳, saving customers 24 crore 🤑! Trusted by 675 clients, we achieved revenue of 3750cr, with a profit of 755cr 📈.
          
          Enjoy hassle-free shopping with a 2-year warranty and no-questions-asked policy 🙊. Choose from 422+ modern chair parts under one roof 🙌, serving esteemed clients like Geeken Seating Collection and more.
          
          ND Express 🚚 delivers select products within 24 hours ⏱️, saving space and preventing delays, while our large manufacturing unit produces 565,000 units per month.
          
          With 1130+ satisfied customers across 23 states and 9 countries 😍, our quality and service shine! Count on us to solve breakage issues ☹ by combining our products with ND Express, preserving market value and preventing damages 😀.
          
          Trust, quality, and service define us. Join our journey of innovation and excellence 👑.
          
          Team ND Chairs - Striving for better every day!`;

          sendMessagesWithFile(
            phoneNumber,
            message,
            "https://firebasestorage.googleapis.com/v0/b/nd-final-6aa34.appspot.com/o/event%2Fvideo-nd.mp4?alt=media&token=717d229b-6813-47a4-836e-644958e40b6b"
          );

          break;
        }
        case "C": {
          message = `Hi! We recently received your query. Thank you for sharing your interest in our products and services.
          
          We here at 📍ND chair parts Solution Pvt. Ltd. combine our 20 years of experience and innovation, so we can manufacture with care so you can focus on comfort and selling 😊.
          
          We have helped more than 675 customers save 24 crore 🤑 with our industry's lowest parts *breakage rate of 3% 🥳*.
          
          You have our commitment of *warranty of 2 years with no question asked policy 🙊*.
          
          Inhouse and outsourced manufacturing of more than 422+ chair parts that have modern esthetics and standard sizes to provide you with what you want under one roof 🙌.
          
          With our ND Express 🚚 service we dispatch certain products under 24  hours⏱ thus helping our recent customers save 4500 sq feet 👏*. in floor area and *save capital🤑 by preventing late orders 😨
          
          Standardized process and WhatsApp group 📨 to make your complete order process as smooth as butter.
          
          You have our commitment to trust, quality and service which have been strengthened by customers 👑 like you in this journey of innovation and excellence.
          
          
          Team ND Chairs
          Striving for better products and service every day`;

          sendMessagesWithFile(
            phoneNumber,
            message,
            "https://firebasestorage.googleapis.com/v0/b/nd-final-6aa34.appspot.com/o/catalouge%2FND%20Catalogue%20Final.pdf?alt=media&token=64d2137f-77e5-49e5-95d8-696e2a3177b8"
          );

          break;
        }
        case "R": {
          message = `Welcome to 📍ND Chair Parts Solution Pvt. Ltd.!

          One of our representatives will contact you shortly. In the meantime, here's a little about us 😊.
          
          We have a high-tech manufacturing facility and delivery service, which have impacted 1130+ customers and thousands of people in 23 states and 9 countries.
          
          Since 2002 we had helped 675 customers😀 achieve revenue of 3750cr🤑 with *profit standing at 755cr 📈*.
          
          Some of our clients include Geeken Seating Collection, Featherlite products, and Transteel seating technologies to name a few.
          
          We have one of the largest manufacturing units through which we manufacture 565000 units every month. In the last 20 years, we have successfully manufactured and delivered 
          10 crores 17 lakh and 52 💨 products in 23 states which helped our customers to fulfil the order for Samsung, American Express, LG, Volvo, Hyundai, Infosys, Titan and many countless success stories.
          
          Recently a seller was facing breakage issues☹ and contacted us we helped them by combining our quality products with ND Express to prevent their damages in late delivery and market value😀.
          
          You have our commitment to trust, quality and service which have been strengthened by customers 👑 like you in this journey of innovation and excellence.
          
          
          Team ND Chairs
          Striving for better products and service every day`;

          sendMessages(phoneNumber, message);
          const customerNumber = phoneNumber.substring(2, 12);
          sendMessages(
            snmhNumber,
            "A customer requested a call back. Please call or delegate a call back to " +
              customerNumber
          );

          break;
        }
        case "A": {
          message = `🛋️ Attention all furniture businesses! 🏢🪑

          Elevate your operations with our cutting-edge B2B Furniture Parts app! 📱💼
          
          🚀 Streamline your orders and access our extensive parts catalog instantly! 💨
          
          🔧 Find the perfect parts for your furniture projects with ease! ✨
          
          🔔 Stay informed with real-time stock updates and order status! 📲
          
          🚀 Order from your nearest branch for lightning-fast deliveries! ⚡️🚚
          
          💡 Enjoy personalized service and support from your local branch! 🤝👩‍💼
          
          🤝 Join our thriving B2B community for top-notch customer support! 🤝
          
          Ready to revolutionize your furniture business? Tap the link below to download our app now! 🌟
          
          [Download Now! 📥](http://bit.ly/42e4Uge)
          
          🙌 Experience efficiency like never before! Let's build success together! 🚀`;

          sendMessagesWithFile(
            phoneNumber,
            message,
            "https://firebasestorage.googleapis.com/v0/b/nd-final-6aa34.appspot.com/o/event%2Fapp.jpg?alt=media&token=26612f91-e099-46b9-92f7-0b237535b9c1"
          );

          break;
        }
      }
    }
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

function sendMessagesWithFile(phoneNumber, message, file) {
  axios.post(
    `${process.env.WHATSAPP_URL}/${process.env.PRODUCT_CODE}/${process.env.PHNUMBER}/sendMessage`,
    {
      to_number: phoneNumber,
      type: "media",
      message: file,
      text: message,
    },
    {
      headers: {
        "x-maytapi-key": `${process.env.MAYTAPI_KEY}`,
        "content-type": "application/json",
      },
    }
  );
}

function sendMessages(phoneNumber, message) {
  axios.post(
    `${process.env.WHATSAPP_URL}/${process.env.PRODUCT_CODE}/${process.env.PHNUMBER}/sendMessage`,
    {
      to_number: phoneNumber,
      type: "text",
      message: message,
    },
    {
      headers: {
        "x-maytapi-key": `${process.env.MAYTAPI_KEY}`,
        "content-type": "application/json",
      },
    }
  );
}
