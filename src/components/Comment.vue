<template>
  <div>
   <b-container>
<b-row  align-h="center" class="m-3">
  <b-col cols="8" > <!--md="6" -->

    <b-card>
<b-form @submit="onSubmit" @reset="onReset" v-if="show">

     <b-col md="14">

        <b-form-group
        id="input-group-1"
        label="Your comment:"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-1"
          v-model="comment.commentBody"
          required
          placeholder="Your comment.."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
     </b-col>
     
 

  <b-col md="14">
        <b-row>

          <b-col md="8">
          <b-form-group id="input-group-2"  label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="comment.preferredName"
          required
          placeholder="Your preferred name"
        ></b-form-input>
        
      </b-form-group>
        </b-col>

     <b-col>

      <b-row  align-h="center">
        <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>

    <b-button class="ml-2" type="reset" variant="danger">
      Reset</b-button>
      </b-row>

          </b-col>
    
          </b-row>
       </b-col>
    </b-form>
</b-card>

<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ comment }}</pre>
    </b-card>

  </b-col>
</b-row>

   </b-container>
  </div>
</template>


<script>
 export default {
   props: ['bid'], //bookId

    data() {
      return {
          //
         comment:{
           bid: this.bid,
           cid: (new Date()).getTime(),
           preferredName:'',
           commentBody: ''
         } ,  
             
        show: true // 
      }
    },
    computed:{
      
       
      
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.comment))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.comment = ''
        this.form.name = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>