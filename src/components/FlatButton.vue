<template>
  <ion-col class="flat-button" :class="[`--${color}`, margin ? 'margin-right' : '']">
    <ion-icon :icon="peopleOutline"></ion-icon>
    <ion-card>
      <h3>{{title}}</h3>
    </ion-card>
  </ion-col>
</template>

<script>
import {IonCol, IonIcon, IonCard} from '@ionic/vue';
import {peopleOutline} from 'ionicons/icons';

export default {
  name: "FlatButton.vue",
  components: {
    IonCol,
    IonCard,
    IonIcon,
  },
  props: {
    title: {
      required: true,
      type: String
    },
    color: {
      required: true,
      type: String
    },
    margin: {
      required: false,
      type: Boolean
    },
    icon: {
      required: true,
      type: String
    }
  },
  computed: {
    getIcon() {
      if(this.icon === "peopleOutline") {
        return peopleOutline
      }

      return "";
    }
  },
  data() {
    return {
      peopleOutline
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../theme/global";

  .flat-button {
    border-radius: 12px;
    padding: 5px;
    margin-bottom: 10px;
    height: 200px;
    font-family: 'Gilroy', sans-serif;

    &.--orange {
      background: url("https://image.freepik.com/vecteurs-libre/fond-paysage-montagne-au-coucher-du-soleil-illustration-vectorielle_16058-10.jpg");
      background: rgba(230, 126, 34, 0.8);
    }

    &.--blue {
      background: rgba(52, 152, 219, 0.8) url("https://image.freepik.com/vecteurs-libre/fond-paysage-montagne-au-coucher-du-soleil-illustration-vectorielle_16058-10.jpg");
    }

    &.--purple {
      background: rgba(155, 89, 182, 0.8) url(https://image.freepik.com/vecteurs-libre/illustration-concept-festivites_114360-4146.jpg) center ;
    }

    &.--green {
      background: rgba(46, 204, 113, 0.8) url("https://image.freepik.com/vecteurs-libre/illustration-vectorielle-paysage-montagne_1441-78.jpg") 200px 200px;
    }

    ion-card {
      background: none !important;
      color: white;
      box-shadow: none;
    }
  }

  .margin-right {
    margin-right: 10px;
  }

  ion-icon {
    width: 2.5rem;
    height: 2.5rem;
    padding: 1rem;
    color: white;
  }
</style>