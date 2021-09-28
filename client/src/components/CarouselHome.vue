<template>
  <!--- Carrusel: Slider --->
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item" :class="posSlider === 1 ? 'active' : ''">
        <img src="../assets/Slider2.png" class="d-block w-100" alt="..." />
      </div>

      <div class="carousel-item" :class="posSlider === 2 ? 'active' : ''">
        <img src="../assets/Slider.png" class="d-block w-100" alt="..." />
      </div>

      <div class="carousel-item" :class="posSlider === 3 ? 'active' : ''">
        <img src="../assets/Slider3.png" class="d-block w-100" alt="..." />
      </div>
    </div>

    <button class="carousel-control-prev" type="button" @click="posLess">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" @click="posAdd">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!--- Fin del Carrusel: Slider --->
</template>
<script>
export default {
  data() {
    return {
      minPos: 1,
      maxPos: 3,
      posSlider: 1,
    };D
  },
  methods: {
    posAdd() {
      if (this.posSlider === this.maxPos) {
        this.posSlider = this.minPos;
      } else {
        this.posSlider++;
      }
    },
    posLess() {
      if (this.posSlider === this.minPos) {
        this.posSlider = this.maxPos;
      } else {
        this.posSlider--;
      }
    },
  },
};
</script>