<template>
    <div class="login">
        <div class="title">
            <h2>璞瑞微商城总控管理系统</h2>
            <span></span>
        </div>
        <div class="welcome">
            欢迎登陆
        </div>
        <div class="count">
            <input type="text" placeholder="账号" v-model="loginData.userName">
            <span></span>
        </div>
        <div class="password">
            <input type="text" placeholder="密码" v-model="loginData.password">
            <span></span>
        </div>
        <div class="code">
            <input type="text" placeholder="验证码" v-model="loginData.code">
            <span></span>
            <img :src="imgUrl" alt="" class="cur" @click="getImgCode">
        </div>
        <div class="remeend">
            <input type="checkbox" class="cur" id="remeend"/>
            <i></i>
            <label class="cur" for='remeend'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记住密码</label>
        </div>
        <button class="loginButton cur" @click="login">登陆</button>
    </div>
</template>
<script>
  import md5 from 'js-md5'

  export default {
    data () {
      return {
        'imgUrl': '',
        loginData: {
          'code': '',
          'userName': '',
          'password': ''
        }
      }
    },
    created () {
      this._getImgUrl()
    },
    methods: {
      _getImgUrl () {
        this.imgUrl = window.location.origin + '/p/api/system/login/getCodeImg/100/40' + '?' + new Date().getTime()
        console.log(this.imgUrl)
      },
      login () {
        let loginDataCopy = Object.assign({}, this.loginData)
        loginDataCopy.password = md5(md5(loginDataCopy.password) + loginDataCopy.code)
        this.$api.post('system/platLogin', loginDataCopy, data => {
          sessionStorage.setItem('token', data.data)
         // this.$router.push({path: '/app/user/userList'})
          console.log(data)
        })
        this.$router.push({path: '/app/user/userList'})
      },
      getImgCode () {
        this._getImgUrl()
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
    .login {
        height: 500px;
        width: 425px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -250px 0 0 -200px;
        .title {
            height: 120px;
            width: 400px;
            line-height: 120px;
            position: relative;
            h2 {
                font-size: 20px;
                color: #323232;
                padding-left: 106px;
            }
            span {
                display: block;
                width: 22px;
                height: 22px;
                background: url(../assets/images/wficon.png) no-repeat -106px -1px;
                position: absolute;
                left: 78px;
                top: 50px;
            }

        }
        input {
            border: none;
            height: 46px;
            line-height: 45px;
            width: 300px;
            outline: none;
            padding-left: 35px;
            padding-top: 21px;
            border-bottom: 1px solid #e9f1f6;

        }
        input::placeholder {
            color: #cecece;
        }
        .welcome {
            height: 20px;
            line-height: 20px;
            font-size: 20px;
            color: #000;
            width: 100%;
            padding-left: 50px;
            margin-top: 35px;
        }
        .count {
            padding-left: 50px;
            height: 68px;
            position: relative;
            span {
                position: absolute;
                display: block;
                width: 15px;
                height: 20px;
                background: url('../assets/images/wficon.png') no-repeat -130px -1px;
                position: absolute;
                left: 50px;
                top: 34px;

            }

        }
        .password {
            padding-left: 50px;
            height: 68px;
            position: relative;
            span {
                position: absolute;
                display: block;
                width: 15px;
                height: 20px;
                background: url('../assets/images/wficon.png') no-repeat -147px -1px;;
                position: absolute;
                left: 50px;
                top: 34px;
            }
        }
        .code {
            padding-left: 50px;
            height: 68px;
            position: relative;
            span {
                position: absolute;
                display: block;
                width: 15px;
                height: 20px;
                background: url('../assets/images/wficon.png') no-repeat  -164px 1px;
                position: absolute;
                left: 50px;
                top: 34px;

            }
            img {
                display: block;
                width: 80px;
                height: 30px;
                position: absolute;
                right: 34px;
                top: 22px;
            }

        }
        .remeend {
            height: 44px;
            line-height: 44px;
            padding-left: 50px;
            position: relative;
            input {
                width: 16px;
                height: 16px;
                position: absolute;
                left: 50px;
                top: 14px;
                z-index: 1;
                opacity: 0;
            }
            span {
                font-size: 14px;
                color: #8c8c8c;

            }
            i {
                display: inline-block;
                width: 16px;
                height: 16px;
                position: absolute;
                left: 50px;
                top: 14px;
                background: url("../assets/images/check.png") no-repeat;
                background-size: 100% 100%;
            }
            input:checked + i {
                background: url("../assets/images/check_a.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .loginButton {
            height: 50px;
            width: 332px;
            margin-left: 50px;
            background: #83b0ec;
            border: none;
            outline: none;
            line-height: 50px;
            color: #ffffff;
            font-size: 16px;
        }

    }
</style>