const states = [
     {
        id: 6,
        state: "Bayelsa",
        capital: "Yenagoa",
        population: "2.39 Million",
        minerals: "Oil & gas",
        governor: "Douye Diri"
    },
    {
        id: 18,
        state: "Kaduna",
        capital: "Kaduna",
        population: "8.32 Million",
        minerals: "Lead/zinc, gold, kaolin",
        governor: "Uba Sani"
    },
    {
        id: 1,
        state: "Abia",
        capital: "Umuahia",
        population: "4.84 Million",
        minerals: "Crude oil, natural gas",
        governor: "Alex Otti"
    },
    {
        id: 15,
        state: "Gombe ",
        capital: "Gombe ",
        population: "4.62 Million",
        minerals: "Limestone, gypsum",
        governor: "Muhammad Yahaya"
    },
    {
        id: 2,
        state: "Adamawa",
        capital: "Yola",
        population: "5.24 Million",
        minerals: "Lead/zinc, baryte, limestone",
        governor: "Ahmadu Fintiri"
    },
    {
        id: 3,
        state: "Akwa Ibom",
        capital: "Uyo",
        population: "5.78 Million",
        minerals: "Oil & gas",
        governor: "Umo Eno"
    },
    {
        id: 4,
        state: "Anambra",
        capital: "Awka",
        population: "7.30 Million",
        minerals: "Natural gas, limestone",
        governor: "Charles Soludo"
    },
    {
        id: 5,
        state: "Bauchi",
        capital: "Bauchi",
        population: "7.54 Million",
        minerals: "Lead/zinc, baryte",
        governor: "Bala Mohammed"
    },
   
    {
        id: 7,
        state: "Benue",
        capital: "Makurdi",
        population: "6.69 Million",
        minerals: "Limestone, coal, salt",
        governor: "Hyacinth Alia"
    },
    {
        id: 8,
        state: "Borno",
        capital: "Maiduguri",
        population: "6.65 Million",
        minerals: "Gold, gypsum",
        governor: "Babagana Zulum"
    },
    {
        id: 9,
        state: "Cross River",
        capital: "Calabar",
        population: "4.18 Million",
        minerals: "Limestone, shale gas, lead",
        governor: "Bassey Otu"
    },
    {
        id: 10,
        state: "Delta",
        capital: "Asaba",
        population: "7.11 Million",
        minerals: "Oil & gas, limestone",
        governor: "Sheriff Oborevwori"
    },
    {
        id: 11,
        state: "Ebonyi",
        capital: "Abakaliki",
        population: "4.01 Million",
        minerals: "Limestone, salt",
        governor: "Francis Nwifuru"
    },
    {
        id: 12,
        state: "Edo",
        capital: "Benin City",
        population: "5.25 Million",
        minerals: "Limestone, clay, petroleum traces",
        governor: "Monday Okpebholo"
    },
    {
        id: 13,
        state: "Ekiti",
        capital: "Ado-Ekiti",
        population: "3.40 Million",
        minerals: "Marble, granite, limestone",
        governor: "Abiodun Oyebanji"
    },
    {
        id: 14,
        state: "Enugu",
        capital: "Enugu",
        population: "5.40 Million",
        minerals: "Coal, limestone, lead/zinc",
        governor: "Peter Mbah"
    },
    
    {
        id: 16,
        state: "Imo",
        capital: "Owerri",
        population: "6.07 Million",
        minerals: "Oil, natural gas",
        governor: "Hope Uzodinma"
    },
    {
        id: 17,
        state: "Jigawa",
        capital: "Dutse",
        population: "6.98 Million",
        minerals: "Gypsum, limestone",
        governor: "Umar Namadi"
    },
    {
        id: 19,
        state: "Kano",
        capital: "Kano",
        population: "16.25 Million",
        minerals: "Limestone, clay",
        governor: "Abba Yusuf"
    },
    {
        id: 20,
        state: "Katsina",
        capital: "Katsina",
        population: "9.30 Million",
        minerals: "Limestone, gypsum",
        governor: "Dikko Radda"
    },
    {
        id: 21,
        state: "Kebbi",
        capital: "Birnin Kebbi",
        population: "6.00 Million",
        minerals: "Iron ore, gold, gypsum",
        governor: "Nasir Idris"
    },
    {
        id: 22,
        state: "Kogi",
        capital: "Lokoja",
        population: "5.05 Million",
        minerals: "Iron ore, limestone",
        governor: "Ahmed Ododo"
    },
    {
        id: 23,
        state: "Kwara",
        capital: "Ilorin",
        population: "4.26 Million",
        minerals: "Gold, limestone",
        governor: "AbdulRazaq"
    },
    {
        id: 24,
        state: "Lagos",
        capital: "Ikeja",
        population: "15.77 Million",
        minerals: "Sand, clay, limestone",
        governor: "Babajide Sanwo‑Olu"
    },
    {
        id: 25,
        state: "Nasarawa",
        capital: "Lafia",
        population: "3.63 Million",
        minerals: "Solid minerals (iron, tin)",
        governor: "Abdullahi Sule"
    },
    {
        id: 26,
        state: "Niger",
        capital: "Minna",
        population: "6.72 Million",
        minerals: "Iron ore, talc, bitumen",
        governor: "Umar Bago"
    },
    {
        id: 27,
        state: "Ogun",
        capital: "Abeokuta",
        population: "6.45 Million",
        minerals: "Limestone, feldspar",
        governor: "Dapo Abiodun"
    },
    {
        id: 28,
        state: "Ondo",
        capital: "Akure",
        population: "5.47 Million",
        minerals: "Bitumen, limestone",
        governor: "Rotimi Akeredolu"
    },
    {
        id: 29,
        state: "Osun",
        capital: "Oshogbo",
        population: "4.24 Million",
        minerals: "Gold, stones, kaolin",
        governor: "Ademola Adeleke"
    },
    {
        id: 30,
        state: "Oyo",
        capital: "Ibadan",
        population: "7.51 Million",
        minerals: "Limestone, kaolin",
        governor: "Seyi Makinde"
    },
    {
        id: 31,
        state: "Plateau",
        capital: "Jos",
        population: "5.40 Million",
        minerals: "Tin, columbite, gemstones",
        governor: "Caleb Mutfwang"
    },
    {
        id: 32,
        state: "Rivers",
        capital: "Port Harcourt",
        population: "7.23 Million",
        minerals: "Oil & gas",
        governor: "Siminalayi Fubara"
    },
    {
        id: 33,
        state: "Sokoto",
        capital: "Sokoto",
        population: "6.39 Million",
        minerals: "Gypsum, kaolin",
        governor: "Ahmad Aliyu"
    },
    {
        id: 34,
        state: "Taraba",
        capital: "Jalingo",
        population: "4.33 Million",
        minerals: "Baryte, lead/zinc",
        governor: "Agbu Kefas"
    },
    {
        id: 35,
        state: "Yobe",
        capital: "Damaturu",
        population: "4.35 Million",
        minerals: "Gypsum, limestone",
        governor: "Mai Mala Buni"
    },
    {
        id: 36,
        state: "Zamfara",
        capital: "Gusau",
        population: "5.52 Million",
        minerals: "Gold, lead/zinc",
        governor: "Dauda Lawal"
    },
]


