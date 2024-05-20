const results = [
    {name:'student_1',rollNumber:10,marks:80},
    {name:'student_2',rollNumber:11,marks:69},
    {name:'student_3',rollNumber:12,marks:32},
    {name:'student_4',rollNumber:13,marks:55},
    {name:'student_5',rollNumber:14,marks:33}
]

// QUESTION : RETURN PERCENTAGE ARRAY FOR ALL STUDENTS
    // {
    //     const percentages = results.map((result,index) => `student with rollNumber ${result.rollNumber} has a percentage of ${Math.round((result.marks/200) *100)}`)
    //     console.log(percentages)
    // }

// QUESTION : RETURN DETAILS OF THOSE STUDENTS WHO SCORED MORE THAN 35 MARKS
    // {
    //     const passStudents = results.filter((r,i) => r.marks >= 35)
    //     console.log(passStudents)
    // }

// QUESTION : RETURN NAMES OF STUDENTS WHO SCORED MORE THAN 35
    {
        const passStudents = results.filter((r,i) => r.marks >= 35)
                                    .map((r,i) => r.name)
        console.log(passStudents)
    }
// QUESTION :   RETURN DETAILS OF THOSE STUDENTS WHO SCORED MORE THAN 35 MARKS AND ROLLNUMBER > 12
    // {
    //     const passStudents = results.filter((r,i) => r.marks >= 35)
    //                                 .filter((r,i) => r.rollNumber > 12)
    //     console.log(passStudents)
    // }

// QUESTION : CALCULATE CUMULATIVE MARKS PERCENTAGE IN THE RESULTS THAT IS (SUM(ALLMARKS) / SUM(TOTAL MARKS * NUMBER OF STUDENTS)) *100
    // {
    //     let totalScoredMarks = results.reduce(((total,e,i) => total += e.marks),0 )
    //     let totalMarks = results.length * 200
    //     let cmp =( totalScoredMarks / totalMarks) * 100
    //     console.log(cmp)
    // }