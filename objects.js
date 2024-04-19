
//Quiz 1.
const people=[
    {name:'Alice',age:17},
    {name:'Eunice',age:22},
    {name:'Charlie',age:14},
    {name:'Max',age:19}
]


function adults(person){
    return person.filter(i=>i.age >=18).map(i=>i.name)
}
console.log(adults(people));

//Quiz 2.
const products=[
    {name:'Laptop',price:1200,category:'Electronics'},
    {name:'Shirt',price:25,category:'Clothing'},
    {name:'headphones',price:80,category:'Electronics'},
    {name:'shoes',price:60,category:'Clothig'},
]

function groupByCategory(){
 const group=Object.groupBy(products,({category})=>category)
 console.log(group)

 }

groupByCategory()

//Quiz 3.
const students=[
    {name:'john',scores:[90,80,85]},
    {name:'Jane',scores:[95,92,88]},
    {name:'Jim',scores:[70,80,75]},
    {name:'Jill',scores:[85,90,84]},
]
function avgScores(students){

    return students.filter(students=>{
        const average=students.scores.reduce(({acc,score})=>acc+score,0)/ students.scores.length;
        return average >= 85;
    }).map (students=> students.name);

}
const studentsAverage=avgScores(students);
console.log(avgScores(students));

//Quiz 4.
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  