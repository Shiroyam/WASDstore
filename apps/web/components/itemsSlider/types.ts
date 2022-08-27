export interface IAudio {
    _id: string;
    title: string;
    titleImg: string;
    price: string;
}

export interface ISliderProps {
    data: [IAudio]
}