<template>
  <div>
    <h2>New Post</h2>
    <form @submit.prevent="onSubmit">
      <textarea
        cols="30"
        rows="10"
        v-model="inputTxt" 
        :disabled="disabled"></textarea>
        <!-- inputTxt 대신 currentPost.text -->
        <br />
      <input type="submit" :value="btnTxt" :disabled="disabled" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSaving: false,
      inputTxt: "",
      /*
      currentPost : {
        text: '',
        author: '',
        isCompleted: false
      }
      */
    };
  },
  computed: {
    btnTxt() {
      return this.isSaving ? "Saving..." : "Save";
    },
    disabled() {
      return this.isSaving;
    },
  },
  methods: {
    onSubmit() {
      this.isSaving = true;
      const post = { text: this.inputTxt };
      // const post = { text: this.currentPost };
      this.$store.dispatch("addPost", post).then(() => {
        this.isSaving = false;
        this.inputTxt = "";
        this.$router.push("/posts");
      });
    },
  },
};
</script
>
<style scoped>
input {
  margin: 1rem 0;
}
</style>