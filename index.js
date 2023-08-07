class Student {
    constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendanceCounter = 0;
  }

  present() {
    if (this.attendanceCounter < 25) {
      this.attendanceCounter++;
    }
  }

  absent() {
    if (this.attendanceCounter < 25) {
      this.attendanceCounter++;
    }
  }
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (const grade of this.grades) {
      sum += grade;
    }
  
    return sum / this.grades.length;
  }
  calculateAttendanceRate() {
    const totalClasses = this.attendance.length;
    const attendedClasses = this.attendance.filter(item => item === true).length;
    return attendedClasses / totalClasses;
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const attendanceRate = this.calculateAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}
// Examples 
const student1 = new Student('Mary', 'Smith', 2004);
student1.present();
student1.present();
student1.absent();
student1.grades = [96, 85, 100, 98, 94];
console.log("Student 1 Summary:", student1.summary());

const student2 = new Student('Nick', 'Abrams', 2004);
student2.present();
student2.present();
student2.absent();
student1.grades = [87, 77, 88, 60, 90, 75];
console.log("Student 2 Summary:", student2.summary());




