<template>
  <div class="citacao">
    <!-- {{ texto }} -->
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  // props: ["texto"],
  created() {
    // When not inner of <keep-alive></keep-alive>
    console.log("[Citacao] created");
  },
  detroyed() {
    // When not inner of <keep-alive></keep-alive>
    console.log("[Citacao] detroyed");
  },
  actived() {
    // When inner of <keep-alive></keep-alive>
    console.log("[Citacao] actived");
  },
  deactived() {
    // When inner of <keep-alive></keep-alive>
    console.log("[Citacao] deactived");
  },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
