const option2 = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, option2)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)
    let img2 = data.meals[0].strMealThumb

    document.querySelector('#meal-name2').innerHTML = data.meals[0].strMeal
    document.querySelector('#img2').innerHTML = "<img src='" + img2 + "' alt='' id='img2'>" 
})