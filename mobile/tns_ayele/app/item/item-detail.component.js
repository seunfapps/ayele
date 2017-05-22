"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./item-detail.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.ActivatedRoute])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFPN0MsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtLQUM5QyxDQUFDO3FDQUsyQiwwQkFBVztRQUNqQix1QkFBYztHQUx4QixtQkFBbUIsQ0FZL0I7QUFaWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZCk7XG4gICAgfVxufVxuIl19