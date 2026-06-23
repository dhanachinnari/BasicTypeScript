
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
//console.log(empinfo);
console.log("The Emp Domain is : " +empinfo.empdomain);

//adding element into original  object
empinfo.office = "DLF Block3";

//adding element into original sub object
empinfo.empadd.city = "kakinada";

console.log(empinfo);

//updating/overriding office location
empinfo.office = "Nanakramguda";
console.log(empinfo);