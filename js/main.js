const { createApp } = Vue

createApp({
    data() {
        return {
            link: "",
            nome: "",
            cognome: "",
            classiTitolo: "rosso secondaClasse"
        }
    },
    methods: {
        btnClick() {
            // console.log(this); //non è Window !!
            
            // console.log(this.classiTitolo); //possiamo leggere i nostri dati
            this.classiTitolo = "violet"; //possiamo alterare i dati
            // this.stampaMessaggio();  //possiamo chiamare altri metodi
            // this.classiTitolo = this.restituisciVerde(); //possiamo assegnare ai dati il return di un metodo 
        },
        stampaMessaggio() {
            console.log("Questo è un messaggio");
        },
        generaLink: function() {
            this.link = "https://www.google.it/search?q=" + this.nome + "+" + this.cognome;
            console.log(this.link);
        },
        restituisciVerde() {
            return "verde";
        }

    }
}).mount('#app')
