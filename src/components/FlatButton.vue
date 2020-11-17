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
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 10px;
    height: 200px;
    font-family: 'Gilroy', sans-serif;

    &.--orange {
      background: rgba(230, 126, 34, 0.8) url("https://image.freepik.com/vecteurs-libre/fond-paysage-montagne-au-coucher-du-soleil-illustration-vectorielle_16058-10.jpg") 200px 300px;

    }

    &.--blue {
      background: rgba(52, 152, 219, 0.8) url("https://image.freepik.com/vecteurs-libre/faune-illustration-vectorielle-plane-photographe-nature-paysage-minimaliste-silhouette-loup_71609-1546.jpg") 200px;
    }

    &.--purple {
      background: rgba(155, 89, 182, 0.8) url(https://image.freepik.com/vecteurs-libre/groupe-jeunes-aide-baton-selfie-prenant-photo-amis-appareil-photo-smartphone-debout-ensemble-ville-parc-urbain-lever-du-soleil-paysage-fond-pleine-longueur-illustration-vectorielle-horizontale_48369-25742.jpg) 450px;
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