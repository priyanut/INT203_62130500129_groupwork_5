app.component('photo-view', {
    props: {
 showpic: Array,
 pics: Array
    },
    template:
        /*html*/
        ` 
        <div style="height:36rem ;"
            class=" w-full shadow-lg bg-gray-900 flex flex-row item-center justify-center my-7 p-4"
            v-show="showpic.check">

            <div class="w-1/2 flex item-center justify-end ">
                <img class="h-full " v-bind:src="pics[showpic.index].img">
            </div>
            <h5 class="w-5/12 font-light text-2xl  tracking-wider uppercase p-3 ml-10 my-auto text-gray-200 ">
                <span class="my-9 text-4xl ">{{pics[showpic.index].Pname}} </span> <br>
                {{pics[showpic.index].Oname}} </h5>

            <div class="flex justify-end ">
                <i class="material-icons  text-3xl self-start cursor-pointer text-gray-200"
                    @click="check(-1)">highlight_off</i></div>
        </div>

        `,
    data() {
        return {}
    },
    methods: {
        check (index){
            this.$emit("check-image",index)
        }

    },
})