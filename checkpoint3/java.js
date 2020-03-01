document.getElementById('boldB').addEventListener('click',function(){
    if(document.getElementById('textArea').style.fontWeight=='bold'){
        document.getElementById('textArea').style.fontWeight= 'normal'
    }else{
        document.getElementById('textArea').style.fontWeight='bold'
    }
})
document.getElementById('italic').addEventListener('click',function(){
    if(document.getElementById('textArea').style.fontStyle=='italic'){
        document.getElementById('textArea').style.fontStyle=''
    }else{
        document.getElementById('textArea').style.fontStyle='italic'
    }
})
document.getElementById('underline').addEventListener('click',function(){
    if(document.getElementById('textArea').style.textDecoration=='underline'){
        document.getElementById('textArea').style.textDecoration=''
    }else{document.getElementById('textArea').style.textDecoration='underline'}
    }
)
document.getElementById('size').onchange=function(){
    document.getElementById('textArea').style.fontSize = document.getElementById('size').value
}
document.getElementById('fam').onchange=function(){
    document.getElementById('textArea').style.fontFamily = document.getElementById('fam').value
}