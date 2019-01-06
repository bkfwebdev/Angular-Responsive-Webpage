import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaglineJumboComponent } from './tagline-jumbo/tagline-jumbo.component';
import { WelcomeBlockComponent } from './welcome-block/welcome-block.component';
import { ImpressiveStatsComponent } from './impressive-stats/impressive-stats.component';
import { WindJumboComponent } from './wind-jumbo/wind-jumbo.component';
import { CentralizeBlockComponent } from './centralize-block/centralize-block.component';
import { IndustrySpecificBlockComponent } from './industry-specific-block/industry-specific-block.component';
import { RenewableJumboComponent } from './renewable-jumbo/renewable-jumbo.component';
import { FlexibilityBlockComponent } from './flexibility-block/flexibility-block.component';
import { EnergyIconsComponent } from './energy-icons/energy-icons.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    TaglineJumboComponent,
    WelcomeBlockComponent,
    ImpressiveStatsComponent,
    WindJumboComponent,
    CentralizeBlockComponent,
    IndustrySpecificBlockComponent,
    RenewableJumboComponent,
    FlexibilityBlockComponent,
    EnergyIconsComponent,
    LearnMoreComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
