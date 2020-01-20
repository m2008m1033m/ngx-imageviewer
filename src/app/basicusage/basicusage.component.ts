import { Component, ViewChild } from '@angular/core';
import { WizardComponent } from 'mnm-webapp';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basicusage',
  templateUrl: './basicusage.component.html'
})
export class BasicUsageComponent {

  @ViewChild(WizardComponent, { static: true }) wizard: WizardComponent;


  constructor(private httpClient: HttpClient) { }

  public path: string;
  public fileType: string;

  public downloadVisa() {
    this.getVisaAttachment()
      .subscribe(data => {
        this.previewBlob(data)
      });

    // return;
    // this.membershipService.getVisaAttachment(this.membership.id)
    //   .subscribe(data => {
    //     const blob = new Blob([data], { type: this.membership.visaAttachmentMimeType });
    //     FileSaver.saveAs(blob, 'visa.' + this.membership.visaAttachmentFormat);
    //   });
  }

  public downloadPassport() {
    this.getPassportAttachment()
      .subscribe(data => {
        this.previewBlob(data);
      });
    // return;
    // this.membershipService.getPassportAttachment(this.membership.id)
    //   .subscribe(data => {
    //     const blob = new Blob([data], { type: this.membership.passportAttachmentMimeType });
    //     FileSaver.saveAs(blob, 'passport.' + this.membership.passportAttachmentFormat);
    //   });
  }

  private previewBlob(blob: Blob) {
    this.fileType = blob.type.startsWith('image') ? 'image' : blob.type.startsWith('application/pdf') ? 'pdf' : blob.type;
    this.path = URL.createObjectURL(blob);
    // this.wizard.show();
  }

  private hideBlob() {
    this.fileType = '';
    this.path = '';
    // this.wizard.hide();
  }

  public getVisaAttachment(): Observable<Blob> {
    return this.httpClient.get('http://localhost:6008/api' + '/membership/visa-attachment/8716c3cb-ec4b-4239-cdaf-08d790fa7c19', {
      responseType: 'blob'
    }).pipe(map(res => res));
  }

  public getPassportAttachment(): Observable<Blob> {
    return this.httpClient.get('http://localhost:6008/api' + '/membership/passport-attachment/8716c3cb-ec4b-4239-cdaf-08d790fa7c19', {
      responseType: 'blob'
    }).pipe(map(res => res));
  }
}
