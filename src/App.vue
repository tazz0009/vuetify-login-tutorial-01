<template>
  <v-app id="inspire">
    <NavDra />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavDra from "./components/NavDra";

export default {
  components: {
    NavDra,
  },
};
</script>
