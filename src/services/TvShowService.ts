import type TvShowEpisode from '@/types/TvShowEpisode'

const placeholderImage = 'https://via.placeholder.com/210x295?text=No+Image'

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
                    url: episode.show.url ?? '',
                    name: episode.show.name ?? '',
                    type: episode.show.type ?? 'Unknown',
                    genres: episode.show.genres ?? [],
                    status: episode.show.status ?? 'Unknown',
                    premiered: episode.show.premiered,
                    image:
                        episode.show.image?.medium ??
                        episode.show.image?.original ??
                        placeholderImage,
                    summary: episode.show.summary ?? '',
                    isLiked: false
                }
            }
            return tvShowEpisode
        })
        return tvShowEpisodes
    }

    async searchTvShows(query: string) {
        const response = await fetch(`${this.url}/search/shows?q=${query}`)
        const data = await response.json()
        const tvShows = data.map((show: any) => {
            return {
                id: show.show.id,
                url: show.show.url ?? '',
                name: show.show.name ?? '',
                type: show.show.type ?? 'Unknown',
                genres: show.show.genres ?? [],
                status: show.show.status ?? 'Unknown',
                premiered: show.show.premiered,
                image: show.show.image?.medium ?? show.show.image?.original ?? placeholderImage,
                summary: show.show.summary ?? '',
                isLiked: false
            }
        })
        return tvShows
    }
}

export default new TvShowService()
