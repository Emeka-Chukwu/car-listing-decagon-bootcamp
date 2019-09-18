
$('document').ready(()=>{
    $('#new_list').submit((e) =>{  
        console.log("ttt");
        console.log(e);
        
    e.preventDefault();
    // alert('hi j'
    // return true;
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
    // .fail((jqXHR, textStatus) =>{
    //     console.log(jqXHR)
    // })
})

    $.ajax({
        'url': "http://localhost:3000/cars",
        'method': 'get'
    })
    .done((res) => {
        console.log('get data');
        console.log(res)
        res.forEach((elem, index)=>{
            $('#displayData').append(


                `
                    <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-img">
                            <img src="images/honda-accord.jpg" alt="vintage-image" class="img-responsive">
                        </div>
                        <p>display the image to the viewer
                        display the image to the viewer
                        display the image to the viewer
                        display the image to the viewer</p>
                    </div>
                </div>
            </div>
                `

                // `<div class="col-md-6">
                //     ${index+1}, ' '${elem.carName} ${elem.carPrice}
                // </div>
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

// let data = $('.name').val();