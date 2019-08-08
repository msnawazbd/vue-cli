<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <table class="table table-bordered">
      <tr>
        <th>User Id</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{todo.id}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.completed}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      todos: []
    }
  },
  methods:{
    getTodos(){
      this.$http.get('/todos')
              .then(response => {
                this.todos = response.data;
                console.log(this.todos);
              })
              .catch(errors => console.log(errors))
    }
  },
  mounted() {
    this.getTodos();
  }
}
</script>
