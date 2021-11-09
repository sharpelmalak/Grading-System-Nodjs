const fs = require('fs')

const addStudent =(id,name,subject,grade,comment)=>{

    const students = loadStudents()
    const isDuplicated = students.find((student)=>{
        return student.id === id
    })
    if(!isDuplicated){
        students.push({
            id,
            name,
            subject,
            grade,
            comment
        })
        saveStudnts(students)
        console.log('Saved Successfully')
    }
    else{
        console.log('Student Already Exist')
    }
    

}


const loadStudents = ()=>{
    try{
        const  allStudents = fs.readFileSync('students.json').toString()
        return JSON.parse(allStudents)
    }
    catch{
        return []
    }
}

const saveStudnts= (students)=>{
     
    fs.writeFileSync('students.json',JSON.stringify(students))
}

const deleteStudent = (id)=>{
    const allStudents = loadStudents()
    if(allStudents.find((studnt)=>{
        return studnt.id === id
    })){
        const updatedStudents = allStudents.filter((student)=>{
            return student.id !== id
        })
         
        saveStudnts(updatedStudents)
        console.log('The Student Deleted successfully')
    
    }

    else console.log('Student Not Found Try a correct Id')

}

const viewStudents = ()=>{
    const allStudents = loadStudents()
        console.log('ID    NAME    SUBJECT    GRADE    COMMENT')
        allStudents.forEach((element) => {
            if(element.comment)
            console.log(element.id+'     '+element.name+'    '+element.subject+'     '+element.grade+'     '+element.comment)
            else console.log(element.id+'     '+element.name+'    '+element.subject+'     '+element.grade+'     '+'No Comments')
        });

}
const readStudent = (id)=>{
    var students = loadStudents()
    const studentToBeViewed = students.find((student)=>{
           return student.id === id
        })
        if (!studentToBeViewed)
            console.log('The Student Does not exist Try a Correct Id')
      
        else {
           console.log('Student Id :'+studentToBeViewed.id)
           console.log('Student Name :'+studentToBeViewed.name)
           console.log('Student Subject :'+studentToBeViewed.subject)
           console.log('Student Grade :'+studentToBeViewed.grade)
           if(studentToBeViewed.comment)
            console.log('Student Comment :'+studentToBeViewed.comment)
            else console.log('Student Comment : No Comments')
             
        }

}


module.exports = {
    addStudent,
    deleteStudent,
    viewStudents,
    readStudent
}