import {Component, OnInit, ɵConsole} from '@angular/core';
import {APIService} from '../api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.css']
})
export class VoucherListComponent implements OnInit {

  private voucher: object = {};
  private voucher_list: Array<object> = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getVoucher();
  }

  public getVoucher() {
    this.apiService.getVoucherList().subscribe((data: object) => {
      console.log(data);
      this.voucher = data;
      // console.log(this.voucher);
      console.log('API response status: ' + this.voucher.success);
      // console.log('API response message: ' + this.voucher.result.msg);
      // console.log('Voucher API count: ' + this.voucher.result.data.vouchers.length);
      this.voucher_list = this.voucher.result.data.vouchers;
    }, error => {
      console.error('Error faching voucher');
      return Observable.throw(error);
    });
  }

}
