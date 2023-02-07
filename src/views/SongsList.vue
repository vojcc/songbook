<template>
  <div>
    <div class="flex justify-center mt-6 mb-2">
      <label class="relative block w-4/5 sm:w-2/3 lg:w-1/2">
        <input
            v-model.trim="searchInput"
            class="w-full border border-gray-400 drop-shadow-md rounded-md py-4 pl-3 pr-10 outline-none bg-slate-200"
            type="text"
            placeholder="Wyszukaj">
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
           <button class="px-1" @click="clearInput">
              <img alt="" src="https://img.icons8.com/ios-filled/20/676767/delete-sign--v1.png"/>
          </button>
        </span>
      </label>
    </div>

    <song-item
        v-for="(song, index) in filteredSongs"
        :key="index"
        :song="song">
    </song-item>
  </div>
</template>

<script>
import SongItem from "../components/SongItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {SongItem},

  data() {
    return {
      searchInput: '',
    }
  },

  methods: {
    clearInput() {
      this.searchInput = '';
    }
  },

  computed: {
    ...mapGetters('songs', {
      songs: 'getSongs'
    }),

    filteredSongs() {
      return this.songs.filter(song => {
        return song.title.toLowerCase().includes(this.searchInput.toLowerCase());
      })
    }
  },
}
</script>

