const option4 = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, option4)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)
    let img4 = data.meals[0].strMealThumb

    document.querySelector('#meal-name4').innerHTML = data.meals[0].strMeal
    document.querySelector('#img4').innerHTML = "<img src='" + img4 + "' alt='' id='img4'>" 
})