export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'JScript',
            author: 'Fowler',
            price: 32,
            coverImage: 'https://covers.zlibcdn2.com/covers/books/1c/b3/90/1cb390e6ff7d11dd1a92c92a2ae324ba.jpg'
        },
        {
            id: 2,
            title: 'React',
            author: 'Nygard',
            price: 45,
            coverImage: 'https://covers.zlibcdn2.com/covers/books/78/72/74/7872743894e432d99205d370e86ceeae.jpg'
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'))
                } else{
                    resolve(this.data);
                }
            }, 700)
        })
    }
}