import { NgModule } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';


@NgModule({
 exports:[
    GalleriaModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    FormsModule,
    CarouselModule,
    ToastModule,
    TimelineModule,
    CardModule
 ]
})
export class PrimeNgModule { }
