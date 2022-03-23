<template>
  <div id="app">
    {{tableData}}
    <el-form :inline="true"  class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input v-model="username" placeholder="Approved by" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="password" placeholder="Activity zone">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="tologin">Query</el-button>
      </el-form-item>
    </el-form>asd
  </div>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name:'app',
  data() {
    const formInline = {
      username:'',
      password:''
    };
    return {
      formInline: formInline,
      tableData:'',
      username:'',
      password:''
    }
  },
  methods:{
      tologin(){
        this.$axios
            .post('http://localhost:8081/login', {
              username: this.username,
              password: this.password
            })
            .then(alert('1'))
      },
    add(){
      this.$axios
          .post('http://localhost:8081/system/user/c')
          .then(alert('1'))
    }
  },
  created() {
    this.$axios
        .get('http://localhost:8081/system/user')
        .then(response => (this.tableData = response.data))

  }
};
</script>