const statelists = document.getElementById("statelists")

showStates(states);

function showStates(states) {
   statelists.innerHTML = "";
    for (let index = 0; index < states.length; index++) {

        const stateId = states.map(function (states_id) {
            return states_id.id
        })[index];

        const stateName = states.map(function (sname) {
            return sname.state
        })[index];

        const stateCapital = states.map(function (scapital) {
            return scapital.capital
        })[index];

        const statePopulation = states.map(function (s_population) {
            return s_population.population
        })[index];

        const stateMinerals = states.map(function (s_minerals) {
            return s_minerals.minerals;
        })[index];

        const stateGovernor = states.map(function (s_governor) {
            return s_governor.governor;
        })[index];
        statelists.innerHTML += `
                                <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#${stateId}" aria-expanded="false" aria-controls="${stateId}">
                                ${stateName}
                            </button>
                        </h2>
                        <div id="${stateId}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <p>The capital is: <b>${stateCapital}</b></p>
                                <p>They Have A population Of: <b>${statePopulation}</b> People</p>
                                <p>They Are Rich In: <b>${stateMinerals}</b></p>
                                <p>Their Current Governor Is: <b>${stateGovernor}</b></p>
                            </div>
                        </div>
                    </div>`;

    }

}
function searchStates(e) {
    const userInput = e.value.toLowerCase();
    const result = states.filter(function (state) {
        const resultOutput = `${state.minerals}, ${state.state}, ${state.governor}, ${state.capital},${state.population}`;
        console.log(resultOutput);  
        const converted = resultOutput.toLowerCase();
        return converted.includes(userInput);
    });
    showStates(result);
    // console.log(result);

}

function sortByStates() {
    const sortedByStates = states.sort(function (a, b) {
       return a.state.localeCompare(b.state)
    })
    showStates(sortedByStates);
}

function SortByPopulation() {
    const sortedByPopulation = states.sort(function (a, b) {
        return parseFloat(a.population) - parseFloat(b.population);
    });
    showStates(sortedByPopulation);
}

