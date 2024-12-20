import React, { useState } from 'react'

function Userauth() {

  let initaalval={
    name:"",
    email:"",
    password:""
  }

let [islogin,setislogin]=useState(true)

let [signup,setsignup]=useState(initaalval)




function handlechange(e){
 let data = e.target.value

 setsignup({...signup,[e.target.name]:data})

}

function submitdata(){
  console.log(signup)
  setsignup("")
  alert("sign up succesfull")
  setislogin(true)
}



  return (

<div className='container'>
<h1>User authentication</h1>
<div className='loginsignup' style={{display:islogin?"block":"none"}}>
       

        <input type="text" name="" id="" placeholder='enete email id' />
        <input type="text" name="" id="" placeholder='enter password' />

        <button>submit</button>
        
    </div>
    


    <div className='loginsignup'style={{display:islogin?"none":"block"}} >
        <input type="text" name="name" id=""  placeholder='ener name' onChange={handlechange} />
        <input type="text" name="email" id="" placeholder='enter email'onChange={handlechange} />
        <input type="text" name="password" id=""  placeholder='enter password'onChange={handlechange}/>
        <button onClick={submitdata}>submit</button>


    </div>


    <button onClick={()=>setislogin(true)}>login</button> <button onClick={()=>setislogin(false)}>signup</button>
      

</div>

  
  )
}

export default Userauth