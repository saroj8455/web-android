import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputMaskModule,
    MultiSelectModule,
    InputSwitchModule,
    CardModule,
    SkeletonModule
  ],
})
export class PrimeModule {}
