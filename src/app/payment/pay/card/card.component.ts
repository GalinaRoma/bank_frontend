import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataSenderService } from './../../../data-sender.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm: FormGroup;
  secretToken=2;

  constructor(private fb: FormBuilder, private sender: DataSenderService) { }

  ngOnInit() {
    this.sender.getToken().subscribe(data => {this.secretToken = data['token'];
    });
    this.initForm();
  }

  initForm() {
    this.cardForm = this.fb.group({
      number: [null, [Validators.required, Validators.pattern(/\d{16}/)]],
      date: [null, [Validators.required, Validators.pattern(/[01][0-9]\/[1-3][0-9]/)]],
      cvc: [null, [Validators.required, Validators.pattern(/\d{3}/)]],
      payment: [null, [Validators.required, Validators.pattern(/\d{4,5}/), Validators.min(1000), Validators.max(75000)]],
      comment: [null, [Validators.maxLength(150)]],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    Object.assign(this.cardForm.value, {token: this.secretToken})
    this.sender.sendToBankFromCard(this.cardForm.value);
  }
}
