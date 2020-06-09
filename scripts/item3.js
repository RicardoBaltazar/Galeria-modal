const option3 = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, option3)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)
    let img3 = data.meals[0].strMealThumb

    document.querySelector('#meal-name3').innerHTML = data.meals[0].strMeal
    document.querySelector('#img3').innerHTML = "<img src='" + img3 + "' alt='' id='img3'>" 
})