
$('document').ready(()=>{
    // posting a car list
    $('#new_list').submit((e) =>{     
    e.preventDefault();
    let carName = $('#carName').val();
    let carPrice = $('#carPrice').val();
    let carMileage = $('#carMileage').val();
    let carYear = $('#carYear').val();
    let carImage;
    let user_id = localStorage.getItem('userId');
    let files = $('#carImage')[0];
    carImage = files.files[0].name
    
    $.ajax({
        url : 'http://localhost:3000/cars',
        method: 'post',
        data: {
            carName,
            carPrice,
            carMileage,
            carYear,
            user_id,
            carImage
            
        }
    }).done((res) =>{
        console.log(res)
        window.location = '/';
    })
})


// displaying all the data that are stored in the data
    $.ajax({
        'url': "http://localhost:3000/cars",
        'method': 'get'
    })
    .done((res) => {
        console.log('get data');
        console.log(res)
        res.forEach((elem, index)=>{
            $('#cardCarList').append(
                `
                <div class="col-md-4 col-sm-6 col-xs-12 text-center mt-3 ">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                    <img src="images/${elem.carImage}" alt="vintage-image" class="img-responsive card-img-top">
                        <div class="card-body mt-1">
                        <div class="card-title"><h4>${elem.carName}</h4></div>
                        
                        
                        
                        <p>N${elem.carPrice}</p>
                        <p>${elem.carMileage} km</p>
                         <p>${elem.carYear} yr</p>
                       
                <div class="card-footer">          
                <span class="btn btn-primary form-control" onclick="(individual(${index+1}))">view</span>  
                </div>        
                    </div>
                </div>
            </div>
                `
                // <a href="#" onclick="single(${index+1})"> ${elem.carName} ${elem.carPrice}</a>
                // `
            )

        })
    }).catch((err) => console.log(err))
})




function update(i){
    let carName = $('#carName').val();
    let carPrice = $('#carPrice').val();
    let carMileage = $('#carMileage').val();
    let carYear = $('#carYear').val();
    let carImage = $('#carImage').val();
    console.log('ggggt')
    $.ajax({
        url : 'http://localhost:3000/cars/'+i,
        method: 'patch',
        data: {
            carName,
            carPrice,
            carMileage,
            carYear,
            carImage
            
        }
    }).done((res) =>{
        console.log(res)
    })
}
// function deleteData(i){
//     $.ajax({
//         url : 'http://localhost:3000/cars/'+i,
//         method : 'delete'
//     })
//     .done((res) => alert("the car is successfully deleted"))
//     .catch((err)=> console.log(err))
// }

function individual(i){
    $.ajax({
        'url': 'http://localhost:3000/cars/'+i,
        'method' : 'get'
    })
    .done((res) => {
        console.log(res.carPrice, res.carName, i)
        localStorage.setItem('singleId', i);
        window.location = '/single.html'
    }).catch((err) => console.log(err))

    
}