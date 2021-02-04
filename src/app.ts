import MovieService from './services/Movie';

const APP = () =>{
    console.log("APP Start");

    const movieService = new MovieService()

    movieService.add('어벤져스','액션',5,150);
    movieService.add('스파이더맨','액션',4,250);

    
    movieService.printById(0);
    movieService.remove();
    movieService.printAll();


};

export default APP;