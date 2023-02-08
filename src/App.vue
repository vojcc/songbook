<template>
  <div>
    <the-navbar/>
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <Component :is="Component"/>
      </transition>
    </router-view>

  </div>

</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { mapActions } from "vuex";
import seedSongs from "./song-seeder";

export default {
  components: {TheNavbar},

  computed: {
    storage() {
      return localStorage.length;
    },
  },

  methods: {
    ...mapActions('songs', {
      setSongs: 'setSongs'
    }),

    checkMemoryUsage() {
      var _lsTotal = 0,
          _xLen, _x;
      for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
          continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
      }
      console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
    },

    getSongsFromLocalStorage() {
      for (let i=0; i<localStorage.length; i++ ) {
          let data = localStorage.getItem(i);
          data = data.replace(/\[/g,"<span class='verse'><span class='chord'>").replace(/]/g,"</span></span>").replace(/\\n/g, '<br>');

          this.setSongs(JSON.parse(data))
      }
    },
  },

  created() {
    this.getSongsFromLocalStorage();
    // seedSongs();
    // this.checkMemoryUsage();
  },
}
</script>

<style>

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.2s ease;
}

</style>