<template>
    <div>
      <h1>Articles</h1>
      <!-- Kui artiklid on saadud, siis kuvatakse need -->
      <div v-if="articles.length > 0">
        <div v-for="article in articles" :key="article.id">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
        </div>
      </div>
      <!-- Kui andmed ei ole veel saadud -->
      <div v-else>
        <p>Loading articles...</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'Articles',
    setup() {
      // Artiklite muutujad, mille väärtus on alguses tühi massiiv
      const articles = ref<any[]>([]);
  
      // Funktsioon, mis toob artiklid API-st
      const fetchArticles = async () => {
  try {
    const response = await axios.get(
      'https://api.delfi.ee/content-api-feed-exporter/v1/json?channel%5B%5D=077cf08a-20'
    );
    console.log('API vastus:', response.data); // Kuvame andmete struktuuri

    // Kontrollime andmestruktuuri enne määramist
    if (response.data && Array.isArray(response.data)) {
      articles.value = response.data;
    } else if (response.data && response.data.articles) {
      articles.value = response.data.articles;
    } else {
      console.error('Andmestruktuur ei ole oodatud:', response.data);
      articles.value = [];
    }
  } catch (error) {
    console.error('Viga artiklite laadimisel:', error);
    articles.value = [];
  }
};

  
      // Käivitage fetchArticles, kui komponent on montaažitud
      onMounted(fetchArticles);
  
      // Tagastage kõik vajalikud väärtused, et need oleksid template'is kergesti ligipääsetavad
      return {
        articles
      };
    }
  });
  </script>
  
  <style scoped>
  /* Siia saate lisada oma komponendi stiilid */
  </style>
  