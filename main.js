//write your code here to make the tests pass

class Document {
    constructor (name) {
        this.EmployeeName = name;
    }
}

class Employee {
    constructor (name) {
        this.name = name;
    }
    // methods
    work(off) {
        /*
        //let doc, name
        for (let i = 0; i < 10; i++) {
            //let name = i == 0 || i == 9 ? "elevation" :"employee" + i;
            let doc = new Document (off.employees[i]);
            off.documents.push(doc);
        }
        */
        let doc;
        for (let i = 0; i < 10; i++) {
            doc = new Document (this.name);
            off.documents.push(doc)
        }
    }
}

class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    //methods
    hireEmployee(name){
        let emp = new Employee(name);
        this.employees.push(emp);
    }

    askEmployeesToWork (off){
        for(let emp of this.employees) {
            emp.work(off);
        }
    }
}

class Cleaner {
    constructor(name){
        this.name = name;
    }
    // methods
    clean(){
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }
    // methods
    hireCleaner(name) {
        let cleaner = new Cleaner (name);
        this.cleaners.push(cleaner);
    }

    hireManager(name) {
        let manager = new Manager (name);
        this.managers.push(manager);
    }    

    startWorkDay() {
        for (let m of this.managers) {
            m.askEmployeesToWork(this);
        }
        for (let c of this.cleaners) {
            c.clean()
        }
    }
}