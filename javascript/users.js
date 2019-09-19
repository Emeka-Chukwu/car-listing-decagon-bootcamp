$('window').ready(()=>{
    // user registration in building~
    $('#registerUser').submit((e)=>{
        e.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        let confirmPassword = $('#confirm').val().trim();
        let telephone = $('#tel').val().trim();
        let storeValues = false;


        if(password === confirmPassword){
            $.ajax({
                url: 'http://localhost:3000/users',
                method: 'get'
            }).done((res) =>{
                res.map(elem =>{
                    if(elem.email === email){
                        storeValues = true;
                    }
                })
                
            })

            if(!storeValues){
                $.ajax({
                url: "http://localhost:3000/users",
                method: 'post',
                data: {
                    name,
                    email,
                    password,
                    telephone
                }
            })
            .done((res)=>{
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
                } 
            
        } else{
                    alert('Passwords did not match')
                }
    })

    //  for login page code

    

})