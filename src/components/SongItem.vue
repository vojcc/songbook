<template>
  <div class="flex justify-center mb-2">
    <div class="
        bg-slate-50
        rounded-md
        border border-gray-400 drop-shadow-md
        w-4/5 text-lg
        sm:w-2/3 sm:text-xl
        lg:w-1/2">

      <router-link :to="showSongLink">
        <div class="bg-slate-50 hover:cursor-pointer rounded-md px-4 pt-4">
          <div>
            <p class="font-semibold break-words">{{ song.title }}</p>
            <p class="text-gray-500 text-sm sm:text-base break-words">{{ song.artist }}</p>
          </div>
        </div>
      </router-link>

      <div class="border-b w-11/12 pb-1 m-auto"></div>

      <div>
        <div class="flex justify-end p-1 pb-2 pr-2 space-x-6">
          <router-link :to="editSongLink">
            <img alt="" src="https://img.icons8.com/metro/18/676767/pencil--v1.png"/>
          </router-link>

          <button v-if="song.id == this.storage" @click="deleteSong">
            <img alt="" src="https://img.icons8.com/metro/18/676767/delete.png"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['song'],

  methods: {
    deleteSong() {
      localStorage.removeItem(this.song.id);
      window.location.reload();
    }
  },

  computed: {
    storage() {
      return localStorage.length - 1;
    },

    showSongLink() {
      return {
        name: 'song-text',
        params: {
          songId: this.song.id,
        }
      };
    },
    editSongLink() {
      return {
        name: 'edit-song',
        params: {
          editId: this.song.id,
        }
      };
    }
  },
}
</script>
