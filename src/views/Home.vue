<template lang="pug">
  .wrapper
    header
      AppHeader
    main
      .subscribe(v-show='!send_success')
        h4(v-show='!send_error') {{$t("contacts.title")}}
        h4(v-show='send_error') {{$t("contacts.error_title")}}
        h6(v-show='!send_error') {{$t("contacts.description")}}
        .buttons
          input.buttons-input(v-model='email', type='text', :placeholder="$t('contacts.email')", :class="{'buttons-input-error': send_error}")
          .btn-main(@click='sendMail()')
            .btn-title {{$t("contacts.subscribe")}}
      .success-bar(v-show='send_success')
        h4 {{$t("contacts.success_title")}}
        .btn-main(@click='sendMail()')
      
</template>
<script>
import AppHeader from "../components/Header";
import axios from 'axios';
export default {
  data() {
    return {
      email: null,
      send: false,
      send_success: false,
      send_error: false
    };
  },
  methods: {
    sendMail () {
      this.send_success = this.validEmail();
      this.send_error = !this.validEmail();
      if (!this.send && this.send_success) {
        axios.post('http://b.arq.su/subscribe?email=' + this.email)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          })
        this.send = true
      }
    },
    validEmail () {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    }
  },
  components: {
    AppHeader
  }
};
</script>
<style lang="less" scoped>
@xs: ~"(max-width: 576px)";
@time-description: .25s;


.wrapper {
  position: absolute;
  display: grid;
  height: 100vh;
  grid-template-rows: 15vh 85vh;
  grid-template-columns: 50vw 50vw;

  background: url("../assets/img/background.png") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 10;
  overflow: hidden;
  header {
    grid-row: 1;
    grid-column: ~"1 / 3";
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  main {
    grid-row: 2;
    grid-column: ~"1 / 3";
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}




  
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 500px;
  padding: 0 8%;
  h4 {
    font-family: TT Norms;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    margin: 0;
    letter-spacing: -0.8125px;
    color: #000000;
    margin-bottom: 21px;
  }
  h6 {
    margin-bottom: 21px;
    font-family: TT Norms;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: -0.6875px;
    color: #000000;
  }
  .buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    font-family: TT Norms Regular;
    font-size: 16px;
    .buttons-input {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      outline: none;
      border: none;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      transition: box-shadow @time-description ease-in;
      height: 37px;
      padding-left: 15px;
      min-width: 320px;
      @media @xs {
        width: 100%;
      }
    }
    .buttons-input:hover {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      transition: box-shadow @time-description ease-in;
    }
    .buttons-input-error {
      box-shadow: 0 2px 10px rgba(255, 0, 0, 0.5);
      transition: box-shadow @time-description ease-in;
    }
    .btn-main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: #D05D5D;
      opacity: 1;
      transition: opacity @time-description ease-in;
      border-radius: 10px;
      padding: 10px 20px;
      width: 110px;
      @media @xs {
        width: 100%;
        margin-top: 25px;
      }
      .btn-title {
        color: white;
        margin-left: 5px;
      }
    }
    .btn-main:hover {
      cursor: pointer;
      opacity: 0.7;
      transition: opacity @time-description ease-in;
    }
    input {
      font-size: 16px;
      font-family: TT Norms Regular;
    }
  }
}
.subscribe {
  width: 100%; 
}
.success-bar {
  width: 100%; 
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}


</style>