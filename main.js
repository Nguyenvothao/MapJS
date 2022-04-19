var courses = [
    {
        index: 1,
        course: 'Javascript',
        Coin: 200
    }, 

    {
        index: 2,
        course: 'Python',
        Coin: 200
    }, 

    {
        index: 1,
        course: 'PHP',
        Coin: 250
    }, 

    {
        index: 1,
        course: 'Html',
        Coin: 300
    }, 
];

function CoursesHandler(course)
{
    return {
        index: course.index,
        course: `Khóa học: ${course.name}`,
        Coin: `Gia: ${course.Coin}` 
    }
}

var newCourses = courses.map(CoursesHandler);
console.log(newCourses);
