import { createRouter, createWebHistory } from "vue-router";
import SongsList from "../views/SongsList.vue";
import SongText from "../views/SongText.vue";
import AddSong from "../views/AddSong.vue";
import EditSong from "../views/EditSong.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: SongsList,
    },

    {
      path: "/songs/:songId",
      name: "song-text",
      component: SongText,
      props: true
    },
    {
      path: "/add",
      name: "add-song",
      component: AddSong,
    },
    {
      path: "/edit/:editId",
      name: "edit-song",
      component: EditSong,
      props: true
    },
  ],
});

export default router;
