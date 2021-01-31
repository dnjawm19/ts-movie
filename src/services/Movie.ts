import Movie from "../models/Movie";

export default class MovieService{
    movies: Movie[];

    //@TODO 생성자란 무엇인가? 언제 실행될까?
    constructor() {
        this.movies = [];
    }

    add = (title: string ,genre: string,rating: number) =>{
        const movie = new Movie(title,genre,rating,this.movies.length);
        this.movies.push(movie);
    }

    printAll = () =>{
        this.movies.forEach((movie) => {
            movie.print();
        })
    }
    //get함수를 입력받아 실행
    printById = (id:number) =>{
        this.movies.find((movie) => movie.id === id).print();
    };

    //무비서비스에 get만들고 아이디를 입력받아서 아이디에 해당하는 movie를 리턴
    get = (id:number): Movie => {
        return this.movies.find((movie) => movie.id === id);
    }

    //id를 입력 받아 해당하는 movie를 삭제
}