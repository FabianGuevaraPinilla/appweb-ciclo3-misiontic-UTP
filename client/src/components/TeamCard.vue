<template>
    <!-- Team-->
    <!-- :src="miembro.imagen"  -->
        <div class="team-member">
            <img class="mx-auto rounded-circle" :src="require('../assets' + miembro.imagen)" alt="..." />
            <h4 class="pt-3" style="font-size: 26px;">{{ miembro.nombre }}</h4>
            <p class="text-muted" style="font-size: 20px;" >{{ miembro.rol }}</p>
            <!-- <a class="btn btn-dark btn-social mx-2" href="#!"><span class="mdi mdi-twitter"></span></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"><span class="mdi mdi-facebook"></span></a> -->
            <a class="btn btn-dark btn-social mx-2" :href="miembro.linkedin"><span class="mdi mdi-linkedin"></span></a>
        </div>

</template>

<script>
    export default {
        name: "Team_Card",
        props: ['miembro']
    }
</script>

<style lang="scss" scoped>

.team-member {
    margin-bottom: 3rem;
    text-align: center;
        .btn-social {
            height: 2.5rem;
            width: 2.5rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            border-radius: 100%;
        }

        img {
            width: 14rem;
            height: 14rem;
            border: 0.5rem solid rgba(0, 0, 0, 0.1);
        }
}
</style>