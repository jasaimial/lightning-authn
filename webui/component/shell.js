import intro from './intro.js';

export default {
  name: "shell",

  components: {
    'intro': intro
  },
  
  setup() {
    const { ref } = Vue;
    const { getScrollTarget, setVerticalScrollPosition } = Quasar.scroll;
    const drawer = ref(false);

    function scrollToElement(id) {
      const el = document.getElementById(id);
      if (el) {
        const target = getScrollTarget(el);
        setVerticalScrollPosition(target, el.offsetTop, 500);
      }
    }

    return { drawer, scrollToElement };
  },

  template: /* html */ `
    <q-layout view="hHh lpR lfr" v-cloak>
      <q-header>
        <q-toolbar>
          <q-btn dense flat round>
            <img src="https://fastapi.tiangolo.com/img/icon-white.svg">
          </q-btn>
          <q-toolbar-title>Time Preference</q-toolbar-title>
          <q-space />
          <div class="q-gutter-md row" v-if="$q.screen.gt.xs">
            <q-btn no-caps flat label="First" @click="scrollToElement('first')"></q-btn>
            <q-btn no-caps flat label="Second" @click="scrollToElement('second')"></q-btn>
            <q-btn no-caps flat label="Third" @click="scrollToElement('third')"></q-btn>
            <q-btn no-caps flat label="Fourth" @click="scrollToElement('fourth')"></q-btn>
            <q-btn no-caps class="loginbtn" label="login" color="secondary">
              <q-menu>
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>login</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>

        </q-toolbar>
      </q-header>

      <q-page-container>
        <intro></intro>
      </q-page-container>
    </q-layout>
    `,
};
