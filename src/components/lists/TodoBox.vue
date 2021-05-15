<template>
  <div class="list-name">
    <h2 v-if="!isEditting">
      {{ name }}
    </h2>
    <form v-if="isEditting" @submit.prevent="edit(id)" class="edit-form">
      <input type="text" v-model="editListName" :placeholder="name" />
      <button><i class="fas fa-edit"></i></button>
    </form>
    <div class="list-actions">
      <button @click="toggleEditList()">
        <i class="fas fa-edit"></i></button
      ><button @click="removeList(index)">
        <i class="fas fa-minus-circle"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "id", "index"],
  data() {
    return {
      isEditting: false,
      editListName: "",
    };
  },
  computed: {
    lists() {
      return this.$store.getters.listsArray;
    },
  },
  methods: {
    removeList(index) {
      this.lists.splice(index, 1);
    },
    toggleEditList() {
      this.isEditting = !this.isEditting;
    },
    edit(id) {
      const payloadObject = {
        el: id,
        name: this.editListName,
      };
      this.$store.commit("editListName", payloadObject);
      this.isEditting = false;
    },
  },
};
</script>
