const obj={
 person: "Tharun",
 friends:{
    person:"Guvi",
 }
};

//dot methode
console.log(obj.person);
console.log(obj.friends.person);

//map methode
console.log(obj["person"]);
console.log(obj["friends"]["person"]);
const frnd = "friends";
console.log(obj[frnd]);

for(key in obj){
    console.log("keysss : ",key);
}


//         0 1  2   3
const arr=[1,2,[5,7],3];
console.log(arr[2][0]);

console.log("--------------------------factory function--------------------");
//factory method
//returns an object
function manufacturecar(name, engineSpec, seat , variant){
    return{
       // name:name,
        //engineSpec:engineSpec,
        //seat:seat,
        //variant:variant,
        name,
        engineSpec,
        seat,
        variant,
        startManufacturing :function(){
            console.log(
                `starting Manufacturinf ${name},
                 Creating an engine of ${engineSpec} liter and variant ${variant},
                 Creating a Body for ${name},
                 Attaching seats of type ${seat},
                 Completed the chase of car ${name}
            `);
        },
    };
}

const virtus = manufacturecar("Viturs",1,"4 seat leather","Petrol");
const vento =manufacturecar("Vento",1.5,"4 foam seat","diesel");
console.log(virtus);
virtus.startManufacturing();
console.log(vento);
vento.startManufacturing();

//this keyword


const grandFatherObj = {
    house : "GrandFather House",
    getHouse : function(){
        console.log(this.house)
    },
    Fatherobj : {
        house : "Father House",
        getHouse :function(){
         console.log(this.house);
        },
    },
};




const Fatherobj = {
    house : "Father house",
    car : "Father car",
    Company : "Father Company",
    getProperty : function(){
        console.log(this);
    },
    getHouseName : function(){
        console.log(this);
    },
};

Fatherobj.getProperty();
Fatherobj.getHouseName();


//constructor functions
//create a object

function Manufacturecar(name, seat, engine, variant){
  this.name = name;
  this.seat = seat;
  this.engine = engine;
  this.variant = variant;
  this.power =this.engine * 100;

  this.getCarDetails = function(){
     console.log(`
         Name of the car is ${this.name}
         No of seats ${this.seat}
         engine capacity ${this.engine} liter
         variant of the car is ${this.variant}
         horse power is ${this.power}
     `);
  };
}

//new keyword for constructor
const passat = new Manufacturecar("passat",4,3,"Petrol");
console.log(passat);
//creates a obj manufacurecar{}
//





//class
//4 pillars of oops
//Encapsulation
//Inheritance
//Abstraction
//polymorphism
//class in js

class CarProduction{
    //encapsulation
    constructor(name,color,fuelVariant,engineCapacity){
        this.name = name;
        this.color = color;
        this.fuelVariant = fuelVariant;
        this.engineCapacity = engineCapacity;
    }
    
    //businnes logic or methods
    getDetails(){
        console.log(`
        Name : ${this.name}
        color : ${this.color}
        Fuel-Type : ${this.fuelVariant}
        Engine-Capacity : ${this.engineCapacity} liter        
        
        `);
    }
}

const car1 = new CarProduction("Polo","Red","Diesel",1.5);
console.log(car1);
car1.getDetails();
const car2 = new CarProduction("tiguan","grey","petrol",4);
car2.getDetails();

//Inheritance
class Features extends CarProduction{
    constructor(name,color,fuelVariant,engineCapacity,safety,model,seatType,type){
        super(name,color,fuelVariant,engineCapacity);
        this.safety = safety;
        this.model = model;
        this.type = type;
        this.seatType = seatType; 
    }
    //getter method
    get safety(){
        return this._safety;
    }
    //setter method
    set safety(newStarRating){
        if(newStarRating < 0){
            console.log("Error : star rating cannnot be lesser than 0");
        }else if(newStarRating > 5){
            console.log("Error : star rating cannot be greater than 5");
        }else{
            this._safety = newStarRating;
        }
    }
   

    getCarFeatures(){
        //abstract
        let bhp = (this.engincpacity *100) / 1.8;
        console.log(`
          star Rating : ${this.safety}
          Model : ${this.model}
          seates : ${this.seatType} seats
          car-Body Type : ${this.type}
          BHP : ${bhp.toFixed(1)}BHP
        `);
    }
//polymorphism
    getspecialDetails(){
        console.log(`special Details are ${this.seatType}seat`)
    }
}



const car3 = new Features("tiguan","grey","petrol",4,5,"Topline","SUV","leather");
console.log(car3);
car3.getDetails();
car3.getCarFeatures();

console.log(car3.safety);
car3.safety = -1;
car3.safety = 4;
//console.log(cae3.safety);
car3.getspecialDetails();















































//basic laptopMaking object

const lapTopObject = {
    Name : "HP",
    Model : "Pavilian",
    Processor : "Intel Core 5",
    Display : "15 Inch",
    Storage : "ssd",
    Graphic : "IRIS Graphic",
    lap1 : function(){
        console.log("Top Model Laptop");
    },
    lap2 :function(){
        console.log("Second Model Laptop");
    },
    Laptop : function(){
        lapTopObject.lap1();
        lapTopObject.lap2();
    } 

};

console.log(lapTopObject);
console.log(lapTopObject.Display);
console.log(lapTopObject.Graphic);
console.log(lapTopObject.Processor);

lapTopObject.Laptop();

//short hand property example

