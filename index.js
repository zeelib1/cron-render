const axios = require("axios");
const cron = require("node-cron");

// Function to visit the URL
async function visitWebsite() {
  try {
    const response = await axios.get("https://crypto-news-mo9o.onrender.com/");
    console.log("Visited the website. Status:", response.status);
  } catch (error) {
    console.error("Error visiting the website:", error);
  }
}

// Schedule the function to run every 5 minutes
cron.schedule("*/5 * * * *", visitWebsite);
