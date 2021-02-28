app.component('photo-search',{
    props:{
        iclick:{
            type: Boolean
            },
        picclick:{
            type:Boolean
        } ,
        notfound:{
          type:Boolean
      }
    },
    template:
    /*html*/
    `<div v-show="!picclick">
    <button @click="iclicking">
    <p class="material-icons" v-show="!iclick1">search</p>
  </button>
  <div class="flex justify-between space-x-2" v-show="iclick">
    <input type="text" v-model="inputtask" @keyup="writting" placeholder="Please enter text for searchhing picture" class="flex-1">
    <button @click="cancle">cancle</button>
  </div>
</div>
<p v-show="notfound">No photo</p>
</div>
`,
data(){
        return{
            inputtask: ''}
},
  methods:{
      iclicking(){
          this.$emit('i-clicking')
      },
      cancle(){
          this.inputtask = '' ;
          this.writting();
          this.$emit('c-cancle')
      },
      writting(){
          this.$emit("w-writting",this.inputtask)
      },
  },
  
}
)