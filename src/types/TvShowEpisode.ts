import type TvShow from './TvShow'

export default interface TvShowEpisode {
    id: number
    name: string
    airDate: string
    airTime: string
    episodeNumber: number
    tvShow: TvShow
}
