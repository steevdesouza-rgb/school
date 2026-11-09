
async function getEleves() {
    const url = "api.php?q=eleves";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        console.log(result.length);

        const tablebody = document.getElementById('tablebody');

        result.forEach (eleves => {
            const ligne = document.createElement('tr');

            const celluleFirstname = document.createElement('td');
            celluleFirstname.textContent = eleves.firstname;

            const celluleLastname = document.createElement('td');
            celluleLastname.textContent = eleves.lastname;

            const celluleGender = document.createElement('td');
            celluleGender.textContent = eleves.gender;

            const celluleBirthdate = document.createElement('td');
            celluleBirthdate.textContent = eleves.birthdate;

            const celluleClasses = document.createElement('td');
            celluleClasses.textContent = eleves.classes;

            const celluleCreation_date = document.createElement('td');
            celluleCreation_date.textContent = eleves.creation_date;

            ligne.appendChild(celluleFirstname);
            ligne.appendChild(celluleLastname);
            ligne.appendChild(celluleGender);
            ligne.appendChild(celluleBirthdate);
            ligne.appendChild(celluleClasses);
            ligne.appendChild(celluleCreation_date);

            tablebody.appendChild(ligne);

        });
        // downloadMyFile(){
        //     const link = document.createElement('a');
        //     link.setAttribute('href', 'abc.net/files/test.ino');
        //     link.setAttribute('download', `products.csv`);
        //     document.body.appendChild(link);
        //     link.click();
        //     link.remove();
        // }

        } catch (error) {
        console.error(error.message);
    }
}

const button = document.getElementById('button_event');

button.addEventListener('click', function() {
  // Add a class for the click effect
  button.classList.add('button-clicked');
  
  // Remove the class after animation completes
  setTimeout(function() {
    button.classList.remove('button-clicked');
  }, 300);
});

// const div1 = document.getElementById("table_body");

// div1.addEventListener("animationend", myEndFunction);

// // Add Event Listener to window
// window.addEventListener("load", function () {
//   document.getElementById("demo").innerHTML = "Page is fully loaded!";
// });

// async function getNumEleves() {
//     const url = "api.php?q=eleves";
    // fetch(url)
    //     .then(response => {
    //         // const result = response.json();
    //         console.log(response.json().length);
    //         // return response.json();
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
//     try{
//         const response = await fetch(url);
//         if(!response.ok) {
//             throw new Error (`Response status : ${response.status}`);
//         }
//         const result = await response.json();
//         console.log(result);
//         console.log(result.length);

//         const tablebody = document.getElementById('tbl_content');
//         const ligne = document.createElement('tr');
//         const cellulenummer = document.createElement('td');
//         cellulenummer.textContent = result.length;

//         ligne.appendChild(cellulenummer);
//         tablebody.appendChild(ligne);

//     } catch (error) {
//         console.error(error.message);
//     }
// }

async function getProfesseurs() {
    const url = "api.php?q=professeurs";
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        const tableBody = document.getElementById('tabl');
        result.forEach (professeurs => {
            const ligne = document.createElement('tr');

            const celluleFirstname = document.createElement('td');
            celluleFirstname.textContent = professeurs.firstname;

            const celluleLastname = document.createElement('td');
            celluleLastname.textContent = professeurs.lastname;

            const celluleGender = document.createElement('td');
            celluleGender.textContent = professeurs.gender;

            const celluleBirthdate = document.createElement('td');
            celluleBirthdate.textContent = professeurs.birthdate;

            const celluleEmail = document.createElement("td");
            celluleEmail.textContent = professeurs.email;

            const celluleCourses = document.createElement('td');
            celluleCourses.textContent = professeurs.courses;

            const celluleCreation_date = document.createElement('td');
            celluleCreation_date.textContent = professeurs.creation_date;

            ligne.appendChild(celluleFirstname);
            ligne.appendChild(celluleLastname);
            ligne.appendChild(celluleGender);
            ligne.appendChild(celluleBirthdate);
            ligne.appendChild(celluleEmail);
            ligne.appendChild(celluleCourses);
            ligne.appendChild(celluleCreation_date);

            tableBody.appendChild(ligne);
        });
    } catch (error) {
        console.error(error.message);
    }
}


async function getAdmin() {
    const url = "api.php?q=administrations";
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        const tableBody = document.getElementById('body');
        result.forEach (administrations => {
            const ligne = document.createElement('tr');

            const celluleFirstname = document.createElement('td');
            celluleFirstname.textContent = administrations.firstname;

            const celluleLastname = document.createElement('td');
            celluleLastname.textContent = administrations.lastname;

            const celluleGender = document.createElement('td');
            celluleGender.textContent = administrations.gender;

            const celluleBirthdate = document.createElement('td');
            celluleBirthdate.textContent = administrations.birthdate;

            const celluleRole = document.createElement('td');
            celluleRole.textContent = administrations.courses;

            const celluleEmail = document.createElement("td");
            celluleEmail.textContent = administrations.email;

            const celluleCreation_date = document.createElement('td');
            celluleCreation_date.textContent = administrations.creation_date;

            ligne.appendChild(celluleFirstname);
            ligne.appendChild(celluleLastname);
            ligne.appendChild(celluleGender);
            ligne.appendChild(celluleBirthdate);
            ligne.appendChild(celluleRole);
            ligne.appendChild(celluleEmail);
            ligne.appendChild(celluleCreation_date);

            tableBody.appendChild(ligne);
        });
    } catch (error) {
        console.error(error.message);
    }
}

async function getNum() {
    const url = "api.php";
    let numEleves = 0;
    let numProfs = 0;
    let numAdmins = 0;
    let numClasses = 0;

    // numEleves
    
    try {
        const url = "api.php?q=eleves";
        const response = await fetch(url);
        

        if(!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        console.log(result.length);
        numEleves = result.length;

        // const classes = ["6eme", "5eme", "4eme", "3eme", "2nd", "1ere", "tle"];
        // classes.sort();
        // console.log(classes);
        // console.log(classes.length);
        // numClasses = classes.length;

        let elvClasses = [];
        result.forEach(eleve => {
            elvClasses.push(eleve.classes);
        });
        classes = [...new Set(elvClasses)];
        console.log(classes);
        numClasses = classes.length;
        

    }  catch (error) {
        console.error(error.message);
    }

    // professeur
    try {
        const url = "api.php?q=professeurs";
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error (`Response status : ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        console.log(result.length);
        numProfs = result.length;

    } catch(error) {
        console.error(error.message);
    }

    // admins
    try {
        const url = "api.php?q=administrations";
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error (`Response status : ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        console.log(result.length);
        numAdmins = result.length;
    } catch(error) {
        console.error(error.message);
    }

    const tableBody = document.getElementById('tbl_content');
    const ligne = document.createElement('tr');
    
    const celluleNumEleves = document.createElement('td');
    celluleNumEleves.textContent = numEleves;

    const celluleNumProfs = document.createElement('td');
    celluleNumProfs.textContent = numProfs;

    const celluleNumAdmins = document.createElement('td');
    celluleNumAdmins.textContent = numAdmins;

    const celluleNumClasses = document.createElement('td');
    celluleNumClasses.textContent = numClasses;

    ligne.appendChild(celluleNumEleves);
    ligne.appendChild(celluleNumProfs);
    ligne.appendChild(celluleNumAdmins);
    ligne.appendChild(celluleNumClasses);

    tableBody.appendChild(ligne);

}

function checkScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    // Get element position relative to viewport
    const position = element.getBoundingClientRect();
    
    // If element is in viewport
    if(position.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', checkScroll);

// Run once on page load
checkScroll();