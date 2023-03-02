<template>
  <div class="flex justify-center">
    <div class="flex flex-col h-[calc(100dvh-70px)] w-4/5 sm:w-2/3 lg:w-1/2 space-y-6">
      <div></div>
      <div>
        <label class="text-sm font-semibold text-gray-600">
          Tytuł piosenki
          <input
              v-model.trim="song.title"
              class="w-full border border-gray-400 drop-shadow-md rounded-md py-4 pl-3 pr-10 outline-none bg-slate-200"
              type="text">
        </label>
      </div>

      <div>
        <label class="text-sm font-semibold text-gray-600">
          Wykonawca
          <input
              v-model.trim="song.artist"
              class="w-full border border-gray-400 drop-shadow-md rounded-md py-4 pl-3 pr-10 outline-none bg-slate-200"
              type="text">
        </label>
      </div>

      <div class="flex flex-col flex-grow">
        <label class="flex flex-col flex-grow text-sm font-semibold text-gray-600">
          Treść piosenki
          <textarea v-model.trim="song.content" class="flex-grow border border-gray-400 drop-shadow-md rounded-md bg-slate-200 outline-none px-3 py-3"></textarea>
        </label>
        <div class="flex justify-end">
          <button @click="editSong" class="mt-2 bg-transparent hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 border border-gray-400 drop-shadow-md rounded-md outline-none">
            Zapisz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddSong",
  props: ['editId'],

  data() {
    return {
      song: '',
    }
  },

  methods: {
    getSong() {
      this.song = JSON.parse(localStorage.getItem(this.editId));
    },

    async editSong() {
      if (this.song.title && this.song.artist) {
        localStorage.setItem(this.editId, JSON.stringify({
          id: this.editId,
          title: this.song.title,
          artist: this.song.artist,
          content: this.song.content,
        }));

        await this.$router.push('/');
        window.location.reload();
      } else {
        navigator.vibrate(200);
        if (!this.song.title && this.song.artist) {
          this.errors.title = 'Podaj tytuł!';
          this.errors.artist = '';
        } else if (this.song.title && !this.song.artist) {
          this.errors.title = '';
          this.errors.artist = 'Podaj wykonawcę!';
        } else {
          this.errors.title = 'Podaj tytuł!';
          this.errors.artist = 'Podaj wykonawcę!';
        }
      }
    }

  },
  created() {
    this.getSong();
  }
}
</script>
