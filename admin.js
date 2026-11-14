  const { createApp } = Vue

  createApp({
    data() {
      return {
        headers: [
            "Firstname", 
            "Lastname", 
            "Gender", 
            "Birthdate", 
            "Role",
            "Email", 
            "Creation_date"
        ],
        administrations: []
      }
    },
    mounted(){
      this.getAdministrations()
    },
    methods: {
        getAdministrations() {
            const url = "api.php?q=administrations"
            fetch(url)
                .then(response =>{
                  response.json()
                    .then(data => {
                    console.log(data)
                    data.forEach(administration => {
                      this.administrations.push(administration)
                    })
                  })
                })
          }
    },
  }).mount('#administration')