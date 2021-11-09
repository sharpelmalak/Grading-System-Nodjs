const { describe } = require('yargs')
const yargs = require('yargs')
const crud = require('./crud')

yargs.command({
    command : 'add',
    describe : 'Add Student',
    builder:{
        id:{
            describe : 'This Is student unique id',
            type:'number',
            demandOption:true
        },
        name:{
            describe : 'This Is student name',
            type:'string',
            demandOption:true
        },
        subject:{
            describe : 'This Is subject of student',
            type:'string',
            demandOption:true
        },
        grade:{
            describe : 'This Is student grade in subject',
            type:'number',
            demandOption:true
        },
        comment:{
            describe : 'This Is comment about the student',
            type:'string',
            
        },
        
    },
    handler : (argv)=>{

       crud.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
    
})


yargs.command({
    command:'delete',
    describe: 'Delete student with id',
    builder:{
        id:{
            describe : 'student unique id to be deleted',
            type:'number',
            demandOption:true
        },
    },
    handler : (argv)=>{
         crud.deleteStudent(argv.id)
    }

})
yargs.command({
    command:'read',
    describe: 'read student information with id',
    builder:{
        id:{
            describe : 'student unique id to be viewed',
            type:'number',
            demandOption:true
        },
    },
    handler : (argv)=>{
         crud.readStudent(argv.id)
    }

})
yargs.command({
    command : 'list',
    describe : 'view all students',
    handler : ()=>{
        crud.viewStudents()
    }
})




yargs.parse()