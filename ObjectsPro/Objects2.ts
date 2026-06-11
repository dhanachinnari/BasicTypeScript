
interface empdata   ///creating a rough dat
{
    empid : number,
    empname : string,
    emprole : string,
    isSalary : boolean,
    empexp : number,
    empdomain : string,
    empadd :
        {
            estreet : string,
            hno : string,
            location : number
        }
}

let empinfo : empdata =   //creating original object (empinfo) from roiugh data (empdata)
{
    empid : 1211802,
    empname : "Dhana",
    emprole : "QA",
    isSalary : true,
    empexp : 10,
    empdomain : "QA",
    empadd:
       {
        estreet : "Road No : 14",
        hno : "19-67-Gy",
        location : 505123
        }
}
//delecting element from the object
delete empinfo.empexp;
console.log(empinfo);

//delecting subobject from the object
delete empinfo.empadd;
console.log(empinfo);