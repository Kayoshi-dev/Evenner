<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle class="ion-activatable">
            <img class="menu-toggle-icon" src="@/../public/assets/hamburger.svg">
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="qrCodeSharp"></ion-icon>
          </ion-button>
          <ion-avatar>
            <ion-img src="https://avatars2.githubusercontent.com/u/28494879?s=400&u=c38339379d45c8055e3c4a4a3ce7eb8741a6b258&v=4" class="icon-padding" alt="Avatar"></ion-img>
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </ion-avatar>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">
        <h2>Prochaine sortie</h2>
        <ion-card href="#" class="main-card">
          <ion-img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/22.jpeg"></ion-img>
          <div class="center-content">
            <div class="title-image">
              <h3>Lorem ipsum dolor.</h3>
            </div>

            <div class="date-image">
              28/07/2021
            </div>
          </div>
        </ion-card>

        <h2>Plus de sorties</h2>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonButton, IonHeader, IonMenuToggle, IonPage, IonToolbar, IonImg, IonCard, IonIcon, IonTitle, IonAvatar, IonRippleEffect} from '@ionic/vue';
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
    IonCard,
    IonTitle,
    IonAvatar,
    IonRippleEffect
  },
  setup() {
    return {
      qrCodeOutline, qrCodeSharp
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

ion-title, h2 {
  font-family: 'Gilroy', sans-serif;
  font-weight: 600;
  color: black;
}

h2 {
  font-size: 18px;
}

ion-padding {
  padding-top: 0;
}

ion-buttons {
  color: black;
  padding-right: 16px;
  margin-right: 0;
}

ion-card {
  margin: 0;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  max-height: 200px;
  font-family: "Gilroy Light", sans-serif;
}

.main-card {
  margin-bottom: 30px;
}

ion-img {
  filter: grayscale(60%);
}

ion-avatar {
  margin: 8px;
  height: 32px;
  width: 32px;
}

ion-menu-toggle {
  overflow: hidden;
}

.icon-padding {

}

.center-content {
  position: absolute;
  top: 50%;
  left: 5%;
  color: white;
}

.menu-toggle-icon {
  padding-left: 16px;
}
</style>