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
console.log(totalnumbers);