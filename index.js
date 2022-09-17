const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const {CURRENCY_API_LAYER} = process.env;

/* services */


const fetchCurrencies = async () => {
    try {
        const currencies = await axios.get('https://api.apilayer.com/currency_data/live?base=USD&symbols=EUR,GBP', {headers: {apiKey: CURRENCY_API_LAYER}});
        console.log(currencies);
    } catch (err) {
        console.log(err);
    }
}


/* logs */
const showWelcomeMessage = () => console.log("Welcome to Currency Converter");


showWelcomeMessage();
fetchCurrencies();