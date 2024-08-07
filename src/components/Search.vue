<script setup lang="ts">
defineProps(["search"]);
const emit = defineEmits(["updateSearch"]);

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("updateSearch", target.value);
};
</script>

<template>
  <input
    type="type"
    placeholder="Search"
    class="border px-3 py-1 rounded"
    :value="search"
    @input="handleChange"
  />
</template>