class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;

        if (this.tipo === "guerreiro") {
            ataque = "espada";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo === "mago") {
            ataque = "magia";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo === "monge") {
            ataque = "artes marciais";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo === "ninja") {
            ataque = "shuriken";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else {
            console.log("Heroi desconhecido, ataque não realizado.");
        }
    }
}

meuHeroi = new heroi("Miato", 45, "arqueiro");
meuHeroi.atacar();