<template>
  <v-container>
    <h1>Blog</h1>
    <v-container class="cards">
      <v-col v-for="blog in blogs.slice(0, 3)" :key="blog" cols="4">
        <v-card margin:5em;>
          <v-card-title class="text-h6">{{ blog.title }}</v-card-title>
          <v-card-subtitle
            ><span style="color: #797979">{{
              blog.subtitle
            }}</span></v-card-subtitle
          >
          <v-card-actions>
            <v-btn
              :to="blog.link"
              color="black"
              class="card-link"
              flat
              outlined
            >
              Ver mais
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    var blogs = [
      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet",
        link: "/blog1",
      },

      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet",
        link: "/blog2",
      },

      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet",
        link: "/blog3",
      },
    ];
    return {
      blogs: blogs,
    };
  },
};
</script>

<style scoped>
.v-card {
  background-color: #dae3f0;
  color: black;
  min-width: 9em;
  min-height: 6em;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card-link {
  margin-top: 25%;
}
</style>
