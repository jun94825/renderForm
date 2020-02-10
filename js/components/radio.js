import { radio_checkbox } from '../extends/radio_checkbox.js';

export default Vue.component('radio', {
  watch: {
    display() {
      if (!this.display) {
        this.data.Answer = '';
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
          eventBus.$emit('connect', { Guid, status: true });
        });
        // return false; // 增加這行遇到的原因：兩個選項綁定同個題目時，跳題效果就會消失，詳細原因有待深入研究。
        return;
      }
      data.Options.forEach(option => {
        if (option.Binding.length > 0 && option.Guid !== item.Guid) {
          console.log('False');
          option.Binding.forEach(Guid => {
            eventBus.$emit('connect', { Guid, status: false });
          });
        }
      });
    },
  },
  extends: radio_checkbox,
});
