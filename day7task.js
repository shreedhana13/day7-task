// Fetching data

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Problem 1: Get all the countries from Asia continent/region using Filter function

    const asiaCountries = data.filter((country) => country.region === 'Asia');
    console.log("Countries in Asia:", asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function

    const countriesWithPopulationLessThan2Lakh = data.filter((country) => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakh);

    // Problem 3: Print the following details name, capital, flag using forEach function

    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Problem 4: Print the total population of countries using reduce function

    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population of Countries:", totalPopulation);

    // Problem 5: Print the country which uses US Dollars as currency
    
    const usDollarCountries = data.filter((country) => country.currencies.USD !== undefined);
    console.log("Countries using US Dollars:", usDollarCountries);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
