var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"M",
                hord:"D",
                marks:['50','100','10','100','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"M",
                hord:"D",
                marks:['65','82','68','18','35','57']
            }

    },
    secyr:{
        CB21040:{
            name:"Yathissh",
            gen:"M",
            hord:"D",
            marks:['70','60','50','40','35','65']
        }

    },
    thirdyr:{
        CB159854:{
            name:"Sachin",
            gen:"F",
            hord:"H",
            marks:[-1,87,89,87,99,100]
        }

    }
}
var count=[0,0,0];
var pass=[0,0,0];
var fail=[0,0,0];
var pass1=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var passper=[0,0,0];
var failper=[0,0,0];
var passper1=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var passscript=[0,0,0];
var failscript=[0,0,0];
var n1=0,n2=0,n3=0;
var tfail=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

var years=[[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]];

var year=Object.keys(obj);
for(let i=0;i<year.length;i++){
    var arr=obj[year[i]];
    //console.log(arr); //{CB22013: {…}, CB22038: {…}}
    var objs=Object.keys(arr);
    //console.log(objs);
    for(let j=0;j<objs.length;j++){
        var data=arr[objs[j]];
        var marks=data.marks; 
        //console.log(marks);  
        //Enter Algorithm here 
        count[i]+=1;
        if(marks[0]>=50 && marks[2]>=50 && marks[3]>=50 && marks[4]>=50 && marks[5]>=50 && marks[1]>=50){
            pass[i]+=1;
        }
        else{
            fail[i]+=1;
        }
        for(let k=0;k<marks.length;k++){
            if(marks[k]>=50){
                pass1[i][k]+=1;
            }
            if(marks[k]>=50){
                if(i==0){
                    passscript[0]+=1;
                }
                else if(i==1){
                    passscript[1]+=1;
                }
                else{
                    passscript[2]+=1;
                }
            }
            else{
                if(i==0){
                    failscript[0]+=1;
                }
                else if(i==1){
                    failscript[1]+=1;
                }
                else{
                    failscript[2]+=1;
                }
            }
            if(marks[k]>90){
                years[i][k][0]+=1;
            }
            else if(marks[k]>80 && marks[k]<=90){
                years[i][k][1]+=1;
            }
            else if(marks[k]>70 && marks[k]<=80){
                years[i][k][2]+=1;
            }
            else if(marks[k]>60 && marks[k]<=70){
                years[i][k][3]+=1;
            }
            else if(marks[k]>=50 && marks[k]<=60){
                years[i][k][4]+=1;
            }
            else if(marks[k]<50 && marks[k]!=-1){
                years[i][k][5]+=1;
                tfail[i][k]+=1;
            }
            else{
                years[i][k][6]+=1;
                tfail[i][k]+=1;
            }
        } 
    }
}
function percent(s,n){
    var a=(s/n)*100;
    return Math.round(a);
}
for(let i=0;i<pass1.length;i++){
    for(let j=0;j<pass1[i].length;j++){
        passper1[i][j]+=percent(pass1[i][j],count[i]);
    }
}
for(let i=0;i<pass.length;i++){
        passper[i]=percent(pass[i],count[i]);
        failper[i]=percent(fail[i],count[i]);
}
var overpass1=((passper[0]+passper[1]+passper[2])/3);
var tot=(passscript[0]+failscript[0])+(passscript[1]+failscript[1])+(passscript[2]+failscript[2]);
var overpass2=(((passscript[0]+passscript[1]+passscript[2])/tot)*100);
var totalscr=[(passscript[0]+failscript[0]),(passscript[1]+failscript[1]),(passscript[2]+failscript[2])];
var show=[[count[0],pass[0],passper[0],fail[0],failper[0],totalscr[0],passscript[0],percent(passscript[0],totalscr[0]),failscript[0],percent(failscript[0],totalscr[0])],[count[1],pass[1],passper[1],fail[1],failper[1],totalscr[1],passscript[1],percent(passscript[1],totalscr[1]),failscript[1],percent(failscript[1],totalscr[1])],[count[2],pass[2],passper[2],fail[2],failper[2],totalscr[2],passscript[2],percent(passscript[2],totalscr[2]),failscript[2],percent(failscript[2],totalscr[2])]];
var total1=[(count[0]+count[1]+count[2]),(pass[0]+pass[1]+pass[2]),(passper[0]+passper[1]+passper[2])/3,(fail[0]+fail[1]+fail[2]),(failper[0]+failper[1]+failper[2])/3,(totalscr[0]+totalscr[1]+totalscr[2]),(passscript[0]+passscript[1]+passscript[2]),(show[0][7]+show[1][7]+show[2][7])/3,(failscript[0]+failscript[1]+failscript[2]),(show[0][9]+show[1][9]+show[2][9])/3];
show.push(total1);
console.log(tfail[0]);
for(let i=0;i<4;i++){
    for(let j=0;j<show[i].length;j++){
        console.log(""+(i+1)+(j+1));
        document.getElementById("2"+(i+1)+(j+1)).innerHTML=show[i][j];
    }
}
document.getElementById("std").innerHTML=overpass1;
document.getElementById("scr").innerHTML=overpass2;
var alp=['A','B','C'];
for(let i=0;i<3;i++){
    for(let j=0;j<6;j++){
        for(let k=0;k<7;k++){
            console.log(alp[i]+(j+1)+(k+1));
            document.getElementById("2"+alp[i]+(j+1)+(k+1)).innerHTML=years[i][j][k];
        }
    }
}
var col=['C','P','E'];
for(let i=0;i<3;i++){
    for(let j=0;j<6;j++){
        for(let k=0;k<3;k++){
            console.log(alp[i]+col[k]+(j+1));
            if(k==0){
                document.getElementById("2"+alp[i]+col[k]+(j+1)).innerHTML=count[i];
            }
            else if(k==1){
                document.getElementById("2"+alp[i]+col[k]+(j+1)).innerHTML=pass1[i][j];
            }
            else{
                document.getElementById("2"+alp[i]+col[k]+(j+1)).innerHTML=passper1[i][j];
            }
        }
        document.getElementById("2"+alp[i]+(j+1)).innerHTML=tfail[i][j];
    }
}
