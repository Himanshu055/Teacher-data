import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public questionList: any = [];
   formGroupArray:FormArray | undefined
  userPost = this.fb.group({
    questionText: ['', Validators.required],
    optList: this.fb.group({
     a: ['', Validators.required],
      b: ['', Validators.required],
      c: ['', Validators.required],
      d: ['', Validators.required],  
    
    }),
    correct: ['', Validators.required],  
    explanation:['',Validators.required]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  myForm!: FormGroup;

  ngOnInit(): void {

  }

  onSubmit(data: any) {
    this.http.post('http://localhost:1337/question', data)
      .subscribe((result) => {
        this.questionList = result;
        console.log("result", result) 
      })
  }
}
