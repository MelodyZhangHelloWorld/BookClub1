<template>
 <div>
 
<header>
  
       <b-navbar toggleable="lg" type="dark" variant="info">
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse  id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-5">

         <h1><b-nav-item id="webTitle" to="/">Book Club</b-nav-item></h1>
   
        </b-navbar-nav>

        <!-- Right aligned nav items *** -->
        <b-navbar-nav class="ml-auto mr-4">

    <b-nav-item class="ml-auto mr-5" to="/about">Shelf</b-nav-item>

     <b-nav-item class="ml-auto mr-5" to="/event">Event</b-nav-item>


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

<style scoped>

#webTitle
{
  
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}

#nav-collapse {
  font-size: x-large;
  color: red;


}
#nav-collapse 
a.router-link-exact-active{

   color: white;
    
}

</style>