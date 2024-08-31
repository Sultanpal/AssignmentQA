// code is written by sultan 
// NOTE : plz ignore spelling. and focus to learn.

//Assignment : Take a object and enter value of product in json formated and then Serach the price of product by this name or category.

// create a object and enter some value in Json format.
const obj = [
    // {
    //     id:0,
    //     name:"name",
    //     price :"price",
    //     category : "category"
    // },
    {
        id:1,
        name:"Ladu",
        price :"150",
        category : "Sweet"
    },
    {
        id:2,
        name:"jalabi",
        price :"200",
        category : "Sweet"
    },
    {
        id:3,
        name:"Banana",
        price :"80",
        category : "Fruit"
    },
    {
        id:4,
        name:"Apple",
        price :"250",
        category : "Fruit"
    }
];


function SearchByName(name){
    let pid=1;
    for(let i=0;i<obj.length;i++){
        pid = i;
        if(obj[i].name == name){
            break;
        }
    }
    console.log(name +" Price : "+ obj[pid].price);
}

function SearchByCategory(name){
    let pid=0;
    let arrg = [];
    for(let i=0;i<obj.length;i++){
        pid = i;
        if(obj[i].category == name){
            arrg.push(i);
        }
    }
    arrg.forEach(element => {
        console.log(obj[element].name+" Price : "+ obj[element].price);
        
    });
}

SearchByName("Apple");
SearchByCategory("Fruit");