  const { createApp } = Vue

  createApp({
    data() {
      return {
        headers: [
            "Firstname", 
            "Lastname", 
            "Gender", 
            "Birthdate",
            "Email",
            "Courses", 
            "Creation_date"
        ],
        professeurs: []
      }
    },
    mounted(){
      this.getProfesseurs()
    },
    methods: {
        getProfesseurs() {
            const url = "api.php?q=professeurs"
            fetch(url)
                .then(response =>{
                  response.json()
                    .then(data => {
                    console.log(data)
                    data.forEach(professeur => {
                      this.professeurs.push(professeur)
                    })
                  })
                })
          }
    },
  }).mount('#teacher')