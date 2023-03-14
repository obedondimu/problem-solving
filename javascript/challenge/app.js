// Creating the div element

document.body.style.background = '#8396A9';
function factCalc(){
    const divElent = document.createElement("div");
    // divElent.textContent = message;
    divElent.style.width = "600px"
    divElent.style.height = "200px"
    divElent.style.background = "white"
    divElent.style.alignContent = "center"
    divElent.style.marginTop = "20px"
    divElent.setAttribute("id", "div1");
    divElent.setAttribute("class", "fact");
    
    // h1 title
    const h1 = document.createElement('h1');
    h1.innerHTML = "Calculating Factorial of A Number"
    divElent.appendChild(h1);

    // creating the input 
    const input = document.createElement("input");
    input.setAttribute('type' , "number");
    input.setAttribute("id", 'val');
    divElent.appendChild(input);

    //button
    const button = document.createElement("button");
    button.setAttribute('id', 'submit');
    button.style.width = '100px';
    button.style.height = '30px';
    button.style.marginTop='10px'
    button.innerHTML = "calculate";
    divElent.appendChild(button);

    // h2
    const h2 = document.createElement("h2");
    h2.style.marginTop = "10px";
    h2.setAttribute("id", "answer");
    // h2.innerHTML = "submit";
    divElent.appendChild(h2);

    document.body.appendChild(divElent);
}
factCalc()
const button = document.getElementById("submit");
button.addEventListener('click' , () => {
    const value = document.getElementById("val").value;
    if(value<0){
        let msg = "Numbers must be >= to 0";
        const res = document.getElementById("answer");
        res.style.color = "red";
        res.innerHTML = msg;
    }
    factorial(value);

});

// Calculating the Factorial
function factorial(value) {
    let result = 1;
    let i;
    for ( i = 1; i <= value; i++) {  
        result *=i;    

        const res = document.getElementById("answer");
        res.innerHTML = result;
        res.style.color =""
        
    }
    return result;
    
}

//Generating a dictionary
function    dicGen(){
    const dicElent = document.createElement("div");
    dicElent.style.width = "600px"
    dicElent.style.background = "white"
    dicElent.style.alignContent = "center"
    dicElent.style.marginTop = "20px"
    dicElent.setAttribute("id", "div2");
    dicElent.setAttribute("class", "fact");
    
    // h1 title
    const h1 = document.createElement('h1');
    h1.innerHTML = "Generate Dictionary"
    dicElent.appendChild(h1);

    // creating the input 
    const input = document.createElement("input");
    input.setAttribute('type' , "number");
    input.setAttribute("id", 'dicVal');
    dicElent.appendChild(input);

    //button
    const button = document.createElement("button");
    button.setAttribute('id', 'dictionary');
    button.style.width = '100px';
    button.style.height = '30px';
    button.style.marginTop='10px'
    button.innerHTML = "generate";
    dicElent.appendChild(button);

    // h2
    const table = document.createElement("table");
    table.setAttribute("border", "10");
    table.style.marginTop = "10px";
    const tableBody = document.createElement("tbody");
    tableBody.style.borderBlockStyle = "dotted"

    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    th1.style.marginRight = "40px";
    th1.innerHTML = "Number";
    th2.innerHTML = "Square";
    tr1.appendChild(th1);
    tr1.appendChild(th2);

    tableBody.appendChild(tr1);
    tableBody.appendChild(tr2);

    table.appendChild(tableBody);
    dicElent.appendChild(table);

    document.body.appendChild(dicElent);
}
dicGen()
const btn = document.getElementById("dictionary")
btn.addEventListener('click' , () => {
    const num = document.getElementById("dicVal").value;
    dictNum(num);
});
function dictNum(value){
    let res = {}
    let i ;
    for(i=1; i<=value; i++){
        let sq = i * i;
        // sq++;
        res[i] = sq;

        // integ.innerHTML = res;
        
        // console.log(res);
    }
    const tableValue = document.querySelector("table")
    Object.entries(res).forEach(entry => {
        const [key, value] = entry;
        const tr = document.createElement('tr');
        tr.style.color = "white";
        tr.style,background = "#161B22"
        const td1 = document.createElement('td');
        td1.style.background = "#2E3248"
        const td2 = document.createElement('td');
        td2.style.background = "rgba(0, 0, 0, 0.94)"

        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.innerHTML = key;
        td2.innerHTML = value;
        tableValue.appendChild(tr);

        
    });
    // return res;
}
// End of Generating a Dictionary

