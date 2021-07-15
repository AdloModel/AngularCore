import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  
  @Input() course : Course;
  @Output() onSelectedCourse = new EventEmitter<Course>();
 
  getCourses()
  {
    console.log(this.course);
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

  getSelectedCourses()
  {
    console.log('Courses Informations Get');
    this.onSelectedCourse.emit(this.course);
  }

  isVisibleImage()
  {
    return this.course && this.course.iconUrl;
  }

    /*cardClasses()
  {
    return {
      'beginner':this.course.category === 'BEGINNER',
    }
  }*/

  cardClasses()
  {
    if(this.course.category == 'BEGINNER')
    {
      return 'beginner';
    }
  }

  cardStyles()
  {
    if(this.course)
    
    return {'text-decoration': 'underline', 'background-image': "url(" +this.course.iconUrl +")"}
  }

    ColorToggle()
    {
      if(this.course.category=='BEGINNER')
      {
        return {'background-color':'red'}
      }
      else if(this.course.category == 'INTERMEDIATE')
      {
        return {'background-color': 'blue'}
      }
      else if(this.course.category == 'ADVANCED')
      {
        return {'background-color': 'green'}
      }
     
    }

   

}
