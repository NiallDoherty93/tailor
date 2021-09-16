import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router,) { }

  async ngOnInit(): Promise<void> {
   this.cart$ = await this.shoppingCartService.getCart();
   this.cart$.pipe().subscribe(cart => {
   })
  }

  clearCart(){
      this.shoppingCartService.clearCart();
  }

  onSubmit(){
    this.router.navigate(['/checkout']);
    console.log('stfu')
  }

}
