let arr = [
    {
        name: 'iskandar',
        age: 9,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'zafar',
        age: 14,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'temur',
        age: 1,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'sardor',
        age: 24,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'timur',
        age: 19,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'aziz',
        age: 28,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'ali',
        age: 26,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mir',
        age: 17,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'jonibek',
        age: 25,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'shox',
        age: 22,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'shax',
        age: 68,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mustafa',
        age: 78,
        course: {
            title: 'dev'
        }
    }
]

let courses = {
    smm: {
        count: 0,
        arr_names: [],
        arr_age: 0
    },
    dev: {
        count: 0,
        arr_names: [],
        arr_age: []
    },
    graph: {
        count: 0,
        arr_names: [],
        arr_age: []
    },



}
let jutsu_one = []
let jutsu_tw = []
let jutsu_thr = []
arr.filter(item => item.course.title.trim() === `smm` && courses.smm.count++ && courses.smm.arr_names.push(item) && jutsu_one.push(item.age) ||
    item.course.title.trim() === `dev` && courses.dev.count++ && courses.dev.arr_names.push(item) && jutsu_tw.push(item.age) ||
    item.course.title.trim() === `graph` && courses.graph.count++ && courses.graph.arr_names.push(item) && jutsu_thr.push(item.age) 
)
let jutsu_code = jutsu_one.map(i => x += i, x = 0).reverse()[0] / jutsu_one.length
courses.smm.arr_age = jutsu_code
let jutsu_code_tw = jutsu_tw.map(i => x += i, x = 0).reverse()[0] / jutsu_tw.length
courses.dev.arr_age = jutsu_code_tw
let jutsu_code_thr =  jutsu_thr.map(i => x += i, x = 0).reverse()[0] / jutsu_thr.length
courses.graph.arr_age = jutsu_code_thr
console.log(courses);