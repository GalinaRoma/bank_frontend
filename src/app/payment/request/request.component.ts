import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataSenderService } from './../../data-sender.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private sender: DataSenderService) { }
  
    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.requestForm = this.fb.group({
        sender: [null, [Validators.required, Validators.pattern(/\d{10,12}/)]],
        bic: [null, [Validators.required, Validators.pattern(/\d{9}/)]],
        destination: [null, [Validators.required, Validators.pattern(/\d{20}/)]],
        vat: ['0', [Validators.required]],
        payment: [null, [Validators.required, Validators.pattern(/\d{4,5}/), Validators.min(1000), Validators.max(75000)]],
        telephone: [null, [Validators.required, Validators.pattern(/(\+7)|8\d{10}/)]],
        email: [null, [Validators.required, Validators.email]]
      })
      
    }
    
    onSubmit() {
      this.sender.sendToBankRequest(this.requestForm.value);
    }

}
