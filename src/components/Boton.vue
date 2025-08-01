<template>
  <div>
    <button class="bg-green-600 text-white rounded-md p-3 m-2 transition-ease-in-out duration-75 hover:bg-green-500" @click="$emit('funcion_btn')">{{ props.msg }}</button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { defineEmits } from 'vue';



type Props = {
  msg: string
}



const props = defineProps<Props>();
const emit = defineEmits(['funcion_btn']);

</script>

<style scoped>
  
</style>

// nombre
// especimen
// genero
// imagen
// estado