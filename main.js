var courses = [
    {
        id: 1,
        course: 'Javascript',
        Coin: 200
    }, 

    {
        id: 2,
        course: 'Python',
        Coin: 200
    }, 

    {
        id: 1,
        course: 'PHP',
        Coin: 250
    }, 

    {
        id: 1,
        course: 'Html',
        Coin: 300
    }, 
];

var languages = ['Js', 'Php', 'Python']
function CoursesHandler(course, index)
{
    return {
        id: course.id,
        course: `Khóa học: ${course.name}`,
        Coin: `Gia: ${course.Coin}` ,
        index: index
    }
}

var newCourses = courses.map(CoursesHandler);
//console.log(newCourses);
var totalCoin = courses.reduce(function(total, currentValue)
{
    return total + currentValue.Coin;
}, 0);
//console.log(totalCoin);
var numbers = [2, 4, 6, 8];
var totalnumbers = numbers.reduce(function(total, currentValue)
{
    return total+currentValue;
}, 0)
//console.log(totalnumbers);
var randomNumbers = [1, 2, [3, 5], 7, [2, 6]];
var flatArray = randomNumbers.reduce(function(flatOuput, depthItem)
{
    return flatOuput.concat(depthItem);
}, []);
//console.log(flatArray);
//call back
Array.prototype.map2 = function(callback)
{
    var lengthArray=this.length;
    for (var i=0; i<lengthArray; i++)
    {
        callback(this[i], i);
    }
}

// languages.map2(function(index, course)
// {
//     console.log(index, course);
// })

var objects=['Php', 'Javscript', 'Python'];
var i =[1, 3, 5, 7];
Array.prototype.map3 = function(callback)
{
    var lengthI= this.length, a=[];
    for(var i=0; i< lengthI; i++)
    {
        var result=callback(this[i], i);
        a.push(result);
    }
    return  a;
}

var totali = i.map3(function(valuee, indexx)
{
    return valuee;
})
 console.log(totali);


// var totali=i.map(function(curentValues, index){
//     return curentValues;
// }, 0);
// console.log(totali);

//console.log(totali);
