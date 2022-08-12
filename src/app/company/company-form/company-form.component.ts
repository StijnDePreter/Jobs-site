import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;
  companyId: number = 0;
  isImageChanged: boolean = false;

  company: Company = {
    id: 0,
    name: "",
    description: '',
    picture: ''
  };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  company$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  putCompany$: Subscription = new Subscription();

  imageSrc: string = '';

  companyForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl('')
  });

  ref: AngularFireStorageReference | undefined;
  task: AngularFireUploadTask | undefined;
  filePath = `Pictures/`;
  imageFile: any;
  uploadProgress: number | undefined;

  constructor(private router: Router, private companyService: CompanyService, private angularFireStorage: AngularFireStorage) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.companyId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.companyId != null && this.companyId > 0) {
      this.company$ = this.companyService.getCompanyById(this.companyId).subscribe(result => {
        this.imageSrc = result.picture;
        this.companyForm.setValue({
          name: result.name,
          description: result.description,
          picture: result.picture
        });
      });
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.company$.unsubscribe();
    this.postCompany$.unsubscribe();
    this.putCompany$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.imageFile === undefined && this.isAdd) {
      this.isSubmitted = false;
      this.errorMessage = 'No image selected!';
    } else {
      if (this.isImageChanged) {
        this.task = this.angularFireStorage.upload(this.filePath, this.imageFile);
        this.task.snapshotChanges().subscribe(result => {
          this.ref?.getDownloadURL().subscribe(url => {
            this.companyForm.patchValue({
              picture: url
            });
            if (url !== undefined) {
              this.submitData();
            }
          });
        });
        this.task.percentageChanges().subscribe(p => this.uploadProgress = p);
      } else {
        this.submitData();
      }
    }



  }

  submitData() {
    if (this.isAdd) {
      this.postCompany$ = this.companyService.postCompany(this.companyForm.value).subscribe(result => {
        this.router.navigateByUrl("/mycompanies");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
    if (this.isEdit) {
      this.putCompany$ = this.companyService.putCompany(this.companyId, this.companyForm.value).subscribe(result => {
        this.router.navigateByUrl("/mycompanies");
      },
        error => {
          this.errorMessage = error.message;
        });
    }
  }

  onImageSelected(event: any): void {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    this.filePath += randomId;
    // create a reference to the storage bucket location
    this.ref = this.angularFireStorage.ref(this.filePath);
    this.imageFile = event.target.files[0];
    this.isImageChanged = true;
  }

  // vanalles voor de image

  // title = 'ImageUploaderFrontEnd';

  // public selectedFile: Blob;
  // public event1: any;
  // imgURL: any;
  // receivedImageData: any;
  // base64Data: any;
  // convertedImage: any;

  // public onFileChanged(event: { target: { files: Blob[]; }; }) {
  //   console.log(event);
  //   this.selectedFile = event.target.files[0];

  //   // Below part is used to display the selected image
  //   let reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (event2) => {
  //     this.imgURL = reader.result;
  //   };
  // }

  //  onUpload() {


  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


  //   this.httpClient.post('http://localhost:8080/check/upload', uploadData)
  //   .subscribe(
  //                res => {console.log(res);
  //                        this.receivedImageData = res;
  //                        this.base64Data = this.receivedImageData.pic;
  //                        this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
  //                err => console.log('Error Occured duringng saving: ' + err)
  //             );


  // }

}
