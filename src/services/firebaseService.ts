import { initializeApp } from 'firebase/app'
import type { CollectionReference, Firestore } from 'firebase/firestore'
import { getFirestore, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore/lite'
import firebaseConfig from '../../firebase.config.json'

const firebaseApp = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(firebaseApp)

type TvShow = {
    id: number
    url: string
    name: string
    type: string
    genres: string[]
    status: string
    premiered: string
    image?: string
    summary: string
}

class TvShowService {
    #collection: CollectionReference

    constructor(firebaseDb: Firestore) {
        this.#collection = collection(firebaseDb, 'liked_tv_shows')
        console.log(firebaseConfig)
    }

    async getTvShows(): Promise<TvShow[]> {
        const snapshot = await getDocs(this.#collection)
        const tvShows: TvShow[] = snapshot.docs.map((doc) => {
            const data = doc.data()
            const tvShow: TvShow = {
                id: data.id,
                url: data.url,
                name: data.name,
                type: data.type,
                genres: data.genres,
                status: data.status,
                premiered: data.premiered,
                image: data.image?.medium ?? data.image?.original ?? null,
                summary: data.summary
            }
            return tvShow
        })
        return tvShows
    }

    async addTvShow(tvShow: TvShow) {
        await addDoc(this.#collection, tvShow)
    }

    async removeTvShow(tvShowId: number) {
        const querySnapshot = await getDocs(this.#collection)
        querySnapshot.forEach(async (doc) => {
            const data = doc.data()
            if (data.id === tvShowId) {
                await deleteDoc(doc.ref)
            }
        })
    }
}

export default new TvShowService(firestoreDb)
