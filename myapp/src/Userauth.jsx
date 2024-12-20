import React, { useEffect, useState } from 'react'

function Userauth() {

let [user,setuser]=useState([])

let [email,setemail]=useState("")





async function userdata() {
  let data= await fetch("http://localhost:3000/userdata")
  let actualdata = await data.json()
   
  setuser(actualdata)

  // console.log(user)
}

useEffect(()=>{
  userdata()
},[])







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

 async function submitdata(){
  console.log(signup)
  setsignup("")
  alert("sign up succesfull")
  setislogin(true)



  await fetch ("http://localhost:3000/userdata",{
    method:"POST",
    body:JSON.stringify(signup),
    headers:{ 
      "Contenst-Type": "application/json"
    }
   })
}





function signin(){

  let check = false

  user.map((el)=>{
   if(el.email==email){
    alert("login success")
    check=true
    return
   }
  })

  
  if(!check){
    alert("plese enter correct email or signup")
  }
  
}


  return (

<div className='container'>
<h1>User authentication</h1>
<div className='loginsignup' style={{display:islogin?"block":"none"}}>
       

        <input type="text" name="" id="" placeholder='enete email id' onChange={(e)=>setemail(e.target.value)} />
        <input type="text" name="" id="" placeholder='enter password' />

        <button onClick={signin}>submit</button>
        
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