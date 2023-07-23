import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginI } from '../../interfaces/login';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;
  isLoading: boolean = false;
  protected onDestroy = new Subject<void>();


  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private toastrService: ToastrService,
              private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
    /**
   * OnDestroy
   */
    ngOnDestroy(): void {
      this.onDestroy.next();
      this.onDestroy.complete();
    }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.loginUser({username,password});
    }
  }

    /**
   * realiza el login
   */
    loginUser(user: LoginI){
      this.isLoading = true;
    this.loginService
      .login(user)
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (res)=>{
          if(res.token){
            this.isLoading=false;
            localStorage.setItem( 'token', res.token!);
            this.router.navigateByUrl('/products');
          }
        },
        error: (err)=>{
          this.isLoading=false;
          this.error = err.error.message;
        }
      })
  }

  /**
   * Limpia el error
   */
  clearError(){
    this.error = '';
  }
}
