import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataSenderService } from './../../data-sender.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  authAdminForm: FormGroup;
  
    constructor(private fb: FormBuilder, private sender: DataSenderService) { }
  
    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.authAdminForm = this.fb.group({
        login: [null, [Validators.required]],
        password: [null, [Validators.required]]
      })
    }
  
    onSubmit() {
      this.sender.sendToBankFromBank(this.authAdminForm.value);
    }
  
}
