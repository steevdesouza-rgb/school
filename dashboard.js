  const { createApp } = Vue

  createApp({
    data() {
      return {
        headers: [
            "Eleves", 
            "Professeurs", 
            "Administration",
            "Classes"
        ],
        Arrays: []
      }
    },
    mounted(){
      this.getArrays()
    },
    methods: {
        getArrays() {
            const url = "api"
            fetch(url)
                .then(response =>{
                  response.json()
                    .then(data => {
                    console.log(data)
                    data.forEach(array => {
                      this.Arrays.push(array)
                    })
                  })
                })
          }
    },
  }).mount('#dashboard')