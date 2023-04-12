class Job {
    constructor(name, industry, requireDegree, field) {
        this.name = name;
        this.industry = industry;
        this.requireDegree = requireDegree;
        this.field = field;
    }
    //method
    getName() {
        console.log(this.name);
        return this.name;
    }

    getFieldAndIndustry() {
        console.log(this.industry + this.field);
        return this.industry + this.field;
    }

    getRequireDegree() {
        console.log(this.requireDegree);
        return this.requireDegree;
    }
}
class JobListing extends Job {
    constructor(name, industry, requireDegree, field, company, salary, length, yearsOfExperience) {
        super(name, industry, requireDegree, field)
        this.company = company;
        this.salary = salary;
        this.length = length;
        this.yearsOfExperience = yearsOfExperience;
    }
    getCompany() {
        console.log(this.company);
        return this.company;
    }
    getSalary() {
        console.log(this.salary);
        return this.salary;
    }
    getLength() {
        console.log(this.salary);
        return this.salary;
    }
    getYearsOfExperience() {
        console.log(this.yearsOfExperience);
        return this.yearsOfExperience;
    }
}

//instances of job class
let job1 = new Job('Financial Auditor', 'Accounting', 'Yes', 'Audit');
let job2 = new Job('Developer', 'Technology', 'No', 'Software Engineering');
let job3 = new Job('Cashier', 'Service', 'No', 'Retail');
let listing1 = new JobListing('Tax Associate', 'Accounting', 'Yes', 'Tax', 'Deloitte', '$60,000', 'FullTime', '2');


console.log(job1)
console.log(job2)
console.log(job3)
console.log(listing1)
job2.getRequireDegree()
listing1.getYearsOfExperience()

