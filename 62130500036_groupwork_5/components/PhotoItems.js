app.component('photo-items',{
    props:{
        filterl:{
            type: Array
            }
    },
    template:
    /*html*/
    `<div class="max-w-xl mx-auto">
    <ul>
      <li v-for="(task,index) in filterl">
        <div class="flex items-center m-8" v-show="task.show">
          <button v-on:click="pclicking(index)"><img :src="task.img" class="max-w-sm max-h-60"></button>
          <span class="m-8 ">{{task.title}}</span>
          <button v-on:click="toggleDone(index)"><i class="material-icons">favorite</i></button>
          <p>{{task.like}}</p>
        </div>
      </li>
    </ul>
  </div>`,
  methods:{
      toggleDone(index){
          this.$emit('toggle-done',index)
      },
      pclicking(index){
          this.$emit('p-clicking',index)
      }
  }
}
)