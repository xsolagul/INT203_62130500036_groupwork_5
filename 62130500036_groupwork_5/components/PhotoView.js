app.component('photo-view',{
    props:{
        picclick:{
            type:Boolean
        },
        bigimage:{
            type: String
        }
    },
    template:
    /*html*/
    `<div class="bg-black relative  flex justify-center" v-show = "picclick">  
    <img :src ="bigimage" class=" object-none w-2/5 p-10" >
    <img class = "h-8 w-8 absolute top-0 right-0" src="./images/4.png" v-on:click="backClick">
  </div>`,
  methods:{
      backClick(){
          this.$emit('back-click')
      }
      
  }
}
)