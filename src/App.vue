<template>
  <nav v-if="!['home', 'admin'].includes(this.$route.name)" class="MainNav">
    <router-link to="/" class="NavHref">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M506.555 208.064 263.859 30.367a13.3 13.3 0 0 0-15.716 0L5.445 208.064c-5.928 4.341-7.216 12.665-2.875 18.593s12.666 7.214 18.593 2.875L256 57.588l234.837 171.943a13.236 13.236 0 0 0 7.848 2.57c4.096 0 8.138-1.885 10.744-5.445 4.342-5.927 3.054-14.251-2.874-18.592z" fill="#E5D4C0" opacity="1" data-original="#E5D4C0" class=""></path><path d="M442.246 232.543c-7.346 0-13.303 5.956-13.303 13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52s-66.52 29.842-66.52 66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303 5.956-13.303 13.303V470.9c0 7.347 5.957 13.303 13.303 13.303h133.029c6.996 0 12.721-5.405 13.251-12.267.032-.311.052-.651.052-1.036V342.01c0-22.009 17.905-39.914 39.914-39.914s39.914 17.906 39.914 39.914V470.9c0 .383.02.717.052 1.024.524 6.867 6.251 12.279 13.251 12.279h133.029c7.347 0 13.303-5.956 13.303-13.303V245.847c-.001-7.348-5.957-13.304-13.304-13.304z" fill="#E5D4C0" opacity="1" data-original="#E5D4C0" class=""></path></g></svg>
    </router-link>
    <router-link to="/droga-krzyzowa-srodowisk-tworczych" class="NavHref">Droga Krzyżowa Środowisk Twórczych</router-link>
    <router-link to="/zaduszki-jazzowe-srodowisk-tworczych" class="NavHref" >Zaduszki jazzowe Środowisk Twórczych</router-link>
    <router-link to="/warsztaty-muzyki-liturgicznej" class="NavHref">Warsztaty Muzyki Liturgicznej</router-link>
    <router-link to="/warsztaty-muzyki-liturgicznej" class="NavHref">Spotkania formacyjne</router-link>
    <div class="contactBtn"></div>
    <div class="contactInfo">
      ks. dyr. Adam Kraska <br>
      Duspasterz Środowisk Twórczych <br>
      Invictus8591@gmail.com
  </div>
  </nav>
  <router-view class="MainRouterView"/>
</template>

<script>
</script>
<style src="@/styles/AppStyle.css" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
