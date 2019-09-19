
    $('window').ready(()=>{
        if(localStorage.getItem('userId') !== null){
            $('ul').append(
                `
                    <li class="nav-item">
                        <a class="nav-link active" href="login.html">Sign in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="register.html">Register</a>
                    </li>
                `
            )
        }
    })
