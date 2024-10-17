// import { Component, OnInit } from '@angular/core';
// import { MenuItem, MessageService } from 'primeng/api';
// import { SpeedDialModule } from 'primeng/speeddial';
// import { ToastModule } from 'primeng/toast';


// import { Component, OnInit } from '@angular/core';
// import { ScrollerModule } from 'primeng/scroller';
// import { CommonModule } from '@angular/common';

import { Component, ViewChild, viewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngPrime-use',
  templateUrl: './prime-nguse.component.html',
  // styles: [
  //   `:host ::ng-deep {
  //           .speeddial-linear-demo {
  //               .p-speeddial-direction-up {
  //                   left: calc(50% - 2rem);
  //                   bottom: 0;
  //               }

  //               .p-speeddial-direction-down {
  //                   left: calc(50% - 2rem);
  //                   top: 0;
  //               }

  //               .p-speeddial-direction-left {
  //                   right: 0;
  //                   top: calc(50% - 2rem);
  //               }

  //               .p-speeddial-direction-right {
  //                   left: 0;
  //                   top: calc(50% - 2rem);
  //               }
  //           }
  //       }`
  // ],


  // styles: [
  //   `:host ::ng-deep {
  //           .p-scroller-viewport {
  //               flex: none;
  //           }
  //       }`
  // ],

  standalone: true,
  // imports: [SpeedDialModule, ToastModule],
  // imports: [ScrollerModule, CommonModule],
  imports: [SidebarModule, CommonModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule],
  // providers: [MessageService]
})
export class PrimeNGUse {
  // items: MenuItem[] = [];

  // constructor(private messageService: MessageService) { }

  // ngOnInit() {
  //   this.items = [
  //     {
  //       icon: 'pi pi-pencil',
  //       command: () => {
  //         this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
  //       }
  //     },
  //     {
  //       icon: 'pi pi-refresh',
  //       command: () => {
  //         this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
  //       }
  //     },
  //     {
  //       icon: 'pi pi-trash',
  //       command: () => {
  //         this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
  //       }
  //     },
  //     {
  //       icon: 'pi pi-upload',
  //       routerLink: ['/fileupload']
  //     },
  //     {
  //       icon: 'pi pi-external-link',
  //       target: '_blank',
  //       url: 'http://angular.io'
  //     }
  //   ];
  // }
  // items!: string[];

  // ngOnInit() {
  //   this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
  // }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}