/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

/* ARRAY DI OGGETTI */
const persone = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer' ,
        foto: './img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Grapich Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg'
    }
];

/* SELEZIONA ROW */
const primaRow = document.getElementById('prima-riga');



/* STAMPA I PRIMI TRE OGGETTI NELLA PRIMA ROW */
for (let i=0; i<6; i++){
   
    /* MOSTRA IN CONSOLE NOME, RUOLO E FOTO DELLA PERSONA */
    console.log(persone[i].nome + ' è ' + persone[i].ruolo + '. La sua foto: ' + persone[i].foto);
    
    /* CREA ELEMENTO */
    const col = document.createElement('div');
    
    /* AGGIUNGI CLASSI */
    col.classList.add('col-4', 'text-center', 'mt-5');

    /* SCRIVI ALL'INTERNO DELLA COL COSA VOGLIO MOSTRARE NEL HTML */
    col.innerHTML += `

        <div class="card">
            <img src="${persone[i].foto}" alt="Foto">
            <div class="card-title"> 
                <h3 class="mt-2 mb-2">${persone[i].nome}</h3>
                <h5>${persone[i].ruolo}</h5>
            </div>
        </div>
 
`;

/* APPENDI LA PRIMA COL NELLA PRIMA RIGA */
primaRow.append(col);
}
