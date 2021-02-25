app.component('photo-item', {
    props: { pics: Array

    },
    template:
        /*html*/
        ` 
        <div class="grid gap-4 grid-cols-4 flex items-start px-3 mx-auto pt-7 ">
        <div class="container px-5 mx-auto lg:px-3 pt-7 " v-for="(pic,index) in pics" v-show="pic.show">
            <div class=" flex flex-wrap w-full">
                <div class="w-full p-1 md:p-2 shadow-2xl rounded-lg  ">

                    <img v-bind:src="pic.img" class="cursor-pointer object-cover h-48 w-full rounded-lg shadow-2xl"
                        @click="check(index)" @dblclick="toggleDone(index)">

                    <div class=" flex justify-between w-auto h-1/2 mx-auto cursor-pointer"
                        @click="toggleDone(index)">
                        <div class="pt-3">
                            <h3 class="font-normal text-sm">{{pic.Pname}}</h3>
                            <span class="text-xs ">{{pic.Oname}}</span>
                        </div>
                        <i v-show="pic.done" class="material-icons text-2xl  text-red-500 mr-3">favorite</i>
                    </div>

                </div>
            </div>
        </div>
    </div>
        `,
    data() {
        return {}
    },
    methods: {
        toggleDone(index) {
            this.pics[index].done = !this.pics[index].done
        },
        check (index){
            this.$emit("check-image",index)
        }
    }
})