var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"M",
                hord:"D",
                marks:['110','100','10','100','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"M",
                hord:"D",
                marks:['65','82','68','-1','65','57']
            }

    },
    secyr:{
        CB21040:{
            name:"Yathissh",
            gen:"M",
            hord:"D",
            marks:['70','60','50','56','5','65']
        }

    },
    thirdyr:{

    }
}

//Variable declaration starts
var arrear=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var absent=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var totalarrear=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
//Variable declaration ends
var years=Object.keys(obj);
for(let i=0;i<years.length;i++){
var arr=obj[years[i]];
//{CB22013: {…}, CB22038: {…}}
var objs=Object.keys(arr);
//console.log(objs);
for(let j=0;j<objs.length;j++){
    var data=arr[objs[j]];
    var marks=data.marks;
    var count=0,fail=0;abs=false;
    for(let k=0;k<marks.length;k++){
        if(marks[k]<50 && marks[k]>=0){
            count+=1;
            fail=k;
            abs=false;
        }
        else if(marks[k]==-1){
            count+=1;
            fail=k;
            abs=true;
        }
    }
    if(count==1 && abs==false){
        arrear[i][fail]+=1;
        totalarrear[i][fail]+=1;
    }
    else if(count==1 && abs==true){
        absent[i][fail]+=1;
        totalarrear[i][fail]+=1;
    }
}
}
console.log(totalarrear[0]);
function sum(arr){
var summ=0
for(let i=0;i<arr.length;i++){
    summ+=arr[i];
}
return summ
}
totalarr=[0,0,0];
totalabs=[0,0,0];
var total=[0,0,0];
for(let i=0;i<arrear.length;i++){
    totalarr[i]=sum(arrear[i]);
    totalabs[i]=sum(absent[i]);
    total[i]=totalarr[i]+totalabs[i];
    
}
total.push(sum(totalarr)+sum(totalabs));
totalarr.push(sum(totalarr));
totalabs.push(sum(totalabs));
var arr1=[totalarr,totalabs,total];
for(let i=0;i<3;i++){
    arrear[i].push(sum(arrear[i]));
    absent[i].push(sum(absent[i]));
    totalarrear[i].push(sum(totalarrear[i]));
}
console.log(totalarrear[0]);
var arr2=[arrear,absent,totalarrear];
var alp=['F','A','T'];
for(let i=0;i<3;i++){
    for(let j=0;j<4;j++){
        document.getElementById("3"+alp[i]+(j+1)).innerHTML=arr1[i][j];
    }
}
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<7;k++){
            console.log(""+(i+1)+(j+1)+(k+1));
            document.getElementById("3"+(i+1)+(j+1)+(k+1)).innerHTML=arr2[j][i][k];
        }
    }
}
