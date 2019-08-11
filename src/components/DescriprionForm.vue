<template>
  <div>
    <b-row>
    <b-col sm='6'>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Описание" label-size='lg'>
          <b-form-group>
            <b-form-select id="select-type" v-model="form.type" :options="types" required></b-form-select>
          </b-form-group>
          <b-form-group>
            <b-form-input id="input-price" type="number" v-model="form.price" placeholder="Цена" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-col sm='3'>
            <b-form-checkbox sm='3' id="checkbox-exist" v-model="form.exist">Наличие</b-form-checkbox>
            </b-col>
            <b-col sm='3'>
            <b-form-checkbox sm='3' id="checkbox-repeatable" v-model="form.repeatable">Повторяемо</b-form-checkbox>
            </b-col>
          </b-form-group>
          <b-form-group>
            <b-form-textarea id="textarea-description" v-model="form.description" placeholder="Описание"></b-form-textarea>
          </b-form-group>
          <b-form-group>
            <b-form-textarea id='textarea-tags' v-model="form.tags" placeholder="Теги"></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">Применить</b-button>
          <b-button type="reset" variant="danger">Очистить</b-button>
        </b-form-group>
      </b-form>
    </b-col>
    <b-col sm="6">
      <b-form-textarea id="textarea-plaintext" plaintext v-model="description_text" rows="4" max-rows="30"></b-form-textarea>
    </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          type: null,
          description: '',
          exist: true,
          repeatable: false,
          tags: '',
          price: '',
        },
        types: [{text: 'Тип', value: null, disabled: true}, 'Кулон', 'Брошь', 'Браслет', 'Кольцо', 'Серьги'],
        show: true,
        description_text: '',
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        const exist = this.form.exist ? 'В наличии' : 'Уже куплено'
        const repeatable = this.form.repeatable ? 'повторяемо' : 'в единственном экземпляре' 
        this.description_text = 
`${this.form.description}

${this.form.type}, ${this.form.price} ₽
${exist}, ${repeatable}

${this.form.tags}`;
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.type = null
        this.form.description = ''
        this.form.exist = true
        this.form.repeatable = false
        this.form.price = ''
        this.form.tags = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        }),
        this.description_text = ''
      }
    }
  }
</script>