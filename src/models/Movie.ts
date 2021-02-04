import IMovie from "../interfaces/Movie";

export default class Movie implements IMovie{
    title: string;
    genre: string;
    rating: number;
    id: number;
    totalSeat: Number;
    remainSeat: number;
    //this가 무엇일까 instance는 무엇일까
    constructor(title:string,genre:string,rating:number,id:number,totalSeat?:number,remainSeat?:number){
        this.title=title;
        this.genre=genre;
        this.rating=rating;
        this.id = id;
        this.totalSeat = totalSeat;
        this.remainSeat = remainSeat;
    }

    print = () =>{
        console.log(`제목:${this.title} 장르:${this.genre} 별점: ${this.rating} 아이디: ${this.id} 전체 좌석수: ${this.totalSeat} 잔여 좌석수: ${this.remainSeat}`)
    }
}