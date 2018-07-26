import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { CommentsService } from '../../posts/posts-details/posts-details-counts/comments/comments.service';
import { CommentsModels } from '../../posts/posts-details/posts-details-counts/comments/comments-models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() articalesId:number;
  @Input() emailId:string;
  @Output() messageEvent = new EventEmitter<string>();

  form:FormGroup; 
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;
  
  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService, private commentsdataService:CommentsService, private comment:CommentsModels) { 
    this.form  = this.fb.group({
      
      commentsubject: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(250)
      ])),
      commenttext: new FormControl('',Validators.compose([
        Validators.required,        
      ]))
    })
  }

  ngOnInit() {
    
  }

  addComments(){
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;    
    this.comment.CommentOn="";
    this.comment.CommentOnId=this.articalesId;
    this.comment.Subject=this.form.value.commentsubject;
    this.comment.Comment=this.form.value.commenttext;
    this.comment.IsFollowupComments=true;
    this.comment.IsNotifiedNewPost=true;
    this.comment.Email=this.emailId;
    
    setTimeout(() => {
      
      this.commentsdataService.createComments(this.comment).subscribe(
        data => {     
          this.messageEvent.emit('true')           
          this.form.reset(); 
          this.isSuccess=true;                         
          this.spinner.hide();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Some error occured while adding comment. Please contact to Admin Team.";    
          this.spinner.hide();     
        }
      );
    }, 1000); 
  }
}
