<template>
    <main>
        <div class="form" v-if="!isLogedIn">
            <input type="email" placeholder="email" v-model="email"> <br>
            <input type="password" placeholder="hasło" v-model="pass"> <br>
            <div class="wrapper">
                <button class="cancelBtn">Powrót</button>
                <button class="confirmBtn" @click="veryfyForm">Zaloguj</button>
            </div>
            <h2 class="errMessage" v-if="!isLogedIn">{{ errorMessage }}</h2>
        </div>
        <div class="adminPanel" v-if="isLogedIn">
            <div class="wrapper">
                <button @click="this.adminChoice = 1" class="AdminChoiceBtn">Dodaj aktualność do Drogi Krzyżowej</button>
            </div>
            
            <AddDK v-if="this.adminChoice == 1"/>
        </div>
    </main>
</template>
<script setup>
 import AddDK from '@/components/AddDrogaKrzyzowa.vue';
</script>
<script>
    import db from '@/firebase/init';
    import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
    export default {
        data () {
            return {
                email: "",
                pass: "",
                isLogedIn: true,
                errorMessage: "",
                adminChoice: 0,
            }
        },
        methods: {
            veryfyForm () {
                if (this.email.trim() != "" && this.pass.trim() != "") {
                    this.login ();
                }
            },
            async login () {
                const auth = getAuth();
                signInWithEmailAndPassword(
                    auth,
                    this.email.trim(),
                    this.pass.trim()
                ).then((credential) => {
                    this.isLogedIn = true;
                }).catch((error) =>  {
                    this.errorMessage = "Błędne dane logowania!";
                });
            }
        }
    }
</script>
<style src="@/styles/Main.css">
</style>
<style src="@/styles/Admin.css" scoped>
</style>