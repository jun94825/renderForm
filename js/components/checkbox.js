import { radio_checkbox } from '../extends/radio_checkbox.js';

export default Vue.component('checkbox', {
  watch: {
    display() {
      if (!this.display) {
        this.data.Answer = [];
        this.data.Options.forEach(item => {
          if (item.Binding.length > 0) {
            item.Binding.forEach(Guid => {
              eventBus.$emit('connect', { Guid, status: false });
            });
          }
        });
      }
    },
  },
  methods: {
    checkBinding(data, item) {
      if (this.ScoreEnable && this.pMode) {
        this.$emit('show');
      }

      // 檢查綁定控制顯示與隱藏
      if (item.Binding.length > 0) {
        item.Binding.forEach(Guid => {
          if (data.Answer.length === 0) {
            eventBus.$emit('connect', { Guid, status: false });
          } else {
            data.Answer.forEach(value => {
              if (value === item.Guid) {
                eventBus.$emit('connect', { Guid, status: true });
              } else {
                eventBus.$emit('connect', { Guid, status: false });
              }
            });
          }
        });
      }
    },
  },
  extends: radio_checkbox,
});
