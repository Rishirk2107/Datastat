var obj={
    oneyr:{
            CB22013:{
                name:"Ezhil",
                gen:"M",
                hord:"D",
                marks:['110','100','100','10','100','100']
            },
            CB22038:{
                name:"Rishi",
                gen:"M",
                hord:"H",
                marks:['65','82','68','18','35','57']
            }

    },
    secyr:{
        CB21040:{
            name:"Yathissh",
            gen:"M",
            hord:"D",
            marks:['70','60','50','70','85','65']
        }

    },
    thirdyr:{
        CB21040:{
            name:"Sachin",
            gen:"F",
            hord:"D",
            marks:['70','60','50','40','35','65']
        }

    }
}
var count=[0,0,0];
var pass=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var fail=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var passper=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var failper=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var years=Object.keys(obj);
var tpass=[0,0,0];
var tfail=[0,0,0];
for(let i=0;i<years.length;i++){
    var arr=obj[years[i]];
    //console.log(arr); //{CB22013: {…}, CB22038: {…}}
    var objs=Object.keys(arr);
    //console.log(objs);
    for(let j=0;j<objs.length;j++){
        var data=arr[objs[j]];
        var marks=data.marks; 
        count[i]+=1;
        var pcount=0; 
        //Enter Algorithm here 
        for(let k=0;k<marks.length;k++){
            if(marks[k]>=50){
                pass[i][k]+=1;
                pcount+=1;
            }
            else{
                fail[i][k]+=1;
            }
        }
        if(pcount==6){
            tpass[i]+=1;
        }
        else{
            tfail[i]+=1;
        }
    }
}
console.log(tpass,tfail);
function percent(s,n){
    var a=(s/n)*100;
    return a;
}
for(let i=0;i<pass.length;i++){
    for(let j=0;j<pass[i].length;j++){
        passper[i][j]+=percent(pass[i][j],count[i]);
        failper[i][j]+=percent(fail[i][j],count[i]);
    }
}
for(let x=0;x<3;x++){
    pass[x].push(tpass[x]);
    passper[x].push(percent(tpass[x],count[x]));
    fail[x].push(tfail[x]);
    failper[x].push(100-(percent(tpass[x],count[x])));
}
console.log(passper[1]);
var datas=[[[count[0],count[0],count[0],count[0],count[0],count[0],count[0]],pass[0],passper[0],fail[0],failper[0]],[[count[1],count[1],count[1],count[1],count[1],count[1],count[1]],pass[1],passper[1],fail[1],failper[1]],[[count[2],count[2],count[2],count[2],count[2],count[2],count[2]],pass[2],passper[2],fail[2],failper[2]]];
var rows=['AA','PA','PP','FA','FP'];
//document.getElementById("AA11").innerHTML=datas[0][0][0];
for (let i=0;i<3;i++){
    for(let j=0;j<5;j++){
        for(let k=0;k<7;k++){
            document.getElementById('1'+rows[j]+(i+1)+(k+1)).innerHTML=datas[i][j][k];
        }
    }
}