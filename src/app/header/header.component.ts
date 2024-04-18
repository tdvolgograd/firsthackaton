import { NgIf, NgIfContext } from '@angular/common'
import { Component, TemplateRef } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { LoginComponent } from '../components/login/login.component'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,
    NgIf,
    LoginComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuth = false;
  logoutIcon =faArrowRightFromBracket;
  protected readonly faCoffee = faCoffee
  isNotAuth: TemplateRef<NgIfContext<boolean>> | null | undefined

  logout() {
    console.log('logout')
  }
}