const data = "UNIVERSE";
const sampleObject = {
    data,
};

console.log(sampleObject);

//factory methode
//return an object

function LaptopObj(name , model ,Display,processor,graphic){
     return {
        name,
        model,
        Display,
        processor,
        graphic,
        Making : function(){
            console.log(`
               LaptopName      :  ${name},
               LaptopMode      :  ${model},
               LaptopDisplay   :  ${Display},
               LaptopProcessor :  ${processor},
               LaptopGraphic   :  ${graphic}
            `);
        },
     };
};

const HP = LaptopObj("HP","Pavillion","15 inch","Intel Core 5","IRIS");
console.log(HP);
HP.Making();

const ASUS = LaptopObj("ASUS","ROG","15 INCH","AMD RYZEN","NVIVD");
console.log(ASUS);
ASUS.Making();


//this keyword
//this targets immediate parent obj
const family ={
    Members : "11",
    getMembers : function(){
        console.log(this.Members);
    },

    family2 :{
     Members : "2",
     getMembers : function(){
        console.log(this.Members);
      },
     getAllDetails(){
        const inarrow = ()=>{
            console.log(this.Members);
        };
      
        inarrow();

     },

      // arrow function windows
      getDetails :()=>{
        console.log(this);
    },
   
    }
};

family.getMembers();
family.family2.getMembers();
family.family2.getDetails();
family.family2.getAllDetails();

//construcor function
//create a object

function Laptopobj(Name, display, Processor,Graphic){
this.Name = Name,
this.display = display,
this.Processor = Processor,
this.Graphic = Graphic
this.getLapDetails = function(){
    console.log(`
         Laptop_NAme      :  ${this.Name}
         Laptop_Display   :  ${this.display}
         Laptop_processor :  ${this.Processor}
         Laptop_graphic   :  ${this.Graphic}   
    `);
}
};

Laptopobj.prototype.getLap = function(){
    console.log(this.Processor)};

const hp = new Laptopobj("hp",15,"Intel5","NVIVD");
console.log(hp);
hp.getLapDetails();
hp.getLap();

const manuf = {};
console.log(manuf);
manuf.name = "manufacture";
manuf.property = "controllingproduct";
console.log(manuf);







//task
// Movie

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if(typeof this.rating === 'undefined'){
            this.rating = 'PG';
        }
    }
}

let movie1 = new Movie("Maanaadu","Vstudio",5);
console.log(movie1);
let movie2 = new Movie("PathuThala","StudioGreen");
console.log(movie2);
let movie3 = new Movie("STR48","RajkamalProduction");
let movie4 = new Movie("STR49","StudioGreen",4);

function getPG(movies){
 result =[];
   for(let i =0;i<movies.length;i++) 
    {
        if(movies[i].rating == 'PG'){
            result.push(movies[i].title);
        }
    } 
    return result;
}

let arra = [movie1,movie2,movie3,movie4];
console.log(getPG(arra));

let movie5 = new Movie('Casino Royale','Eon Productions','PG13');
console.log(movie5);



//Cirlce

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
         return this.color = color;
    }
    getRadius(){
        return this.radius = this.radius;
    }
    setRadius(radius){
        return this.radius = radius;
    }
    toString(){
        return ('radius = '+this.radius+',color = '+this.color);
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return 2* (Math.PI) * this.radius;
    }
}

let cir = new Circle(2,'Black');
console.log(cir);

//black
console.log(cir.getColor());
cir.setColor('Yellow');
console.log(cir.getColor());

console.log(cir.getRadius());
cir.setRadius(4.5);
console.log(cir.getRadius());
console.log('Circle : '+cir.toString());
console.log(cir.getArea());
console.log(cir.getCircumference());


//Person 

class Person{
    constructor(name,age,gender,Role){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.Role = Role;
    }
    getPersonName(){
        return this.name;
    }
    setPersonName(Pname){
        return this.name = Pname;
    }
    getPersonAge(){
        return this.age;
    }
    setPersonAge(pAge){
        return this.age = pAge;
    }
    getPersonRole(){
        return this.Role ;
    }
    setPersonRole(PRole){
        return this.Role = PRole; 
    }

};

let person1= new Person('Tharun',23,'Male','FullStackDeveloper');
console.log(person1);
let person2 = new Person('R',22,'Female','Dentist');
console.log(person2);   


//uber

class Uber{
    distance = 10;
    waiting = 5;

    constructor(distance,waiting){
        this.distance = distance;
        this.waiting = waiting;
    }

    getDistance(){
        return this.distance; 
    }
    setDistance(dis){
        return this.distance = dis;
    }
    getWaiting(){
        return this.waiting;
    }
    setWaiting(wat){
        return this.waiting = wat;
    }

    Price(dis){
    //1km = 6
    //min = 70'
    let min = 70;
    this.distance = dis;
    let price = dis * 6;
    let res = 0 ;
    if(min > price){
        res = min;
    }else{
        res = price
    }
    console.log(res);
    return res;
    }
    
     wait(w){
        let result = 0;
        let result1=0;
        this.wait = w;
        if(w > 15 && w < 30){
            result = 50;
        }
        if(w < 15){
            result = 0;
        }
        if(w > 30){
            result = Math.floor(w / 30);
            result1 = result * 100;
        }
        console.log(result1);
        return result;
     }

}

let travel = new Uber(300, 45);
let price1 = (travel.Price(300));
let wait1=(travel.wait(45))
console.log(price1 + wait1);


