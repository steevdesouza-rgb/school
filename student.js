  const { createApp } = Vue

  createApp({
    data() {
      return {
        headers: [
            "Firstname", 
            "Lastname", 
            "Gender", 
            "Birthdate", 
            "Classes", 
            "Creation_date"
        ],
        eleves: []
      }
    },
    mounted(){
      this.getEleves()
    },
    methods: {
        getEleves() {
            const url = "api.php?q=eleves"
            fetch(url)
                .then(response =>{
                  response.json()
                    .then(data => {
                    console.log(data)
                    data.forEach(eleve => {
                      this.eleves.push(eleve)
                    })
                  })
                })
          }
    },
  }).mount('#student')