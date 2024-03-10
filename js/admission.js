document.querySelector("#admissionfrom").addEventListener("submit", (event)=>{
    event.preventDefault()
    // Student Details
    const fname = event.target.fname.value
    const mname = event.target.mname.value
    const lname = event.target.lname.value
    const gender = event.target.gender
    const category = event.target.category
    const session = event.target.session
    const Class = event.target.class
    const religion = event.target.religion
    const bloodGroup = event.target.bloodGroup
    const email = event.target.email.value
    const dob = event.target.dob.value
    const number = event.target.number.value

    // Residential Address
    const address = event.target.address.value
    const city = event.target.city.value
    const state = event.target.state.value
    const pincode = event.target.pincode.value

    // Parent Details
    const fathername = event.target.fathername.value
    const qualification = event.target.qualification.value
    const occupation = event.target.occupation
    const mobilenumber = event.target.mobilenumber.value
    const income = event.target.income.value

    // Agree
    const agree = event.target.agree.value

    const studentDetails = {
        "fname" : fname,
        "mname" : mname,
        "lname" : lname,
        "gender" : gender,
        "category" : category,
        "session" : session,
        "Class" : Class,
        "religion" : religion,
        "bloodGroup" : bloodGroup,
        "email" : email,
        "dob" : dob,
        "number" : number
    }

    const residentialDetails = {
        "address": address,
        "city": city,
        "state": state,
        "pincode": pincode
    }

    const parentDetails = {
        "fathername": fathername,
        "qualification": qualification,
        "occupation": occupation,
        "mobilenumber": mobilenumber,
        "income": income
    }

    console.log(studentDetails)
    console.log(residentialDetails)
    console.log(parentDetails)

})