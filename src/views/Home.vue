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
          <ion-avatar @click="() => router.push('/profile')">
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

        <h2>Près de chez moi</h2>
        <ion-slides :options="slideOpts">
          <ion-slide v-for="x of 50" :key="x">
            <ion-card class="">
              <ion-img src="https://assets.puzzlefactory.pl/puzzle/247/857/original.jpg"></ion-img>
              <ion-card-header>
                <ion-card-title>Journée Japon {{x}}</ion-card-title>
                <ion-card-subtitle><ion-icon :icon="locationOutline" class="margin-right"></ion-icon>Grenoble</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away.
              </ion-card-content>
            </ion-card>
          </ion-slide>
        </ion-slides>

        <h2>Plus de sorties</h2>
        <ion-grid>
          <ion-row class="ion-justify-content-between">
            <FlatButton title="Plus de sorties" color="orange" margin="true" icon="peopleOutline"/>
            <FlatButton title="Voir mes sorties" color="blue" icon="peopleOutline"/>
          </ion-row>

          <ion-row>
            <FlatButton title="Mon entourage" color="purple" margin="true" icon="peopleOutline"/>
            <FlatButton title="Mes précédentes sorties" color="green" icon="peopleOutline"/>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonButton, IonHeader, IonMenuToggle, IonPage, IonToolbar, IonImg, IonCard, IonIcon, IonTitle, IonAvatar, IonRippleEffect, IonGrid, IonRow, IonSlides, IonSlide, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle} from '@ionic/vue';
import { qrCodeOutline, qrCodeSharp, locationOutline} from 'ionicons/icons';
import FlatButton from '../components/FlatButton';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  components: {
    FlatButton,
    IonSlides,
    IonSlide,
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
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonTitle,
    IonAvatar,
    IonRippleEffect,
    IonGrid,
    IonRow,
    IonCardSubtitle
  },
  setup() {
    const router = useRouter();
    const slideOpts = {
      slidesPerView: 1.5
    };
    return {
      qrCodeOutline,
      qrCodeSharp,
      locationOutline,
      slideOpts,
      router
    }
  }
}
</script>

<style scoped>

ion-title, h2 {
  font-family: 'Gilroy', sans-serif;
  font-weight: 600;
  color: black;
}

.margin-right {
  margin-right: 5px;
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

.main-card {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  max-height: 200px;
  font-family: "Gilroy Light", sans-serif;
  margin: 0 0 30px;
}

ion-card {
  border-radius: 15px;
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