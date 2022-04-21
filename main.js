
class Cell{
    constructor(ele){
        this.ele = ele;
        this.bgcolor = "#00000000";
        this.content = ""
    }
}

function newBoard(height,width){
    let eBoard=document.createElement("table");
    let l = [];
    //element.appendChild(eBoard)
    for(i=0;i<width;i++){
        l.append([]);
        let el=document.createElement("tr")
        eBoard.appendChild(el)
        for(j=0;j<height;j++){
            let ell=document.createElement("td")
            el.appendChild(ell)
            l[i].append(Cell(ell));
        }
    }
    return l
}
let t=document.getElementsByTagName("body")
  liste = newBoard(6,5)
document.write(6666)
try{document.write(t)}catch{document.write("66")}
