<template>
  <v-app>
    <Navandsidebar></Navandsidebar>

    <v-main>
      <v-container class="mt-10">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navandsidebar from "@/views/DBlayout/navandsidebar";

export default {
  components: {
    Navandsidebar,
  },
};
</script>
<style>
@font-face {
  font-family: fontlao;
  src: url("./assets/font/boonhome-700.woff");
}
.fontnav,
.fontnew {
  font-family: fontlao;
}
</style>
