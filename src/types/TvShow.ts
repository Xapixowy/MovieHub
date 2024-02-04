export default interface TvShow {
    id: number
    url: string
    name: string
    type: string
    genres: string[]
    status: string
    premiered: string
    image?: string
    summary: string
    isLiked: boolean
}
