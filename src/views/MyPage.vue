<template>
  <div>MyPage {{ getUserInfo }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("login", ["getUserInfo"]),
  },
};
</script>

<style></style>
