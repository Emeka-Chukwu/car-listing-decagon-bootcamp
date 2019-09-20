$('window').ready(()=>{

        
        $.ajax({
            url: "http://localhost:3000/users",
            method: "get"
        }).done((res)=>{
            res.forEach((elem, index) =>{
                $('#usersTable').append(
                `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${elem.name}</td>
                        <td>${elem.email}</td>
                        <td>${elem.telephone}</td>
                    </tr>
                `
            )
            })
            
        })

})