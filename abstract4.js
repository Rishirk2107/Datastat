var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"M",
                hord:"H",
                marks:['110','100','100','100','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"M",
                hord:"D",
                marks:['65','80','68','80','59','57']
            }

    },
    secyr:{
        CB21040:{
            name:"Yathissh",
            gen:"M",
            hord:"H",
            marks:['70','60','50','54','35','65']
        },
        CB21039:{
            name:"Ram",
            gen:"M",
            hord:"D",
            marks:['70','60','50','54','35','65']
        }

    },
    thirdyr:{
        CB21040:{
            name:"Vishnu",
            gen:"M",
            hord:"H",
            marks:['70','60','50','54','35','65']
        },
        CB21041:{
            name:"Sundaram",
            gen:"M",
            hord:"D",
            marks:['70','60','50','54','35','65']
        }
        
    }
}



var day=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var hos=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];

var years=Object.keys(obj);
for(let i=0;i<years.length;i++){
var arr=obj[years[i]];
//console.log(arr); //{CB22013: {…}, CB22038: {…}}
var objs=Object.keys(arr);
//console.log(objs);
for(let j=0;j<objs.length;j++){
    var data=arr[objs[j]];
    var clg=data.hord;
    var marks=data.marks;  
    if(clg=='H'){
        hos[i][0]+=1;
        if(marks[0]>=50 && marks[1]>=50 && marks[2]>=50 && marks[3]>=50 && marks[4]>=50 && marks[5]>=50){
            hos[i][1]+=1;
        }
        else{
            hos[i][9]+=1;
        }
    }
    else{
        day[i][0]+=1;
        if(marks[0]>=50 && marks[1]>=50 && marks[2]>=50 && marks[3]>=50 && marks[4]>=50 && marks[5]>=50){
            day[i][1]+=1;
        }
        else{
            day[i][9]+=1;
        }
    }
    //Enter Algorithm here  
    for(let k=0;k<marks.length;k++){
        if(marks[k]<50){
            if(clg=='H'){
                hos[i][k+3]+=1;
            }
            else{
                day[i][k+3]+=1;
            }
        }
    }
}
}

function percent(s,n){
    var a=(s/n)*100;
    return Math.round(a);
}

for(let i=0;i<3;i++){
    hos[i][2]=percent(hos[i][1],hos[i][0]);
    hos[i][10]=percent(hos[i][9],hos[i][0]);
    day[i][2]=percent(day[i][1],day[i][0]);
    day[i][10]=percent(day[i][9],day[i][0]);
}
for(let i=0;i<11;i++){
    if(i!=2 && i!=10){
        day[3][i]=day[0][i]+day[1][i]+day[2][i];
        hos[3][i]=hos[0][i]+hos[1][i]+hos[2][i];
    }
    else{
        day[3][i]=Math.round((day[0][i]+day[1][i]+day[2][i])/3);
        hos[3][i]=Math.round((hos[0][i]+hos[1][i]+hos[2][i])/3);
    }
}
var alp=['H','D'];
for(let i=0;i<2;i++){
    for(let j=0;j<4;j++){
        for(let k=0;k<11;k++){
            if(i==0){
                document.getElementById("4"+alp[i]+(j+1)+(k+1)).innerHTML=hos[j][k];
            }
            if(i==1){
                document.getElementById("4"+alp[i]+(j+1)+(k+1)).innerHTML=day[j][k];
            }
        }
    }
}