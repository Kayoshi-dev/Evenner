<template>
  <ion-col class="flat-button" :class="[`--${color}`, margin ? 'margin-right' : '']">
    <ion-card>
      <ion-icon slot="start" :icon="peopleOutline"></ion-icon>
      <h3>{{title}}</h3>
    </ion-card>
  </ion-col>
</template>

<script lang="ts">
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
  setup() {
    return {
      peopleOutline
    }
  },
  computed: {
    getIcon(): string {
      if(this.icon === "peopleOutline") {
        return peopleOutline
      }

      return "";
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
      background: rgba(230, 126, 34, 0.8);
    }

    &.--blue {
      background: rgba(52, 152, 219, 0.8);
    }

    &.--purple {
      background: rgba(155, 89, 182, 0.8);
    }

    &.--green {
      background: rgba(46, 204, 113, 0.8);
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