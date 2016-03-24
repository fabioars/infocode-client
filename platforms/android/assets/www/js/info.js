var text, collection, id, pos, result;
function formatDate(date){
    return date.split("-").reverse().join("/");
}
function changeContent(obj){
    if(obj.error){
        document.getElementById("allContent").innerHTML = "<div class=\"card\">"+obj.error+"</div>";
    }else{
        document.getElementById("objetoConvenio").innerHTML = obj.objetoConvenio;
        document.getElementById("nomeConcedente").innerHTML = obj.nomeConcedente;
        document.getElementById("nomeConvenente").innerHTML = obj.nomeConvenente;
        
        document.getElementById("nomeMunicipio").innerHTML = obj.nomeMunicipio;
        document.getElementById("uf-img").innerHTML = "<img src=\"img/estados/"+obj.uf+".png\">";
        document.getElementById("uf").innerHTML = obj.uf;
        
        
        document.getElementById("situacaoConvenio").innerHTML = obj.situacaoConvenio;
        document.getElementById("valorConvenio").innerHTML = "R$"+obj.valorConvenio;
        document.getElementById("valorContrapartida").innerHTML = "R$"+obj.valorContrapartida;
        document.getElementById("numeroConvenio").innerHTML = obj.numeroConvenio;
        document.getElementById("valorLiberado").innerHTML = "R$"+obj.valorLiberado;
        document.getElementById("valorUltimaLiberacao").innerHTML = "R$"+obj.valorUltimaLiberacao;
        
        document.getElementById("dataPublicacao").innerHTML = formatDate(obj.dataPublicacao);
        document.getElementById("dataInicioVigencia").innerHTML = formatDate(obj.dataInicioVigencia);
        document.getElementById("dataFimVigencia").innerHTML = formatDate(obj.dataFimVigencia);
        document.getElementById("dataUltimaLiberacao").innerHTML = formatDate(obj.dataUltimaLiberacao);
        
    }
}

var xhttp = new XMLHttpRequest();
text = sessionStorage.getItem("qrCode");
pos = text.search("=");
collection = text.substr(0, pos-1);
id = text.substr(pos+1);

xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        result = xhttp.responseText.toString();
        if(result == ""){
            changeContent({error: "Conteúdo não encontrado"});
        }else{
            changeContent(JSON.parse(result));
        }
                    
    }
};
var url = "http://192.168.0.25/infocode/"+collection+"/"+id;
xhttp.open("GET", url, true);
xhttp.send();