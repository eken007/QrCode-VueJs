<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="space-y-4">
      <form class="space-y-1">
        <div>
          <label>Titre</label>
          <input v-model="form.titre" required type="text" id="input-group-1" class=" bg-gray-200 border border-white  text-sm rounded-lg focus:ring-[#FF9900] focus:border-[#FF9900] block w-full p-2.5   focus:outline-none" placeholder="ex: le titre"/>
        </div>
        <div>
          <label>Contenu</label>
          <input v-model="form.contenu" required type="text" id="input-group-1" class=" bg-gray-200 border border-white  text-sm rounded-lg focus:ring-[#FF9900] focus:border-[#FF9900] block w-full p-2.5   focus:outline-none" placeholder="ex: contenu du code"/>
        </div>
        <div>
          <label>Code Couleur arriere plan</label>
          <input v-model="form.couleur" required type="text" id="input-group-1" class=" bg-gray-200 border border-white  text-sm rounded-lg focus:ring-[#FF9900] focus:border-[#FF9900] block w-full p-2.5   focus:outline-none" placeholder="ex: #FF9900"/>
        </div>
        <div>
          <label>Taille</label>
          <input v-model="form.size" required type="text" id="input-group-1" class=" bg-gray-200 border border-white  text-sm rounded-lg focus:ring-[#FF9900] focus:border-[#FF9900] block w-full p-2.5   focus:outline-none" placeholder="ex: 200"/>
        </div>
      </form>
      <div class="w-auto flex justify-center">
        <div class="p-2 space-y-2">
          <p class="text-2xl text-center">{{ form.titre }}</p>
          <div class="w-auto flex justify-center">
            <qrcode-vue :value="form.contenu" :background="form.couleur" :size="form.size" level="H" />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        form:{
          titre:'',
          contenu:'',
          couleur:'#FFFFFF',
          size: 100,
        }
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>