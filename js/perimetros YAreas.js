function enviart(){
    let baset,alturat,l1t,l2t,l3t,perimetrot,areat
    /*Captura el dato ingresado en el input con id nombre*/
    baset = document.getElementById('baset').value
    alturat = document.getElementById('alturat').value
    l1t = document.getElementById('lado1t').value
    l2t = document.getElementById('lado2t').value
    l3t= document.getElementById('lado3t').value
    perimetrot = parseFloat(l1t)+parseFloat(l2t)+parseFloat(l3t)
    areat = (baset*alturat)/2
    //se muestra el archivo html con id respuesta
    document.getElementById('respuestat').innerHTML="El Perimetro del Triangulo es "+perimetrot+", el área es "+areat
}

function enviarc(){
    let lado, peri, area
    lado = document.getElementById('ladoc').value
    peri = lado*4
    area = lado*lado
    document.getElementById('respuestac').innerHTML="El perimetro es "+peri+",el área es "+area
}

function enviarr(){
    let base, altura, peri, area
    base = document.getElementById('baser').value
    altura = document.getElementById('alturar').value
    peri = base*2 + altura*2
    area = base*altura
    document.getElementById('respuestar').innerHTML="El perimetro es "+peri+", el area es "+ area
}

function enviarrom(){
    let diaMe, diaMa, lado, peri, area
    diaMe = document.getElementById('diagonal-menor').value
    diaMa = document.getElementById('diagonal-mayor').value
    lado = document.getElementById('lado-rom').value
    peri = lado*4
    area = (diaMa*diaMe)/2
    document.getElementById('respuesta-rom').innerHTML="El perimetro es "+peri+", el área es "+area
}

function enviarp(){
    let alturap, anchop, largop, perimetrop,areap,volumenp
    alturap = document.getElementById('alturap').value
    anchop = document.getElementById('anchop').value
    largop = document.getElementById('largop').value
    perimetrop = alturap*4 + anchop*4 +largop*4 
    areap = (alturap*anchop*2) + (alturap*largop*2) + (anchop*largop*2)
    volumenp = alturap*anchop*largop
    console.log()
    document.getElementById('respuestap').innerHTML="El perimetro es "+perimetrop+", el area es "+areap+", el volumen es "+volumenp
}