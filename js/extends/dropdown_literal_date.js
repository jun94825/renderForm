const dropdown_literal_date = Vue.extend({
  props: ['data', 'index', 'ScoreEnable'],
  data() {
    return {
      display: true,
    };
  },
  watch: {
    display() {
      if (!this.display) {
        this.data.Answer = '';
      }
    },
  },
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.data.Guid) {
        this.display = info.status;
      }
    });
  },
});

export { dropdown_literal_date };
