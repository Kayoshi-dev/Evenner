<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <img class="menu-toggle-icon" src="/assets/hamburger.svg">
          </ion-menu-toggle>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="qrCodeSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>



    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">
        <h1>Prochaine sortie</h1>
        <ion-card href="#">
          <ion-img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/22.jpeg"></ion-img>
          <div class="center-content">
            <div class="title-image">
              <h1>Lorem ipsum dolor.</h1>
            </div>

            <div class="date-image">
              28/07/2021
            </div>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonButton, IonHeader, IonMenuToggle, IonPage, IonToolbar, IonImg, IonCard, IonIcon} from '@ionic/vue';
import {qrCodeOutline, qrCodeSharp} from 'ionicons/icons';

export default {
  name: 'Home',
  components: {
    IonButtons,
    IonIcon,
    IonButton,
    IonContent,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonPage,
    IonImg,
    IonCard
  },
  setup() {
    return {
      qrCodeOutline, qrCodeSharp
    }
  }
}
</script>

<style scoped>
ion-card {
  margin: 0;
  border-radius: 20px;
}

ion-img {
  filter: grayscale(60%);
}

.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.menu-toggle-icon {
  padding-left: 16px;
}
</style>