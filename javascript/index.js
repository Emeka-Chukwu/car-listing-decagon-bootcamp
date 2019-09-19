
$('document').ready(()=>{
    $('#new_list').submit((e) =>{     
    e.preventDefault();
    let carName = $('#carName').val();
    let carPrice = $('#carPrice').val();
    let carMileage = $('#carMileage').val();
    let carYear = $('#carYear').val();
    let carImage = $('#carImage');
    
    $.ajax({
        url : 'http://localhost:3000/cars',
        method: 'post',
        data: {
            carName,
            carPrice,
            carMileage,
            carYear
            
        }
    }).done((res) =>{
        console.log(res)
    })
})

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
                    <div class="col-md-3 col-sm-6 col-xs-12 mt-5 text-center mt-2">
                <div class="card">
                    <div class="card-body mt-5">
                        <div class="card-img">
                            <img src="images/honda-accord.jpg" alt="vintage-image" class="img-responsive">
                        </div>
                        <p>${elem.carName}</p>
                        <p>${elem.carPrice}</p>
                        <p>${elem.carMileage}</p>
                         <p>${elem.carYear}</p>
                          <p>${elem.carImage}</p>
                <span class="btn btn-primary" onclick="(individual(${index+1}))">view</span>          
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

$.ajax({
    'url': "http://localhost:3000/cars",
    'method': 'delete'
})
    
function single(i){

    $.ajax({
        'url': 'http://localhost:3000/cars/'+i,
        'method' : 'get'
    })
    .done((res) => {
        console.log(res.carPrice, res.carName)

        $('#displayData').html(
            // `<div> ${res.carPrice}, ${res.carName} </div>`
            `<input type="text" id="carName" value="${res.carName}">
            <input type="text" id="carPrice" value="${res.carPrice}">
            <input type="text" id="carMileage" value="${res.carMileage}">
            <input type="hidden" value="${res.id}">
            <input type="button"  value="update" onclick="update(${res.id})">
                `
        );
    })
}


function update(i){
    let carName = $('#carName').val();
    let carPrice = $('#carPrice').val();
    let carMileage = $('#carMileage').val();
    // let carYear = $('#carYear').val();
    // let carImage = $('#carImage');   
    $.ajax({
        url : 'http://localhost:3000/cars/'+i,
        method: 'put',
        data: {
            carName,
            carPrice,
            carMileage
            // carYear
            
        }
    }).done((res) =>{
        console.log(res)
    })
}
function deleteData(i){
    $.ajax({
        url : 'http://localhost:3000/cars/'+i,
        method : 'delete'
    })
    .done((res) => alert("the car is successfully deleted"))
    .catch((err)=> console.log(err))
}

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