import type TvShowEpisode from '@/types/TvShowEpisode'

class TvShowService {
    url: string = 'http://api.tvmaze.com/'

    async getSchedule() {
        const response = await fetch(`${this.url}/schedule`)
        const data = await response.json()
        const tvShowEpisodes = data.map((episode: any) => {
            const tvShowEpisode: TvShowEpisode = {
                id: episode.id,
                name: episode.name,
                airDate: episode.airdate,
                airTime: episode.airtime,
                episodeNumber: episode.number,
                tvShow: {
                    id: episode.show.id,
                    url: episode.show.url,
                    name: episode.show.name,
                    type: episode.show.type,
                    genres: episode.show.genres,
                    status: episode.show.status,
                    premiered: episode.show.premiered,
                    image: episode.show.image?.medium ?? episode.show.image?.original ?? null,
                    summary: episode.show.summary,
                    isLiked: false
                }
            }
            return tvShowEpisode
        })
        return tvShowEpisodes
    }
}

export default new TvShowService()
