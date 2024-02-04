import { initializeApp } from 'firebase/app'
import type { CollectionReference, Firestore } from 'firebase/firestore'
import { getFirestore, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore/lite'
import firebaseConfig from '../../firebase.config.json'
import type TvShow from '../types/TvShow'

const firebaseApp = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(firebaseApp)

class LikedTvShowService {
    #collection: CollectionReference

    constructor(firebaseDb: Firestore) {
        this.#collection = collection(firebaseDb, 'liked_tv_shows')
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
                image: data.image,
                summary: data.summary,
                isLiked: true
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

export default new LikedTvShowService(firestoreDb)
