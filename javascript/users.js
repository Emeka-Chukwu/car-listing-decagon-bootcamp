$('window').ready(()=>{
    // user registration in building~
    $('#registerUser').submit((e)=>{
        e.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        let confirmPassword = $('#confirm').val().trim();
        let telephone = $('#tel').val().trim();
        let user_level =  1;
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
                    telephone,
                    user_level
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

    $('#loginSubmit').submit((e) =>{
        e.preventDefault();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        let loginStatus = false;
        $.ajax({
            url: "http://localhost:3000/users",
            method: "get"
        })
        .done((res) =>{
            console.log(email, password)
            // console.log(res, res.password)
            res.forEach((user)=>{
                console.log(user.email, user.password)
                if(user.email == email && user.password == password){
                    loginStatus = true;
                    localStorage.setItem('userId', user.id)

                    if(user.user_level == 2){
                       localStorage.setItem('adminId', user.id) 
                    }
                }
            })
            if(loginStatus){
                    window.location = "/dashboard.html"                 
            } else{
                alert("incorrect email or password ")
            }

        })
        console.log(loginStatus)
        
    })

})