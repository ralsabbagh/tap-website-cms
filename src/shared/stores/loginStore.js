import {decorate, observable} from 'mobx';
import React, { Component } from 'react';

class LoginStore {

  constructor() {
    this.command = 'CHECK'; // "CHECK" "SIGNIN" "SIGNOUT"
    this.status = 'AUTHENTICATION_FAILED'; //,"AUTHENTICATED" "AUTHENTICATION_FAILED"
    this.mode = 'signin_check';
    this.merchantInfo = null;
    this.LoginCommand = 'CHECK';
    this.modalStatus = 'CLOSED';
    this.onSignInClick = this.onSignInClick.bind(this);
  }

  updateStatus(status){
    this.status = status;
    if(this.status==='AUTHENTICATED' && this.merchantInfo!==null){
      this.command='check';
    }
    else if((this.status==='AUTHENTICATION_FAILED' && this.merchantInfo===null) || (this.status==='AUTHENTICATED' && this.merchantInfo===null)){
      this.command='signin'
    }
  }

  updateModalStatus(object){
    this.modalStatus = object.modalStatus;
    setTimeout(
        function() {
            this.modalStatus==='CLOSED'?this.LoginCommand='check':null;
        }
        .bind(this),
        100
    );
  }

  signout(){
    this.LoginCommand = 'signout';
    setTimeout(
        function() {
            this.LoginCommand = 'check';
            this.merchantInfo = null;
        }
        .bind(this),
        100
    );
  }

  onSignInClick(){
      // console.log(this.command);      
      this.command==='signin'?this.LoginCommand='signin':this.LoginCommand='check';
  }

  updateMerchantInfo(merchantInfo){
    this.merchantInfo = merchantInfo;
    this.openDashbordLink();
  }

  openDashbordLink(){
    this.merchantInfo?window.open(this.merchantInfo.merchant_url,'_blank'):null;
  }

}

decorate(LoginStore, {
  command: observable,
  LoginCommand: observable,
  status: observable,
  mode: observable,
  merchantInfo: observable,
  modalStatus: observable,
})

let gologinStore = new LoginStore();
export default gologinStore;
