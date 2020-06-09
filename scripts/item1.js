const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, option)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)
    let img1 = data.meals[0].strMealThumb

    document.querySelector('#meal-name1').innerHTML = data.meals[0].strMeal
    document.querySelector('#img1').innerHTML = "<img src='" + img1 + "' alt='' id='img1'>" 
})