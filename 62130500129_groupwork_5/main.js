const app = {
    data() {
        return {
            pics: [{
                    Pname: "ยิมโนหนามโหด <3",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1507236827745-1dbaaeb68a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                    done: false,
                    show: true
                },
                {
                    Pname: "Mammillaria",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1563474612791-26932f5a07b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
                    done: false,
                    show: true
                },
                {
                    Pname: "ปลูกกลางแจ้ง",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1539571711714-62cd2534f96e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80',
                    done: false,
                    show: true
                },
                {
                    Pname: "เพาะพันธุ์ในโรงเรือน",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1520515080697-c1f99f3137cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                    done: false,
                    show: true
                },
                {
                    Pname: "พืชอวบน้ำ",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60',
                    done: false,
                    show: true
                },
                {
                    Pname: "ต้นหยกนำโชคจิ๋ว",
                    Oname: "Unsplash",
                    img: 'https://images.unsplash.com/photo-1563474613175-b97377f713dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                    done: false,
                    show: true
                }

            ],
            search: false,
            inputSearch: '',
            showpic: {
                check: false,
                index: 0
            }
        }
    },
    methods: {
        toggleDone(index) {
            this.pics[index].done = !this.pics[index].done
        },
        startSearch() {
            this.search = !this.search;
            this.inputSearch = '';
        },
        check(index) {
            if (index == -1) {
                this.showpic.check = false
            } else {
                this.showpic.check = true
                this.showpic.index = index
            }
        }
    },
    computed: {
        count() {
            return this.pics.length
        },
        countliked() {
            return this.pics.filter(p => p.done).length
        },
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

}
Vue.createApp(app).mount('#app')