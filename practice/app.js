const app = Vue.createApp(
    {
        // data, functions
        // template: '<h2> I amm the template </h2>'
        data() {
            return {
                title: 'Hello World',
                num: 1,
                isShowButton: false,
                x: 0,
                y: 0,
                books: [
                    { title: 'Book 1', author: 'Author 1', img: 'assets/cat1.jpeg', isFav: true },
                    { title: 'Book 3', author: 'Author 3', img: 'assets/cat3.jpeg', isFav: false },
                    { title: 'Book 2', author: 'Author 2', img: 'assets/cat2.jpeg', isFav: true },
                ],
                url: 'https://azmanbarraquias.github.io/',
            }
        },

        methods: {
            changeTitle() {
                this.title = 'Hello Po'
                this.num = 0
            },

            showButton() {
                this.isShowButton = !this.isShowButton
            },
            handleEvent() {
                console.log(e, e.type)
            },
            clickFev(e) {
                e.isFav = !e.isFav
            },
            handleEvent(e, data) {
                if (data) {
                    console.log(e, e.type, data)
                }
            },
            handleMousemove(e) {
                this.x = e.offsetX
                this.y = e.offsetY
            },
        },

        computed: {
            filteredBooks() {
                return this.books.filter((book) => book.isFav)
            }
        }
    }
)

app.mount('#app')