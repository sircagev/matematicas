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

function enviarp(){
    let alturap, anchop, largop, perimetrop,areap,volumenp
    alturap = document.getElementById('alturap').value
    anchop = document.getElementById('anchop').value
    largop = document.getElementById('largop').value
    perimetrop = alturap*4 + anchop*4 +largop*4 
    areap = ((parseFloat(alturap)+parseFloat(anchop))*2) + ((parseFloat(alturap)+parseFloat(largop))*2) + ((parseFloat(anchop) + parseFloat(largop))*2)
    volumenp = alturap*anchop*largop
    console.log()
    document.getElementById('respuestap').innerHTML="El perimetro es "+perimetrop+", el area es "+areap+", el volumen es "+volumenp
}