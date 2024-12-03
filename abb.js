let text = promt("Reqem mətin Daxil Edin Daxil edin")
let a = false 
for(i=0; i<text.length; i++){
    let b = text[i]
    if(b.match(/[0-9]/)){
        a = true
        break}

        if(a){
            console.log(" Mətində Rəqəm var")
        }
        else{console.log(" Mətində  Rəqəm Yoxdur")}
    }

