<template>
    <form>
      <div class="wrapperFileInput">
        <label for="file-input" class="btnAddPhotos">Dodaj zdjęcia</label>
        <p>Ilość dodnych zdjęć: {{ photos.length }}</p> 
      </div>
      <input type="file" accept="image/*" @change="setPhotos" id="file-input" multiple> 
      <label for="">Tytuł:</label>
      <input type="text" v-model="title" class="title">
  
      <label for="">Opis:</label>
      <QuillEditor ref="quill" theme="snow" toolbar="essential" class="destArea"/>
  
      <label for="" class="lblSelectDay">Data</label>
      <input type="date" v-model="uDate" class="addDate">
  
      <div class="btnWrapper">
        <button class="btnCancel" @click="clearForm">Anuluj</button>
        <button @click="validateFrom" type="submit" class="btnConfirm">Dodaj</button>
      </div>
    </form>
</template>
  
<script>
    import db from '@/firebase/init.js';
    import {collection, addDoc, getDocs, query, doc, setDoc } from 'firebase/firestore';
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import router from '@/router/index.js';


    export default {
        name: 'AddDK',

        components: {
        QuillEditor
        },

        data () {
        return {
            photos: "",
            title: "",
            desc: "",
            uDate: "",
            files: [],
            loader: "",
        }
        },
        mounted () {
        this.uDate = new Date().toISOString().split("T")[0];
        },

        methods: {
        setPhotos (event) {
            this.photos = event.target.files;
            this.files = event.target.files;
        },

        clearForm () {
            this.photos = "";
            this.title = "";
            this.desc = "";
            this.uDate = "";
        },

        validateFrom () {
            if (this.title != "" && this.uDate != "") {
            this.desc = this.$refs.quill.getHTML();
            this.uploadPhotos();
            } else {
            alert("Pola tytuł i data są wymagane!");
            }
        },

        async uploadPhotos() {
            this.loader = this.$loading.show();
            const storage = getStorage();
            let folderName = this.title.toLowerCase().replaceAll(" ", "-").replaceAll("[.]", "").replaceAll(",", "") + Math.ceil(Math.random() * 1000000);

            let imagesURLs = [];

            for(let i = 0; i< this.files.length; i++) {
            const storageRef = ref(storage, `images/${folderName}/${this.files[i].name}`);

            const snapshot = await uploadBytes(storageRef, this.files[i]);
            const downloadURL = await getDownloadURL(snapshot.ref);

            imagesURLs.push(downloadURL);
            }
            this.addUpdate(imagesURLs);
        },

        async addUpdate (imagesURLs) {
            const collectionReference = collection(db, 'DrogaKrzyzowa');

            const Update = {
                // id : nextId,
                photos: imagesURLs,
                title: this.title,
                desc: this.desc,
                date: new Date(this.uDate)
            };

            await addDoc(collectionReference, Update);
            this.loader.hide();
            alert("Dodano Aktualność!");
            router.push('/');
        }
        }
    }
</script>
<style src="@/components/styles/AddDrogaKrzyzowa.css" scoped>
</style>
