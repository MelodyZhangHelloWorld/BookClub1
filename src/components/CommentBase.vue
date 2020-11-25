<template>
  <div class="m-2">
      <b-row  align-h="center" class="m-3">
  <b-col md="8" > <!--md="6" -->

    <b-card id="bookComment">     <!-- More information -->
   
    <b-col class="m-2" >
         <b-card-text>  
      <p> Comment by  <b>{{ comment.preferredName}}</b> </p>
      <b>{{ comment.commentBody }} </b>

    </b-card-text>

    </b-col>

    </b-card>

  </b-col>
      </b-row>


  </div>

</template>

<script>

export default {
    name: 'CommentBase',
    props:['comment' ],

}
</script>

<style scoped>



#bookComment {

  text-align: start;
  font-weight:500;
  font-size:large;
 
}

</style>