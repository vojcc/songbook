<template>
  <nav class="bg-slate-200 border border-gray-300 drop-shadow-md">
    <div class="flex justify-between px-4">
      <router-link :to="{name: 'add-song'}" class="px-4 py-3">
        <img alt="" src="https://img.icons8.com/windows/32/676767/plus-math--v1.png"/>
      </router-link>

      <router-link :to="{name: 'home'}" class="px-4 py-3">
        <img v-if="$route.path !== '/'" alt="" src="https://img.icons8.com/ios/32/null/sheet-music.png"/>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
}
</script>
