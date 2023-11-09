var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"M",
                hord:"D",
                marks:['-1','100','100','10','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"M",
                hord:"D",
                marks:['65','82','28','58','35','57']
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

    }
}

var datas=[[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]]

function percent(s,n){
    var a=(s/n)*100;
    return a.toFixed(2);
}

var years=Object.keys(obj);
for(let i=0;i<years.length;i++){
var arr=obj[years[i]];
//console.log(arr); //{CB22013: {…}, CB22038: {…}}
var objs=Object.keys(arr);
//console.log(objs);
for(let j=0;j<objs.length;j++){
    var data=arr[objs[j]];
    var marks=data.marks; 
    var count=0; 
    var fail=0;
    for(let a=0;a<6;a++){
        datas[i][a][1]+=1;
    }
    //Enter Algorithm here  
    for(let k=0;k<marks.length;k++){
        //Single arrear
        if(marks[k]<50){
            count+=1;
            fail=k;
        }
        else{
            datas[i][k][2]+=1
            datas[i][k][3]=percent(datas[i][k][2],datas[i][k][1]);
        }
        if(marks[k]>90){
            datas[i][k][4]+=1;
            datas[i][k][5]=percent(datas[i][k][4],datas[i][k][1]);
        }
        else if(marks[k]<=90 && marks[k]>80){
            datas[i][k][6]+=1;
            datas[i][k][7]=percent(datas[i][k][6],datas[i][k][1]);
        }
        else if(marks[k]<=80 && marks[k]>70){
            datas[i][k][8]+=1;
            datas[i][k][9]=percent(datas[i][k][8],datas[i][k][1]);
        }
        else if(marks[k]<=70 && marks[k]>60){
            datas[i][k][10]+=1;
            datas[i][k][11]=percent(datas[i][k][10],datas[i][k][1]);
        }
        else if(marks[k]>=60 && marks[k]>=50){
            datas[i][k][12]+=1;
            datas[i][k][13]=percent(datas[i][k][12],datas[i][k][1]);
        }
        else if(marks[k]<50 && marks[k]>-1){
            datas[i][k][14]+=1;
            datas[i][k][18]+=1;
            datas[i][k][15]=percent(datas[i][k][14],datas[i][k][1]);
            datas[i][k][19]=percent(datas[i][k][18],datas[i][k][1]);
        }
        else{
            datas[i][k][16]+=1;
            datas[i][k][18]+=1;
            datas[i][k][17]=percent(datas[i][k][16],datas[i][k][1]);
            datas[i][k][19]=percent(datas[i][k][18],datas[i][k][1]);

        }
    }
    //Single arrear
    if(count==1){
        datas[i][fail][0]+=1;
    }
}
}
var total1=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var total2=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
for(let i=0;i<3;i++){
    for(let j=0;j<6;j++){
            total1[i][0]+=datas[i][j][1];
            total1[i][1]+=datas[i][j][2];
            total1[i][2]+=datas[i][j][4];
            total1[i][3]+=datas[i][j][6];
            total1[i][4]+=datas[i][j][8];
            total1[i][5]+=datas[i][j][10];
            total1[i][6]+=datas[i][j][12];
            total1[i][7]+=datas[i][j][14];
            total1[i][8]+=datas[i][j][16];
            total1[i][9]+=datas[i][j][18];
    }
}
for(let i=0;i<3;i++){
    for(let j=0;j<6;j++){
        total2[i][0]=percent(total1[i][1],total1[i][0]);
        total2[i][1]=percent(total1[i][2],total1[i][0]);
        total2[i][2]=percent(total1[i][3],total1[i][0]);
        total2[i][3]=percent(total1[i][4],total1[i][0]);
        total2[i][4]=percent(total1[i][5],total1[i][0]);
        total2[i][5]=percent(total1[i][6],total1[i][0]);
        total2[i][6]=percent(total1[i][5],total1[i][0]);
        total2[i][7]=percent(total1[i][8],total1[i][0]);
        total2[i][8]=percent(total1[i][9],total1[i][0]);
    }
}
console.log(total2);
const alpa=['A','B','C'];
for(let i=0;i<3;i++){
    for(j=0;j<6;j++){
        for(k=0;k<20;k++){
            console.log("7"+alpa[i]+(j+1)+(k+1));
            document.getElementById("7"+alpa[i]+(j+1)+(k+1)).innerHTML=datas[i][j][k];
        }
    }
}
const alpb=['X','Y','Z'];
for(let i=0;i<3;i++){
    for(j=0;j<11;j++){
        console.log("7"+alpb[i]+(j+1));
        document.getElementById("7"+alpb[i]+(j+1)).innerHTML=total1[i][j];
    }
}
const alp3=['L','M','N'];
for(let i=0;i<3;i++){
    for(j=0;j<9;j++){
        document.getElementById("7"+alp3[i]+(j+1)).innerHTML=total1[i][j];
    }
}