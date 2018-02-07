import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataSenderService } from './../../../data-sender.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bankForm: FormGroup;

  constructor(private fb: FormBuilder, private sender: DataSenderService) { }
  
    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.bankForm = this.fb.group({
        sender: [null, [Validators.required, Validators.pattern(/\d{10,12}/)]],
        bic: [null, [Validators.required, Validators.pattern(/\d{9}/)]],
        destination: [null, [Validators.required, Validators.pattern(/\d{9}/)]],
        vat: ['0', [Validators.required]],
        payment: [null, [Validators.required, Validators.pattern(/\d{4,5}/), Validators.min(1000), Validators.max(75000)]]
      })
    }
  
    onSubmit() {
      this.sender.sendToBankFromBank(this.bankForm.value);
    }

}
