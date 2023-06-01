import shell from "./shell.js";

const { useQuasar } = Quasar;
const app = Vue.createApp({
  components: {
    shell: shell,
  },

  setup() {
    const $q = useQuasar();
  },
});

app.use(Quasar);
app.mount("#q-app");
