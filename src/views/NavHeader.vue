<template>
 <div>
 
<header>
  
       <b-navbar  toggleable="md" type="dark" variant="info">
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse  id="nav-collapse" is-nav variant="info">

        <b-navbar-nav class="ml-5">
         
         <div id="webTitle">
          <h1> Book Club</h1>
         </div>
            
        </b-navbar-nav>

        <!-- Right aligned nav items *** -->
        <b-navbar-nav class="ml-auto mr-3" >

      <b-nav-item class="mr-3" to="/">Home</b-nav-item>

    <b-nav-item class="mr-3" to="/shelf">Shelf</b-nav-item>

     <b-nav-item class="mr-3" to="/event">Event</b-nav-item>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


</header>

  
  </div>
</template>

<script>
export default {
  

}
</script>

<style>

#webTitle
{
  font-size: x-large;
  font-weight: bolder;
  color: whitesmoke;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   
  
}

#nav-collapse {
  font-size: large;


}

 .navbar.navbar-dark.bg-dark{
    background-color: #AABB55;
 }

#nav-collapse 
a.router-link-exact-active{

   color: white;
   font-weight: bold;
   border: 2px solid rgb(177, 200, 214);  
}

.navbar-custom {
  
 background-color: #9d0ac2;

}


</style>