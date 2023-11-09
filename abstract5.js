var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"F",
                hord:"H",
                marks:['100','100','100','100','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"F",
                hord:"D",
                marks:['65','2','68','80','51','57']
            }


    },
    secyr:{
        CB21040:{
            name:"Yathissh",
            gen:"M",
            hord:"D",
            marks:['70','60','50','40','35','65']
        },
        CB22039:{
            name:"Rishi",
            gen:"F",
            hord:"H",
            marks:['100','82','68','68','55','57']
        }

    },
    thirdyr:{
        CB22039:{
            name:"Rishi",
            gen:"F",
            hord:"D",
            marks:['100','82','68','68','55','57']
        },
        CB22051:{
            name:"Vishnu",
            gen:"F",
            hord:"H",
            marks:['100','82','68','68','55','57']
        }
    }
}
var male=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var female=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var total1=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var hmale=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var hfemale=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var total2=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var dmale=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var dfemale=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var total3=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var day=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var hos=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var total4=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var years=Object.keys(obj);
for(let i=0;i<years.length;i++){
var arr=obj[years[i]];
//console.log(arr); //{CB22013: {…}, CB22038: {…}}
var objs=Object.keys(arr);
//console.log(objs);
for(let j=0;j<objs.length;j++){
    var data=arr[objs[j]];
    var genn=data.gen;
    var marks=data.marks; 
    var hod=data.hord;  
    var countarr=0;
    //Enter Algorithm here 
    for(let k=0;k<marks.length;k++){
        if(marks[k]<50){
            countarr+=1;
        }
    }
    if(genn=="M"){
        male[i][0]+=1;
        if(hod=="D"){
               dmale[i][0]+=1;
               day[i][0]+=1;
        }
        else{
            hmale[i][0]+=1;
            hos[i][0]+=1;
        }
        if(marks[0]>=50 && marks[1]>=50 && marks[2]>=50 && marks[3]>=50 && marks[4]>=50 && marks[5]>=50){
            male[i][1]+=1;
            if(hod=="D"){
                dmale[i][1]+=1; 
                day[i][i]+=1;
         }
         else{
             hmale[i][1]+=1;
             hos[i][1]+=1;
         }
        }
        else{
            male[i][9]+=1;
            male[i][countarr+3]+=1;
            if(hod=="D"){
                dmale[i][9]+=1;
                dmale[i][countarr+3]+=1;
                day[i][9]+=1;
                day[i][countarr+3]+=1;
         }
         else{
             hmale[i][9]+=1;
             hmale[i][countarr+3]+=1;
             hos[i][9]+=1;
             hos[i][countarr+3]+=1;
         }
        }
    }
    if(genn=="F"){
        female[i][0]+=1;
        if(hod=="D"){
            dfemale[i][0]+=1;
            day[i][0]+=1;
     }
     else{
         hfemale[i][0]+=1;
         hos[i][0]+=1;
     }
        if(marks[0]>=50 && marks[1]>=50 && marks[2]>=50 && marks[3]>=50 && marks[4]>=50 && marks[5]>=50){
            female[i][1]+=1;
            if(hod=="D"){
                dfemale[i][1]+=1;
                day[i][1]+=1;
            }
            else{
                hfemale[i][1]+=1;
                hos[i][1]+=1;
         }
        }
        else{
            if(countarr>0){
            female[i][9]+=1;
            female[i][countarr+3]+=1;
            if(hod=="D"){
                dfemale[i][9]+=1; 
                dfemale[i][countarr+3]+=1;
                day[i][9]+=1;
                day[i][countarr+3]+=1;
            }
            else{
                hfemale[i][9]+=1;
                hfemale[i][countarr+3]+=1;
                hos[i][9]+=1;
                hos[i][countarr+3]+=1;
            }
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
    for(let j=0;j<11;j++){
        total1[i][j]=male[i][j]+female[i][j];
        total2[i][j]=hmale[i][j]+hfemale[i][j];
        total3[i][j]=dmale[i][j]+dfemale[i][j];
        total4[i][j]=day[i][j]+hos[i][j];
    }
}
for(let i=0;i<3;i++){
    for(j=0;j<11;j++){
        male[i][2]=percent(male[i][1],male[i][0]);
        female[i][2]=percent(female[i][1],female[i][0]);
        total1[i][2]=percent(total1[i][1],total1[i][0]);
        hmale[i][2]=percent(hmale[i][1],hmale[i][0]);
        hfemale[i][2]=percent(hfemale[i][1],hfemale[i][0]);
        total2[i][2]=percent(total2[i][1],total2[i][0]);
        dmale[i][2]=percent(dmale[i][1],dmale[i][0]);
        dfemale[i][2]=percent(dfemale[i][1],dfemale[i][0]);
        total3[i][2]=percent(total3[i][1],total3[i][0]);
        day[i][2]=percent(day[i][1],day[i][0]);
        hos[i][2]=percent(hos[i][1],hos[i][0]);
        total4[i][2]=percent(total4[i][1],total4[i][0]);

        male[i][10]=percent(male[i][9],male[i][0]);
        female[i][10]=percent(female[i][9],female[i][0]);
        total1[i][10]=percent(total1[i][9],total1[i][0]);
        hmale[i][10]=percent(hmale[i][9],hmale[i][0]);
        hfemale[i][10]=percent(hfemale[i][9],hfemale[i][0]);
        total2[i][10]=percent(total2[i][9],total2[i][0]);
        dmale[i][10]=percent(dmale[i][9],dmale[i][0]);
        dfemale[i][10]=percent(dfemale[i][9],dfemale[i][0]);
        total3[i][10]=percent(total3[i][9],total3[i][0]);
        day[i][10]=percent(day[i][9],day[i][0]);
        hos[i][10]=percent(hos[i][9],hos[i][0]);
        total4[i][10]=percent(total4[i][9],total4[i][0]);
    }
}
for(var i=0;i<3;i++){
    for(var j=0;j<11;j++){
        
    }
}
var tarr=[male,female,total1,hmale,hfemale,total2,dmale,dfemale,total3];
var alp=['A','B','C'];
for(let i=0;i<9;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<11;k++){
            document.getElementById("5"+alp[j]+(i+1)+(k+1)).innerHTML=tarr[i][j][k];
        }
    }
}
var ttarr=[day,hos];
var finalarr=[0,0,0,0,0,0,0,0,0,0,0];
var alp2=['X','Y','Z'];
for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<11;k++){
            document.getElementById("5"+alp2[j]+(i+1)+(k+1)).innerHTML=ttarr[i][j][k];
        }
    }
}

for(var i=0;i<11;i++){
    if(i!=2 && i!=10){
        finalarr[i]=total4[0][i]+total4[2][i]+total4[2][i];
    }
    else if(i==2){
        finalarr[i]=percent(finalarr[1],finalarr[0]);
    }
    else{
        finalarr[i]=percent(finalarr[9],finalarr[0]);
    }
}
for(i=0;i<11;i++){
    document.getElementById("5"+"L"+(i+1)).innerHTML=finalarr[i];
}