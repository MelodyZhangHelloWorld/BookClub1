<template>
  <div class="m-2">
      <b-row  align-h="center" class="m-3">
  <b-col md="8" > <!--md="6" -->

    <b-card>        <!-- More information -->
    <h2>  {{ comment.commentBody }}</h2>
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

<style>

</style>