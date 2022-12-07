class Employee{
    constructor(name,lastName,phoneNumber,occupation,firstYear,lastYear){
        this.name=name
        this.lastName=lastName
        this.phoneNumber=phoneNumber
        this.occupation=occupation
        this.firstYear=firstYear
        this.lastYear=lastYear
    }
    get occupation(){
        this._occupation
    }set occupation(occupation){
        if(['web-designer','accountant','IT-consultant','PR-maneger','HR-maneger'].includes(occupation)){
         this._occupation=occupation
        }else{
            this._occupation=false
        }
    }get firstYear(){
        this._firstYear
    }set firstYear(firstYear){
        if(firstYear<2022){
          this._firstYear=firstYear
        }else{
            this._firstYear=false
        }
    }get lastYear(){
        this._lastYear
    }set lastYear(lastYear){
        if(lastYear>this._firstYear){
         this._lastYear=lastYear
        }else{
            this._lastYear=false
        }
    }
}
class rEmployee extends Employee{
    constructor(name,lastName,phoneNumber,occupation,firstYear,lastYear){
        super(name,lastName,phoneNumber,occupation,firstYear,lastYear)
       this.time={
        monday:{
            start:'12:00',
            end:'19:00'
        },tuesday:{
            start:'11:00',
            end:'20:00'
        },wednesday:{
            start:'7:30',
            end:'14:00'
        }, thursday:{
            start:'8:30',
            end:'18:00'
        }, friday:{
            start:'9:00',
            end:'16:30'
        },
       }
    }
}
let Empl1=new Employee('Aelin','Galathynius','+3809824376591','web-designer',2019,2025)
let rEmpl1= new rEmployee('Feyre','Archeron','+0435329923373','PR-maneger',2021,2022,)
console.log(Empl1)
console.log(rEmpl1)