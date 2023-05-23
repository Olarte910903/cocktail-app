const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
const nameCocktail = document.querySelector('.name');
const imageCocktail = document.querySelector('.image');
const categoryCocktail = document.querySelector('.category');
const inputCocktail = document.querySelector('.input');
const btnSearchCocktail = document.querySelector('.btn');

const searchCocktail = async (urlApi, coctel)=>{
  const response = await fetch(urlApi + coctel);
  const data = await response.json();

  nameCocktail.innerHTML = data.drinks[0].strDrink;
  imageCocktail.src = data.drinks[0].strDrinkThumb;
  categoryCocktail.innerHTML = data.drinks[0].strCategory;
  console.log(data.drinks[0].strDrink);
};

searchCocktail(URL_API, 'rum');

btnSearchCocktail.addEventListener('click', ()=>{
  let coctel = inputCocktail.value;
  searchCocktail(URL_API, coctel);
})