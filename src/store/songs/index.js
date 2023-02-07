import songsMutations from "@/store/songs/mutations";
import songsActions from "@/store/songs/actions";
import songsGetters from "@/store/songs/getters";

export default {
    namespaced: true,
    state() {
        return {
            songs: [],
        }
    },

    mutations: songsMutations,
    actions: songsActions,
    getters: songsGetters
}
