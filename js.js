
function mostrarInicio(){
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}
function mostrarVentas(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'block';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}
function mostrarReportes(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'block';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}

function mostrarClientes(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'block';
    document.getElementById('productos').style.display = 'none';   
}

function mostrarProductos(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'block';   
}
function mostrarCliente(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'block';
    document.getElementById('productos').style.display = 'none';  
}
var ri = 0 ;
function Cliente(c){
    alert("traer cliente");
    ri = p.parentNode.parentNode.rowIndex;
    document.getElementById("Cliente").value = document.getElement
    
    ById("tablitaClientes").rows[ri].cells[1].innerText;

}
function guardarCliente(){
       var holaa=document.getElementById("hola").value;
   var ddd= document.getElementById("Clientee").value = holaa; 

    if(ddd ==""){
        alert("vacio");
    } else{
        document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'block';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none'; 
    }

    
   
   
}



