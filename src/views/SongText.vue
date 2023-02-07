<template>
  <div class="flex flex-col justify-center">
    <div v-html="currentSong.title" class="
        m-auto mt-6 px-2
        text-xl
        lg:text-2xl
        xl:text-3xl
        font-bold">
    </div>
    <div
        v-html="currentSong.artist"
        class="m-auto mb-2 px-2 text-md text-gray-500">
    </div>

    <div class="border-b w-2/3 md:w-1/3 m-auto mb-6"></div>

    <div v-html="currentSong.content" class="
        px-2
        text-xl
        song-lyrics mx-auto">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SongText",
  props: ['songId'],

  data() {
    return {
      currentSong: '',
    }
  },

  computed: {
    ...mapGetters('songs', {
      songs: 'getSongs'
    })
  },

  methods: {
    findCurrentSong() {
      this.currentSong = this.songs.find(song => song.id == this.songId);
    }
  },

  created() {
    this.findCurrentSong();
  }
}
</script>

<style>
.song-lyrics {
  line-height: 2 !important;
}

.verse {
  position: relative;
  line-height: 2;
}

.chord {
  font-weight: bold;
  color: darkcyan;
  position: absolute;
  top: -1.2em;
  font-size: 0.8em;
  padding: 0 0.25em;
}
</style>