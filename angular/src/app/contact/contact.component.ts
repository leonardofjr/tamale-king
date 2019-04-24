import { Component, OnInit } from '@angular/core';
import { Form } from './Form';
import { MailService } from '../mail.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: Form;
  constructor(private http: HttpClient, private mailService: MailService, private location: Location, private router: Router) { }
  submit: boolean = false;
  ngOnInit() {

  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  disableButton(element) {
    document.getElementById(element).setAttribute('disabled', '');
  }

  onSubmit(e, formData) {
    e.preventDefault();
    this.mailService.sendMail(formData)
      .subscribe((data) => {
        this.router.navigateByUrl('');
        this.submit = true;
        this.disableButton('submitBtn')
      });
  }

}
