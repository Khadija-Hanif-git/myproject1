import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Production } from './production/production';
import { Sales } from './sales/sales';
import { SalesPriceList } from './sales-price-list/sales-price-list';
import { CreateSalesPriceList } from './create-sales-price-list/create-sales-price-list';
import { SalesOrder } from './sales-order/sales-order';
import { OpenSalesOrder } from './open-sales-order/open-sales-order';
import { CreateSalesOrder } from './create-sales-order/create-sales-order';
import { Deliveries } from './deliveries/deliveries';
import { OpenDelivery } from './open-delivery/open-delivery';
import { CreateDelivery } from './create-delivery/create-delivery';
import { SalesReturn } from './sales-return/sales-return';
import { CreateSalesReturn } from './create-sales-return/create-sales-return';
import { IndoorPlant } from './sales-order/indoor-plant/indoor-plant';
import { OutdoorPlant } from './sales-order/outdoor-plant/outdoor-plant';
import { FlowerPlant } from './sales-order/flower-plant/flower-plant';
import { FertilizerAndSoil } from './sales-order/fertilizer-and-soil/fertilizer-and-soil';
import { GetApi } from './get-api/get-api';
import { PostApi } from './post-api/post-api';
import { APICALLS } from './api-calls/api-calls';

export const routes: Routes = [
    // {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'login',component: Login},
    {path:'dashboard',component: Dashboard},

    {path:'production',component: Production},
    {path:'sales',component: Sales},
    {path:'GetApi',component: GetApi},
    {path:'PostApi',component: PostApi},
    {path:'APICALLS',component: APICALLS},

    {path:'SalesPriceList',component:SalesPriceList},
     {path:'CreateSalesPriceList',component:CreateSalesPriceList },
     {path:'SalesOrder',component:SalesOrder,children:[
        {path:'indoor-plant',component:IndoorPlant},
        {path:'outdoor-plant',component:OutdoorPlant},
        {path:'flower-plant',component:FlowerPlant},
        {path:'fertilizer-and-soil',component:FertilizerAndSoil},
        { path: '', redirectTo: 'indoor-plant', pathMatch: 'full' }
     ]
      },
     {path:'OpenSalesOrder',component:OpenSalesOrder },
     {path:'CreateSalesOrder',component:CreateSalesOrder },
     {path:'Deliveries',component:Deliveries},
     {path:'OpenDelivery',component:OpenDelivery },
     {path:'CreateDelivery',component:CreateDelivery },
     {path:'SalesReturn',component:SalesReturn},
     {path:'CreateSalesReturn', component:CreateSalesReturn }
];
