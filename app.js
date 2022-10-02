const express = require ('express')
const app = express ()
const assert = require('assert');


// Classe Votos

function Votos(total_eleitores) {
    this.total_eleitores = total_eleitores,
    this.validos = 0,
    this.brancos = 0,
    this.nulos   = 0;

    this.percValidos = function() {
        return 0;
    }

    this.percBrancos = function() {
        return 0;
    }

    this.percNulos = function() {
        return 0;
    }

}


// Testes

try {

    var votos = new Votos(710);
    votos.validos = 600;
    votos.brancos = 100;
    votos.nulos   = 10;

    assert.equal(0.6,  votos.percValidos());
    assert.equal(0.10, votos.percBrancos());
    assert.equal(0.01, votos.percNulos());
} catch(e) {
    console.log(e);
}



// Classe Votos

function Votos(total_eleitores) {
    this.total_eleitores = total_eleitores,
    this.validos = 0,
    this.brancos = 0,
    this.nulos   = 0;

    this.percValidos = function() {
        return this.validos / this.total_eleitores;
    }

    this.percBrancos = function() {
        return this.brancos / this.total_eleitores;
    }

    this.percNulos = function() {
        return this.nulos / this.total_eleitores;
    }

}


app.get ('/', function (req,res){http://localhost:3000
res.send ('votos')})
//definir o endereço Mariana

app.listen (3000, function (){
    console.log ('Executando na porta 3000')
});

