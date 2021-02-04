export default interface IMovie {
    title: string;
    //@TODO enum으로 변경하기
    genre: string;
    rating: number;
    id: number;
    totlaSeat?: number;
    remainSear?: number;
}