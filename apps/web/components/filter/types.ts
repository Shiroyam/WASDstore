export interface Props {
    data: IFilter[]
}

export interface IFilter {
    _id: string,
    type: string,
    name: string,
}
