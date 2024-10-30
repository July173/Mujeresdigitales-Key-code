const encriptado=[
    {
        id :1,
        valor: "a",
        codigo: "?"
    },
    {
        id :2,
        valor: "e",
        codigo: "["
    },
    {
        id :3,
        valor: "i",
        codigo: "\\"
    },
    {
        id :4,
        valor: "o",
        codigo: "~"
    },
    {
        id :5,
        valor: "u",
        codigo: "+"
    },
    {
        id :6,
        valor: " ",
        codigo: "("
    },
    {
        id :7,
        valor: " ",
        codigo: ")"
    },
    {
        id :8,
        valor: "b",
        codigo: "%"
    },
    {
        id :9,
        valor: "c",
        codigo: "`"
    },
    {
        id :10,
        valor: "d",
        codigo: "¡"
    },
    {
        id :11,
        valor: "f",
        codigo: ";"
    },
    {
        id :12,
        valor: "h",
        codigo: "-"
    },
    {
        id :13,
        valor: "j",
        codigo: "!"
    },
    {
        id :14,
        valor: "l",
        codigo: "/"
    },
    {
        id :15,
        valor: "m",
        codigo: "^"
    },
    {
        id :16,
        valor: "n",
        codigo: "]"
    },
    {
        id :17,
        valor: "p",
        codigo: "*"
    },
    {
        id :18,
        valor: "q",
        codigo: "}"
    },
    {
        id :19,
        valor: "r",
        codigo: "$"
    },
    {
        id :20,
        valor: "s",
        codigo: "{"
    },
    {
        id :21,
        valor: "t",
        codigo: "="
    },
    {
        id :22,
        valor: "v",
        codigo: "#"
    },
    {
        id :23,
        valor: "y",
        codigo: "¿"
    },
    {
        id :24,
        valor: "z",
        codigo: "_"
    },
    {
        id :25,
        valor: "ó",
        codigo: "¬"
    }
]

const desencriptar =(pmensaje)=>{

    let mensajeClaro= " ";

    for(let caracter of pmensaje){
        let reemplazo = caracter;

        for (let dato of encriptado){
            if(caracter === dato.codigo){
                reemplazo= dato.valor;
                break;
            }
        }
        mensajeClaro +=reemplazo;
    }
    console.log(mensajeClaro);
}
desencriptar("^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~");
