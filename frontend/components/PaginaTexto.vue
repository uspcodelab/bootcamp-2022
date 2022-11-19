<template>
    <div>
        <SecaoTitulo
            :icon="icon"
            :title="title"
        >
        </SecaoTitulo>
        
        <v-container>
            <slot>

            </slot>
    
        </v-container>
    </div>
</template>
<script>
export default {
    props:{
       icon: String,
       title: String 
    },

};
</script>
<style>
p{
    max-width: 900px;
    text-align: justify;
}
h3{
    margin: 10px 0 10px 0;
}

</style>