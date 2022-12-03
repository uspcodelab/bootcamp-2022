<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="icon mr-4" color="#05161E">
        mdi-comment-text-multiple</v-icon
      >
      <h1>Blog</h1>
    </div>
    <v-row class="py-3">
      <v-col v-for="blog in blogs.slice(0, 3)" :key="blog.title" cols="4">
        <v-card color="#dae3f0" class="black--text">
          <v-card-title class="text-h6 text-ubuntu">{{
            blog.title
          }}</v-card-title>
          <v-card-subtitle
            ><span style="color: #797979" class="text-ubuntu">{{
              blog.subtitle
            }}</span></v-card-subtitle
          >
          <v-card-actions class="mt-5">
            <v-btn :to="blog.link" color="black" outlined> Ver mais </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    blogs: [
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
    ],
  }),
};
</script>

<style scoped>
.text-ubuntu {
  font-family: "Ubuntu" !important;
}
</style>
