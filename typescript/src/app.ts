interface Course {
    courseNo: string;
    abbrName: string;
    courseNameTh: string;
    courseNameEn: string;
    department: string;
    credit: number;
    creditHours: string;
    genEdType: string;
    updatedAt: string;
  }

async function getData() {
    const response = await fetch("https://firstact-api.thinc.in.th/courses");
    const data = await response.json();
    const courses: Course[] = data.courses;
    const container = document.getElementsByName("section")
    for(const course in courses) {
      const section = document.createElement("section");
      section.classList.add("course");
      section.innerHTML = "<h3> ${course.courseNo} </h3> <h4> จำนวนหน่วยกิต</h4> <p> 3 หน่วยกิต</p> <h4>วันที่เรียน</h4> <ul> 
          <li> วันพุธ</li>
          <li> วันพฤหัสบดี</li>
      </ul>

      <h4> จำนวนที่นั่ง</h4>
      <p> 284/300</p>";
      const container =document.getElementById("section");
      container?.appendChild(section);
    }
}

function removeAlert() {
  const alert = document.getElementById("demo");
  if(alert) {
    alert.style.display = "none";
  }
}

console.log(getData());