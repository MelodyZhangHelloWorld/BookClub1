<template>

<div class="mb-2">

 <b-row align-h="center" class="m-1">
       <b-col cols=8 align-h="center"><!--  major -->

   <b-card  class="m-3" id="bookdetail">
      <b-row  align-v="start" > <!-- image location-->

        <b-col md="2" class="mr-2"> <!-- **--><!-- image-->
        <img :src=imageLink alt="Image N/A"
        style="width:10rem"
        class="m-2"
        >

     </b-col>

     <b-col 
     class="ml-4 mr-2 mt-1" id="bookcardText" > <!-- text-info -->  
       
       <b-row class="mb-2" align-v="center">
         <b-col cols=8 align-h="start" id="bookTitle">  <b> {{title}} </b>  </b-col>
          <b-col align-h="start"> {{author}} </b-col>  
       
       </b-row>
      

        <b-row >
         <b-col cols=8 align-h="start"> {{category}} </b-col>
         <b-col align-h="start"> {{lang}}</b-col>
       </b-row>


        <div class="mt-1 ml-3 mr-3" >
          
            <b-row >
              <b>Description:</b>
            <b-card-text>
         
           {{ description  }} 
            </b-card-text>
             
       </b-row>
          
        </div> 

     </b-col>
  
     </b-row>
   </b-card>      
  </b-col>
  </b-row>
  
         
 <div v-if='hasComment'>  
    <CommentBase     
        v-for="comment in commentList"
        :key= "comment.cid"
        :comment = "comment"    /> 

   </div> <h3 v-else>No comments found.. Add your comment!</h3>  
      
      <AddComment  :bid = 'id'
        @add-comment="addComment"
       />

</div>

  
</template>

<script>
import AddComment from '../components/AddComment.vue' 
import CommentBase from '../components/CommentBase.vue'

import db from '../components/firebaseInit' 


export default {

  props: ['id'],

  components: {
    AddComment,
    CommentBase
  },

    data(){
      return {
      selectedBook : null,
      hasComment: false,
      commentList: [],  //*

      title:'',
      author:'',
      category:'',
      lang:'',
      imageLink:'',
      description:'',
     
    //comment  ?
        bid:'', 
        cid:'', 
        preferredName:'',
        commentBody:'', 
      

      }
  },


  created(){  
    this.selectedBook = this.$store.getters.books.find(
      (book) => book.id === this.id  
        );
   
    const altImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'; //"../assets/imgNA.jpg";
    
   this.imageLink = this.selectedBook.volumeInfo.imageLinks==null? altImage:this.selectedBook.volumeInfo.imageLinks.thumbnail;

   this.title = this.selectedBook.volumeInfo.title;

   this.author = this.selectedBook.volumeInfo.author;

   this.category = this.selectedBook.volumeInfo.categories==undefined?'Category not clear..':this.selectedBook.volumeInfo.categories[0];

   this.lang = this.selectedBook.volumeInfo.language;

            if(this.lang === "zh-CN"){
              this.lang = "simplified Chinese";
            } else if (this.lang === "zh-TW") {
               this.lang = "traditional Chinese";}
 
   this.description = this.selectedBook.volumeInfo.description==null?' No description available...':this.selectedBook.volumeInfo.description;


    //getting bookComment if exists
          
      /*https://cloud.google.com/firestore/docs/query-data/queries */
      db.collection('commentList').where('bid', '==', this.id).get().then(
       (snapshot) => {
        snapshot.docs.forEach (
          doc => {
             console.log(doc.data());
            
            this.bid=doc.data().bid;
            this.cid=doc.data().cid;
            this.preferredName=doc.data().name;
            this.commentBody=doc.data().comment;

            const comment = {
              bid: this.bid,
              cid: this.cid,
              preferredName: this.preferredName,
              commentBody: this.commentBody
            }

             this.commentList.push(comment);
          }
        )
          //ASYNC*** -- update WITHIN then
          if(this.commentList.length > 0) {
              this.hasComment = true;       
            }
   
        }
      )
  },
   
   methods: {
      
      addComment(newComment){
        
        console.log('new comment: ' , newComment);

      db.collection('commentList').doc(newComment.cid + newComment.bid).set({

            bid: newComment.bid,
            cid: newComment.cid,
            name: newComment.preferredName, 
            comment: newComment.commentBody,             
      })
        this.commentList.push(newComment);
        console.log(' commentList: ' , this.commentList);





      }



   }
 
};
</script>

<style scoped>

#bookdetail {
  font-family:  Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(245, 240, 233);
  
  
 
}
#bookcardText{
  font-family: Inconsolata;
   text-align: left;
   color: rgb(29, 28, 28);
   font-size: large;
}

#bookTitle{
  
  font-size:x-large;
  
}


</style>