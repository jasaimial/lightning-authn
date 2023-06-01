export default {
  name: "Intro",

  setup() {
    const { refs, ref, onMounted, onBeforeUnmount } = Vue;
    const { getScrollTarget, setVerticalScrollPosition } = Quasar.scroll;
    const drawer = ref(false);
    var sectionIndex = ref(0)
    const sectionIds = ['first', 'second', 'third', 'fourth'];

    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener('scroll', handleScroll);
    })
    
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener('scroll', handleScroll);
    })

    function handleKeyDown(event) {
      console.log(event.code);
      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          if (sectionIndex > 0) {
            sectionIndex = --sectionIndex % 4;
          }
          break;
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case 'Space':
          sectionIndex = ++sectionIndex % 4;
          break;
      }

      scrollToElement(sectionIds[sectionIndex]);
    }

    function handleScroll() {
      const divFirstOffset = document.getElementById('first').offsetTop
      const divSecondOffset = document.getElementById('second').offsetTop
      const divThirdOffset = document.getElementById('third').offsetTop
      const divFourthOffset = document.getElementById('fourth').offsetTop
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < (divFirstOffset + divSecondOffset) / 2) {
        sectionIndex = 0
      } else if (scrollTop < (divSecondOffset + divThirdOffset) / 2) {
        sectionIndex = 1;
      } else if (scrollTop < (divThirdOffset + divFourthOffset) / 2) {
        sectionIndex = 2;
      } else {
        sectionIndex = 3;
      }
    }

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
        <div>
        <section id="first" class="row items-center justify-center" class="scroll-section h-screen">
            <p class="text-h2 text-weight-bolder">Hard times create strong men</p>
        </section>
        <section id="second" class="row items-center justify-center" class="scroll-section h-screen">
            <p class="text-h2 text-weight-bolder">Strong men create good times</p>
        </section>
        <section id="third" class="row items-center justify-center" class="scroll-section h-screen">
            <p class="text-h2 text-weight-bolder">Good times create weak men</p>
        </section>
        <section id="fourth" class="row items-center justify-center" class="scroll-section h-screen">
            <p class="text-h2 text-weight-bolder">Weak men create hard times</p>
        </section>
        </div>
    `,
};
