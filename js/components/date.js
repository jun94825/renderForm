import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('date', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div>
        <span v-if="data.Required" class="badge badge-danger mr-1">必填</span>
          <h5 class="d-inline">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <div class="mt-2 mt-md-0 ml-3 ml-md-2">
          <input type="date" class="date form-control" v-model="data.Answer"/>
        </div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
