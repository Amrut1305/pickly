import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  allProducts !: Array<Iproduct>
  product = {
    "_id": "67cfe4411d3eb582dacee771",
    "title": "All Systems Red: The Murderbot Diaries [Book]",
    "product_description": [
      "As a heartless killing machine, I was a complete failure.",
      "But in a society where contracts are awarded to the lowest bidder, safety isn’t a primary concern.",
      "But when a neighboring mission goes dark, it’s up to the scientists and their Murderbot to get to the truth."
    ],
    "rating": 0,
    "reviews_count": 42,
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRP-XwZOyUlILfT6l9fKXgO_-kPNulL7hUMMlZ3P5g-qbZW4Z7jph0cCURDJQhAMwoxSje_Vh4DkauFOpZzjBjLzG8KvmGK1A&usqp=CAY",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_BPizZCqIpnW02vLpjtSTdZnVQuMJyuET3oIjR1IWmVqzHfp_zU4DG6WgJypnw3mDErWA-v442-gy6UDNwqsfJ2TngJWN3A&usqp=CAY",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEJOoxpSOZ9-cL2fYH0An_GYj7lUY4t1_upflfHcTJ5NxKAB3IV-Kcbv6l3aGENAjeTPiDZU4me25gueSveBXOjl_wvSNz&usqp=CAY",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpl0zF9owwW0VQl7Ia17H9qaX0gNPsoufryY-TZ3QozYtW0KAjPBuMOfGoZTQIRINzVJNy65o-w5sYgkWoZeuouq9snyLr&usqp=CAY"
    ],
    "tags": [
      "Paperback",
      "Novel",
      "Fiction",
      "by Martha Wells",
      "Tor Publishing Group",
      "paperback",
      "152 pages",
      "ISBN 0765397536"
    ],
    "product_details": "A New York Times and USA Today Bestseller - Winner: 2018 Hugo Award for Best Novella - Winner: 2018 Nebula Award for Best Novella - Winner: 2018 Alex Award - Winner: 2018 Locus Award - One of the Verge's Best Books of 2017. A murderous android discovers itself in All Systems Red, a tense science fiction adventure by Martha Wells that interrogates the roots of consciousness through Artificial Intelligence. \"As a heartless killing machine, I was a complete failure.\" In a corporate-dominated spacefaring future, planetary missions must be approved and supplied by the Company. Exploratory teams are accompanied by Company-supplied security androids, for their own safety. But in a society where contracts are awarded to the lowest bidder, safety isn’t a primary concern. On a distant planet, a team of scientists are conducting surface tests, shadowed by their Company-supplied ‘droid — a self-aware SecUnit that has hacked its own governor module, and refers to itself (though never out loud) as “Murderbot.” Scornful of humans, all it really wants is to be left alone long enough to figure out who it is. But when a neighboring mission goes dark, it's up to the scientists and their Murderbot to get to the truth.",
    "return_policy": null,
    "total_price": "$12.59",
    "product_specifications": [
      {
        "_id": "680b287340b2e129cefece34",
        "specification_name": "Length",
        "specification_value": "5.12 in"
      },
      {
        "_id": "680b287340b2e129cefece35",
        "specification_name": "Height",
        "specification_value": "8 in"
      },
      {
        "_id": "680b287340b2e129cefece36",
        "specification_name": "Width",
        "specification_value": "0.44 in"
      },
      {
        "_id": "680b287340b2e129cefece37",
        "specification_name": "Weight",
        "specification_value": "0.3109 lb"
      }
    ],
    "category": "Books and Toys",
    "subcategory": "Books"
  }
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    // this.allProducts = 

    this._productService.fetchAllData()
    .subscribe(res=>{
      this.allProducts =res
    })
  }
}
