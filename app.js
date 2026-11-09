  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        username: '',
        password: ''
      }
    },
    methods: {
        login() {
            console.log('login in with ', this.username, ' and ', this.password)
        }
    }
  }).mount('#app')