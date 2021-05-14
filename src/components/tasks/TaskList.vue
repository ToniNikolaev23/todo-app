<template>
  <div
    class="list-task"
    @click="changeCompleteStatus"
    :class="completed ? 'completed' : ''"
  >
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "label", "completed", "listId"],
  methods: {
    changeCompleteStatus() {
      this.$emit("changeStatus", this.id, this.listId);
    },
  },
};
</script>
