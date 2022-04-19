
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
        for(i=0;i<width;i++){
            l.append([]);
            for(j=0;j<height;j++){
                l[i].append(new Cell);
            }
        }

    }

