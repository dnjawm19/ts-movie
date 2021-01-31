import IMovie from "../interfaces/Movie";

export default class Movie implements IMovie{
    title: string;
    genre: string;
    rating: number;
    id: number;
    //this가 무엇일까 instance는 무엇일까
    constructor(title:string,genre:string,rating:number,id:number){
        this.title=title;
        this.genre=genre;
        this.rating=rating;
        this.id = id;
    }

    print = () =>{
        console.log(`제목:${this.title} 장르:${this.genre} 별점: ${this.rating} 아이디: ${this.id}`)
    }
}