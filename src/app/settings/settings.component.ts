import { NgForOf, NgIf } from '@angular/common'
import { Component } from '@angular/core';
import { navbarData } from '../sidenav/nav-data'
import {INavbarData} from '../sidenav/helper'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent  {
  navData = navbarData;
}
