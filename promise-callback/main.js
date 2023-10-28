// Esempi di elementi del menu
const m = [
    { n: "Margherita", p: 10, i: ["Salsa di pomodoro", "Mozzarella", "Basilico"] },
    { n: "Pepperoni", p: 12, i: ["Salsa di pomodoro", "Mozzarella", "Peperoni"] },
    { n: "Vegetariana", p: 11, i: ["Salsa di pomodoro", "Mozzarella", "Funghi", "Peperoni", "Cipolle"] },
    { n: "Piccante", p: 14, i: ["Salsa di pomodoro", "Mozzarella", "Salame piccante", "Peperoncini"] },
    { n: "Marinara", p: 13, i: ["Salsa di pomodoro", "Aglio", "Origano", "Basilico"] }
];

// Inizializza le liste del menu e dell'ordine
const l = document.getElementById("menu-list");
const o = document.getElementById("order-list");
const b = document.getElementById("place-order-btn");

// Popola il menu
m.forEach(i => {
    const mi = document.createElement("li");
    mi.innerHTML = `${i.n} - $${i.p} - ${i.i.join(", ")}`; // Aggiungi gli ingredienti all'elemento del menu
    l.appendChild(mi);

    // Aggiungi l'evento di clic per aggiungere gli elementi all'ordine
    mi.addEventListener("click", () => {
        ao(i);
    });
});

// Inizializza l'array dell'ordine
const or = [];

// Aggiungi l'evento di clic per effettuare un ordine
b.addEventListener("click", () => {
    if (or.length > 0) {
        po(or)
            .then(() => {
                alert("Ordine effettuato con successo!");
                co();
            })
            .catch((e) => {
                alert(`Errore durante l'effettuazione dell'ordine: ${e.message}`);
            });
    } else {
        alert("Si prega di aggiungere elementi all'ordine.");
    }
});

function ao(i) {
    or.push(i);
    const oi = document.createElement("li");
    oi.innerHTML = `${i.n} - $${i.p}`;
    o.appendChild(oi);
}

function po(or) {
    return new Promise((r, rej) => {
        // Simula l'effettuazione di un ordine, puoi aggiungere la tua logica qui
        setTimeout(() => {
            if (Math.random() > 0.5) {
                r();
            } else {
                rej(new Error("Qualcosa è andato storto"));
            }
        }, 1000);
    });
}

function co() {
    o.innerHTML = "";
}