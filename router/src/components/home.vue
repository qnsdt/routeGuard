<template>
  <div>
      <p>{{msg}}</p>
      <div>asdsadas</div>
      <button @click="removeStog">清除用户</button>
  </div>
</template>

<script>
export default {
  data () {
      return {
          msg: '跳过了登录页'
      }
  },
  methods: {
      removeStog(){
          window.localStorage.removeItem('userInfo')
      }
  }
}
</script>

