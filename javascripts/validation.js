const app = new Vue({
    el: '#app',
    data: {
      errorMessage: 'Eメールが一致しません',
      formData: {
        name: '',
        email: '',
        emailConfirm: '',
        content: '',
        region: '',
      },
      regions: [
        '東北',
        '関東',
        '関西'
      ],
      confirmView: false,
    },
    methods: {
      openCheckArea() {
        this.confirmView = true;
      },
      closeCheckArea() {
        this.confirmView = false;
      }
    },
    computed: {
      validation: function() {
        return this.formData.email === this.formData.emailConfirm;
      },
    },
  })