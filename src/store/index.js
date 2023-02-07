import {createStore} from "vuex";
import songsModule from "@/store/songs/index";

const store = createStore({
    modules: {
        songs: songsModule,
    },
});

export default store;
