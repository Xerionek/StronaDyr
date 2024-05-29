<template>
  <div class="bg">
    <main id="MainHome">
      <img src="@/assets/WelcomeTxt.webp" alt="Powitanie">
      <div class="wrapper">
        <!-- <router-link to="/droga-krzyzowa-srodowisk-tworczych" class="btnHomeHref">{{ firstBtnTxt }}</router-link>
        <router-link to="/zaduszki-jazzowe-srodowisk-tworczych" class="btnHomeHref">{{ secondBtnTxt }}</router-link> -->
        <router-link to="/warsztaty-muzyki-liturgicznej" class="btnHomeHref">{{ thirdBtnTxt }}</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      firstBtnTxt: "",
      secondBtnTxt: "",
      thirdBtnTxt: "",
    }
  },
  mounted() {
      this.animateBtns();
  },
  methods: {
    async animateBtns () {
        const fTarget = " Droga Krzyżowa \n Środowisk Twórczych ";
        const sTarget = " Zaduszki jazzowe \n Środowisk Twórczych ";
        const tTarget = " Warsztaty \n Muzyki Liturgicznej ";
        let currChar = 0;
        let interval = setInterval(() => {
          currChar++;
          if (currChar < fTarget.length) {
            this.firstBtnTxt = fTarget.slice(0, currChar);
          }
          if (currChar < sTarget.length) {
            this.secondBtnTxt = sTarget.slice(0, currChar);
          } else {
            clearInterval(interval);
          }
          if (currChar < tTarget.length) {
            this.thirdBtnTxt = tTarget.slice(0, currChar);
          }
        }, 20);
      }
  }
}
</script>

<style src="@/styles/HomeViewStyle.css" scoped>
</style>