// Multiplication table
(function table () {
    const divTable = document.createElement("div");
    // divTable.textContent = message;
    // divTable.style.width = "600px"
    // divTable.style.height = "200px"
    divTable.style.background = "white"
    divTable.style.alignContent = "center"
    divTable.style.marginTop = "20px"
    divTable.setAttribute("id", "div2");
    divTable.setAttribute("class", "fact");

    const h1 = document.createElement('h1');
    h1.innerHTML = "Generate Multiplication Table"
    divTable.appendChild(h1);
    

    
    const input = document.createElement("input");
    input.setAttribute('type' , "number");
    input.setAttribute("id", 'multipVal');
    input.style.marginTop = "5px";
    divTable.appendChild(input);


    const button = document.createElement("button");
    button.setAttribute('id', 'multip');
    button.style.width = '100px';
    button.style.height = '30px';
    button.style.marginTop='10px'
    button.style.marginBottom='10px'
    button.innerHTML = "CreateTable";
    divTable.appendChild(button);
    
    const table = document.createElement("table");
    table.setAttribute('id', 'product')
    divTable.appendChild(table);

    document.body.appendChild(divTable);
})();
// table();
const btns = document.getElementById("multip");
btns.addEventListener('click' , () => {
    const n = document.getElementById("multipVal").value;
    console.log(n);
    multiplication(n);
});

function multiplication(n){
    const tables = document.getElementById("product");

    for (let i = 0; i <=n; i++) {
        const row = document.createElement("tr");
        row.style.background = "black";
        row.style.color = "white";  
        tables.appendChild(row);
        for (let j = 0; j <=n; j++) {
            const columns = document.createElement("td");
            row.appendChild(columns);
            if (i === 0 || j === 0) {
                columns.style.padding = "20px"
                columns.style.margin = "10px"
                columns.textContent = i + j ;
            } else {
                columns.style.padding = "30px"

                columns.textContent = i *j;

            }
           

        }
        
    }
}

// Generating a  2D array

function dimensionalArray(){
    const  arrayDiv = document.createElement("div");
    arrayDiv.style.width = "600px"
    // arrayDiv.style.height = "200px"
    arrayDiv.style.background = "white"
    arrayDiv.style.alignContent = "center"
    arrayDiv.style.marginTop = "20px"
    arrayDiv.setAttribute("id", "div3");
    arrayDiv.setAttribute("class", "fact");

    const h1 = document.createElement('h1');
    h1.innerHTML = "Generate 2D Array"
    arrayDiv.appendChild(h1);

    const input1 = document.createElement("input");
    input1.setAttribute('type' , "number");
    input1.setAttribute("id", 'input1');
    input1.setAttribute("name", 'Xvalue');
    input1.style.marginTop = "5px";
    arrayDiv.appendChild(input1);

    const input2 = document.createElement("input");
    input2.setAttribute('type' , "number");
    input2.setAttribute("id", 'input2');
    input2.setAttribute("name", 'Yvalue');
    input2.style.marginTop = "5px";
    arrayDiv.appendChild(input2);
    
    const button = document.createElement("button");
    button.setAttribute('id', 'array');
    button.style.width = '100px';
    button.style.height = '30px';
    button.style.marginTop='10px'
    button.style.marginBottom='10px'
    button.innerHTML = "Create Array";
    arrayDiv.appendChild(button);


    const arrTable = document.createElement('table');
    arrTable.setAttribute("id" , "dimArray")
    arrayDiv.appendChild(arrTable);





    document.body.appendChild(arrayDiv);
    

}
dimensionalArray();

const butns = document.getElementById("array");
butns.addEventListener('click' , () => {
    const n1 = document.getElementById("input1").value;
    const m2 = document.getElementById("input2").value;
    genArray(n1,m2);
});

function genArray(n,m) {
    const arrayContent = document.getElementById('dimArray')
    let arr = [];
    for(let i = 0; i<=n; i++){
        for(let j =0; j<=m; j++){
            arr[i] = []
        }

    }

    for (let i = 0; i< n; i++) {
        const row = document.createElement("tr");
        arrayContent.appendChild(row);
        for(let j = 0; j< m; j++) {
            arr[i][j] = i *j;
            
            const columns = document.createElement("td");
            row.appendChild(columns);
            columns.textContent = i * j;
           
        }
    }
    return arr;

    
}

function stringSort(array){
    return array.sort()
}

function capitilize(string){
    return string.toUpperCase() ;
}