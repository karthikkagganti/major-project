<template>
<div>
    <h1>Major Project Review</h1>
  <br>
  <div id="login">
    <h3>Login/SignUp</h3>
    <br><br>
        <div id="inputs">
          <input id="fields" type="text" placeholder=" Enter Username" />
          <br><br>
          <input id="fields"  type="password" placeholder="Enter Password" />
      </div>
        <br><br>
      <div id='buttons'>
        <button id='butt' type="Submit" @click="login">Submit</button>
        <br>
        <button id="butt" >Register</button>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'HelloApp',
  methods:{
    login: ()=>{
        var username = document.getElementById('fields').value
        console.log(username)
    }
  }
  
  }
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#buttons , #inputs{
  margin-left: 30%;
  margin-right: 30%;
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
#butt{
  padding: 10px;
  border: 1.5px solid black;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  font-size: 15px;
  background-color: rgb(228, 174, 93);
}
#fields{
  padding: 10px;
  border: 1.5px solid black;
  border-radius: 10px;
}
#login{
  background: rgb(234, 242, 247);
  padding: 40px;
  max-width: 600px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}
</style>
