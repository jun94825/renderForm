const radio_checkbox = Vue.extend({
  props: ['data', 'index'],
  template: `
    <div class="question" v-if="display">
      <div class="d-flex">
        <p class="required" v-if="data.Required">*</p>
        <h5 style="margin-bottom: 0;">{{ index + 1 }}. {{ data.Title }} : </h5>
      </div>
      <div class="d-flex align-items-center flex-wrap">
        <div
          class="d-flex align-items-center mt-3"
          v-for="(item, index) in data.Options"
          :key="index"
        >
          <input
            :type="data.Type"
            :id="item.Guid"
            :value="item.Guid"
            v-model="data.Answer"
            @change="checkBinding(data, item)"
          />
          <label :for="item.Guid">{{ item.Value }}</label>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      display: true,
    };
  },
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.data.Guid) {
        this.display = info.status;
      }
    });
  },
});

export { radio_checkbox };
