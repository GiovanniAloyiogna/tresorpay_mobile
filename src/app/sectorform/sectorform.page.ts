import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonText, IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonRow, IonCol, IonLabel, IonSearchbar, IonItem, IonList, IonGrid } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ButtonModule } from 'primeng/button';
import { Listbox } from 'primeng/listbox';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';

@Component({
  selector: 'app-sectorform',
  templateUrl: './sectorform.page.html',
  styleUrls: ['./sectorform.page.scss'],
})
export class SectorformPage implements OnInit {
  // Form data values
  floatValue: any = null;
  selectButtonValue: any = null;
  dropdownValue: any = null;
  listboxValue: any = null;
  autoValue: any[] | undefined;
  
  // List of options for dropdowns and listboxes
  listboxValues = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  dropdownValues = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  // PrimeNG components
  toggleValue: boolean = false;
  treeSelectNodes: any[] = [];
  selectedNode: any = null;

  constructor(private router: Router) {
    addIcons({ /* icons */ });
  }

  ngOnInit() {
    // Initialize any data or logic needed here
  }

  redirectTo(url: string, sector: string): void {
    this.router.navigate([url]);
  }

  onSubmit() {
    console.log('Form submitted with values:', {
      floatValue: this.floatValue,
      selectButtonValue: this.selectButtonValue,
      dropdownValue: this.dropdownValue,
      listboxValue: this.listboxValue,
      autoValue: this.autoValue,
    });
    // Add logic for form submission (API call, validation, etc.)
  }
}
