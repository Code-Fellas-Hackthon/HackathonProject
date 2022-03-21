function PersonDTO(id,nic,name,telNo,email,gender,age,date) {
    var __id = id;
    var __nic = nic;
    var __name = name;
    var __telNo = telNo;
    var __email = email;
    var __gender = gender;
    var __age = age;
    var __date = date;

    this.setId = function (id) {
        __id = id;
    }
    this.getId = function () {
        return __id;
    }
    this.setNic = function (nic) {
        __nic = nic;
    }
    this.getNic = function () {
        return __nic;
    }
    this.setName = function (name) {
        __name = name;
    }
    this.getName = function () {
        return __name;
    }
    this.setTelNo = function (telNo) {
        __telNo = telNo;
    }
    this.getTelNo = function () {
        return __telNo;
    }
    this.setEmail = function (email) {
        __email = email;
    }
    this.getEmail = function () {
        return __email;
    }
    this.setGender = function (gender) {
        __gender = gender;
    }
    this.getGender = function () {
        return __gender;
    }
    this.setAge = function (age) {
        __age = age;
    }
    this.getAge = function () {
        return __age;
    }
    this.setDate = function (date) {
        __date = date;
    }
    this.getDate = function () {
        return __date;
    }
}