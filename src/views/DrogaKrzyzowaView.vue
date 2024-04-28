<template>
      <main>
        <article class="DKElement">
            <span class="date">&nbsp; 2024-43-32  &nbsp;</span>
            <h1>JAKIŚ DŁUGI TYTUŁ</h1>
            <p>Zdjęcia</p>
            <p class="Desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id maxime, sapiente
                vero dicta minus atque officiis nulla amet quae recusandae soluta, veniam numquam modi, 
                magnam eveniet nam rem commodi qui corrupti. Minima vitae porro placeat omnis temporibus ipsa at! 
                Saepe voluptate quisquam deleniti assumenda tenetur quibusdam sit incidunt adipisci?
            </p>
        </article>

        <article class="DKElement" v-for="DKElem in Documents">
          <span class="date">&nbsp; {{ DKElem.date }}  &nbsp;</span>
          <h1> {{ DKElem.title }} </h1>
  
          <carousel v-if="DKElem.photos.length > 1" :wrapAround="true" :autoplay="3000" :pauseAutoplayOnHover="true">
            <slide class="carousel-cell" v-for="Photo in DKElem.photos" :key="Photo.name">
              <img :src="Photo" class="carousel-photo"/>
            </slide>
  
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel >
  
          <div v-if="Update.photos.length == 1" class="single-photo">
            <img :src="Update.photos[0]" class="carousel-photo"/>
          </div>
  
  
          <p class="desc" v-html="Update.desc"></p>
      </article>

      </main>
</template>
<script setup>
  import AddDK from '@/components/AddDrogaKrzyzowa.vue';
</script>
<script>
  import db from '@/firebase/init.js';
  import { collection, Doc, getDocs, query, orderBy } from 'firebase/firestore';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },

    mounted () {
      this.getUpdates();
    },

    data () {
      return {
        UpdatesShownOnPage: [],
        Documents: [],
        currPage: 0
      }
    },

    methods: {
      async getUpdates () {
        const collectionReference = collection(db, 'Updates');
        const querySnapshot = await getDocs(query(collectionReference, orderBy("date", "desc")));

        querySnapshot.forEach(doc => {
          this.Documents.push({...doc.data()});
        });

        const months = [
          "Styczeń",
          "Luty",
          "Marzec",
          "Kwiecień",
          "Maj",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień"
        ];

        this.Documents.forEach(doc => {
          const docDate = doc.date.toDate();
          const newDate = `${docDate.getDate()} ${months[docDate.getMonth()]} ${docDate.getFullYear()}`;
          doc.date = newDate;
        });

      }
    }
  }
</script>

<style src="@/styles/Main.css">
</style>
<style src="@/styles/DKST.css" scoped>
</style>
<style src="@/styles/quill-style.css">
</style>