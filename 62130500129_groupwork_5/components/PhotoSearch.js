app.component('photo-search', {
    props: {
        pics: Array
    },
    template:
        /*html*/
        ` 
        <i v-show="!search"
        class="material-icons flex flex-wrap text-right text-4xl mr-32 cursor-pointer md:justify-end "
        @click="startSearch">search</i>
    <div v-show="search" class="flex flex-wrap justify-center ml-auto md:flex-no-wrap md:justify-end">
        <input
            class="w-1/4 px-4 py-2 mr-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0 lg:w-full xl:w-1/3"
            placeholder="Please enter text for searching photos." type="text" v-model="inputSearch"
            @keyup="searching">
        <button
            class="inline-flex mr-28 px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
            @click="startSearch">
            Cancel
        </button>

        `,
    data() {
        return {
            search: false,
            inputSearch: '',
        }
    },
    methods: {
        startSearch() {
            this.search = !this.search;
            this.inputSearch = '';
        },
    },
    computed: {

        searching() {
            for (let i = 0; i < this.pics.length; i++) {
                if (this.pics[i].Pname.search(this.inputSearch) !== -1 || this.pics[i].Oname.search(this.inputSearch) !== -1) {
                    this.pics[i].show = true
                } else {
                    console.log(i)
                    this.pics[i].show = false
                }
            }
        }
    }
})