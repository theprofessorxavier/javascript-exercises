const findTheOldest = function(people) {
    let oldest = people.sort((person1, person2)=>{
        let val=0;
        if(person1.yearOfDeath === undefined || person2.yearOfDeath === undefined){
            val = (person1.yearOfBirth<person2.yearOfBirth)?-1:1;
        }else{
            val = ((person1.yearOfDeath-person1.yearOfBirth)>(person2.yearOfDeath-person2.yearOfBirth))?-1:1;
        }
        return val;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
