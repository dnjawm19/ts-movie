import MovieService from './services/Movie';

const APP = () =>{
    console.log("APP Start");

    const movieService = new MovieService()

    movieService.add('어벤져스','액션',5);
    movieService.add('스파이더맨','액션',4);

    movieService.printById(1);
    movieService.get(1);


};

export default APP;