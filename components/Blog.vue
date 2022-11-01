<template>
  <div>
    <h1>Blog</h1>
    <v-row class="py-3">
      <v-col v-for="blog in blogs.slice(0, 3)" :key="blog.title" cols="4">
        <v-card color="#dae3f0" class="black--text">
          <v-card-title class="text-h6">{{ blog.title }}</v-card-title>
          <v-card-subtitle
            ><span style="color: #797979">{{
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
