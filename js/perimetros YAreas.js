let tituloPlanas = document.getElementById('figuras-planas')
let tituloSolidos = document.getElementById('figuras-solidas')

function noVer(){
    document.getElementById('triangulo').style.display = 'none'
    document.getElementById('titulo-triangulo').style.display = 'none'
    document.getElementById('figuras-planas').style.display ='none'
    document.getElementById('figuras-solidas').style.display ='none'
    document.getElementById('titulo-cuadrado').style.display = 'none'
    document.getElementById('cuadrado').style.display ='none'
    document.getElementById('titulo-rectangulo').style.display ='none'
    document.getElementById('rectangulo').style.display ='none'
    document.getElementById('titulo-rombo').style.display ='none'
    document.getElementById('rombo').style.display ='none'
    document.getElementById('titulo-trapecio').style.display ='none'
    document.getElementById('titulo-circulo').style.display ='none'
    document.getElementById('titulo-esfera').style.display ='none'
    document.getElementById('titulo-cubo').style.display ='none'
    document.getElementById('titulo-paralelepipedo').style.display ='none'
    document.getElementById('titulo-cono').style.display ='none'
    document.getElementById('titulo-cilindro').style.display ='none'
    document.getElementById('trapecio').style.display ='none'
    document.getElementById('circulo').style.display ='none'
    document.getElementById('esfera').style.display ='none'
    document.getElementById('cubo').style.display ='none'
    document.getElementById('paralelepipedo').style.display ='none'
    document.getElementById('cilindro').style.display ='none'
    document.getElementById('cono').style.display ='none'
}

function cuadrado(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('titulo-cuadrado').style.display = 'block'
    document.getElementById('cuadrado').style.display ='flex'
}

function triangulo(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('triangulo').style.display = 'flex'
    document.getElementById('titulo-triangulo').style.display = 'block'
}

function romboide(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('rectangulo').style.display = 'flex'
    document.getElementById('titulo-rectangulo').style.display = 'block'
}

function rombo(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('rombo').style.display = 'flex'
    document.getElementById('titulo-rombo').style.display = 'block'
}

function trapecio(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('trapecio').style.display = 'flex'
    document.getElementById('titulo-trapecio').style.display = 'block'
}

function circulo(){
    noVer()
    document.getElementById('figuras-planas').style.display ='block'
    document.getElementById('circulo').style.display = 'flex'
    document.getElementById('titulo-circulo').style.display = 'block'
}

function esfera(){
    noVer()
    document.getElementById('figuras-solidas').style.display ='block'
    document.getElementById('esfera').style.display = 'flex'
    document.getElementById('titulo-esfera').style.display = 'block'
}

function paralelepipedo(){
    noVer()
    document.getElementById('figuras-solidas').style.display ='block'
    document.getElementById('paralelepipedo').style.display = 'flex'
    document.getElementById('titulo-paralelepipedo').style.display = 'block'
}

function cubo(){
    noVer()
    document.getElementById('figuras-solidas').style.display ='block'
    document.getElementById('cubo').style.display = 'flex'
    document.getElementById('titulo-cubo').style.display = 'block'
}

function cilindro(){
    noVer()
    document.getElementById('figuras-solidas').style.display ='block'
    document.getElementById('cilindro').style.display = 'flex'
    document.getElementById('titulo-cilindro').style.display = 'block'
}

function cono(){
    noVer()
    document.getElementById('figuras-solidas').style.display ='block'
    document.getElementById('cono').style.display = 'flex'
    document.getElementById('titulo-cono').style.display = 'block'
}

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

function enviartra(){
    let baseMa, baseMe, lado1, lado2, altura, peri, area
    baseMa = document.getElementById('base-mayor').value
    baseMe = document.getElementById('base-menor').value
    lado1 = document.getElementById('lado1-tra').value
    lado2 = document.getElementById('lado2-tra').value
    altura = document.getElementById('alturatra').value
    peri = parseFloat(baseMa)+parseFloat(baseMe)+parseFloat(lado1)+parseFloat(lado2)
    area = altura*(parseFloat(baseMa)+parseFloat(baseMe))/2
    document.getElementById('respuesta-tra').innerHTML="El perimetro es "+peri+", el área es "+ area
}

function enviarcirc(){
    let radio, peri, area
    radio = document.getElementById('radio').value
    peri = 2*radio*Math.PI
    area = Math.PI*radio**2
    document.getElementById('respuesta-circ').innerHTML="El perimetro es "+peri+", el área es "+area
}

function enviaresf(){
    let radio, peri , area, volumen
    radio = document.getElementById('radio-esf').value
    peri = 2*radio*Math.PI
    area = 4*Math.PI*radio**2
    volumen = (4/3)*Math.PI*radio**3
    document.getElementById('respuesta-esf').innerHTML="El perimetro es "+peri+", el área es "+area+", el volumen es "+volumen
}

function enviarcubo(){
    let lado, peri, area, volumen
    lado = document.getElementById('lado-cubo').value
    peri = lado*12
    area = 6*lado**2
    volumen = lado**3
    document.getElementById('respuesta-cubo').innerHTML="El perimetro es "+peri+", el área es "+area+", el volumen es "+volumen
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

function enviarcilin(){
    let altura, radio, peri, area, volumen
    altura = document.getElementById('altura-cilindro').value
    radio = document.getElementById('radio-cilindro').value
    peri = 1221
    area = 2*Math.PI*radio*(parseFloat(radio)+parseFloat(altura))
    volumen =Math.PI*altura*radio**2
    document.getElementById('respuesta-cilindro').innerHTML="El perimetro es "+peri+", el area es "+area+", el volumen es "+volumen
}
function enviarcono(){
    let altura, radio, peri, area, volumen
    altura = document.getElementById('altura-cono').value
    radio = document.getElementById('radio-cono').value
    peri = 1221
    area = Math.PI*radio*(parseFloat(radio)+Math.sqrt(radio**2 + altura**2))
    volumen =(Math.PI*altura*radio**2)/3
    document.getElementById('respuesta-cono').innerHTML="El perimetro es "+peri+", el area es "+area+", el volumen es "+volumen
}

window.addEventListener('load', noVer)