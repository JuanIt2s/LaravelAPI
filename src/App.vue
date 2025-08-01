<template>
  <Boton msg="Llamar a API" @funcion_btn="llamarApi" />
  <Boton msg="Listar" @funcion_btn="() => {mostrar = !mostrar; numRandom = Math.floor(Math.random() * 20);}" />
  <section>
    <article class="p-2" v-if="mostrar">
      <h1>Datos de API</h1>
      <p>Nombre -> {{ datos.results[numRandom].name }}</p>
      <p>Especimen -> {{ datos.results[numRandom].gender }}</p>
      <p>Genero -> {{ datos.results[numRandom].gender }}</p>
      <p>imagen</p> 
      <img :src="datos.results[numRandom].image" alt="imagen" loading="lazy"></img>
      <p>Estado {{ datos.results[numRandom].status }}</p>

    </article>
  </section>
</template>

<script setup lang="ts">
import Boton from './components/Boton.vue';
import { useApiContext } from './pinia/useApiContext';
import { ref } from 'vue';

const datos = ref<Object>([]);
const mostrar = ref<boolean>(false);

const numRandom = ref<number>(Math.floor(Math.random() * 20));

const apiContext = useApiContext();


// Funcion para cargar los datos de API
const llamarApi = async () => {
  datos.value = await apiContext.api('https://rickandmortyapi.com/api/character', 'GET');
  console.log(datos.value.results);
}


</script>


<style scoped>

</style>
