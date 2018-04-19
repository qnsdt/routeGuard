<template>
  <div class="hello">
    <label for="">用户名</label>
    <input type="text" v-model="userInfo" placeholder="请输入用户名">
    <br>
    <br>
    <label for="">密码</label>
    <input type="text" v-model="psw" placeholder="请输入密码">
    <br>
    <br>
    <button @click="save">登录</button>

    <button @click="aaa">获取值</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
      userInfo: '',
      psw: ''
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapMutations([
      'SAVE_USER'
    ]),
    save(){
      if(this.userInfo != '' && this.psw != ''){
        this.SAVE_USER({user:this.userInfo})
        // window.localStorage.userInfo = this.userInfo;
        window.localStorage.setItem('userInfo',this.userInfo)
      }else{
        alert('用户名密码不能为空')
      }
    },
    aaa(){
      console.log(window.localStorage.getItem('userInfo'))
    }
  }
}
</script>