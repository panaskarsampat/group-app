import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderHiddenComponent } from './navigation/header-hidden/header-hidden.component';
import { ContactUsComponent } from './navigation/header-hidden/contact-us/contact-us.component';
import { ThemeVariationsComponent } from './navigation/header-hidden/theme-variations/theme-variations.component';
import { ThemeBackgroundsComponent } from './navigation/header-hidden/theme-variations/theme-backgrounds/theme-backgrounds.component';
import { ThemeColorsComponent } from './navigation/header-hidden/theme-variations/theme-colors/theme-colors.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HeaderNameComponent } from './navigation/header/header-name/header-name.component';
import { HeaderSloganComponent } from './navigation/header/header-slogan/header-slogan.component';
import { HeaderLinkmenusComponent } from './navigation/header/header-linkmenus/header-linkmenus.component';
import { ContainerComponent } from './navigation/container/container.component';
import { NavbarComponent } from './navigation/container/navbar/navbar.component';
import { SocialComponent } from './navigation/container/navbar/social/social.component';
import { NavbarTextComponent } from './navigation/container/navbar/navbar-text/navbar-text.component';
import { HighlightedComponent } from './highlighted/highlighted.component';
import { HighlightedSliderComponent } from './highlighted/highlighted-slider/highlighted-slider.component';
import { Slide1Component } from './highlighted/highlighted-slider/slide1/slide1.component';
import { Slide2Component } from './highlighted/highlighted-slider/slide2/slide2.component';
import { ContentComponent } from './content/content.component';
import { MissionTextComponent } from './content/mission-text/mission-text.component';
import { ShowcaseComponent } from './content/showcase/showcase.component';
import { ShowcaseTextComponent } from './content/showcase/showcase-text/showcase-text.component';
import { ShowcaseCarouselComponent } from './content/showcase/showcase-carousel/showcase-carousel.component';
import { Item1Component } from './content/showcase/showcase-carousel/item1/item1.component';
import { Item2Component } from './content/showcase/showcase-carousel/item2/item2.component';
import { Item3Component } from './content/showcase/showcase-carousel/item3/item3.component';
import { Item4Component } from './content/showcase/showcase-carousel/item4/item4.component';
import { Item5Component } from './content/showcase/showcase-carousel/item5/item5.component';
import { Item6Component } from './content/showcase/showcase-carousel/item6/item6.component';
import { Item7Component } from './content/showcase/showcase-carousel/item7/item7.component';
import { Item8Component } from './content/showcase/showcase-carousel/item8/item8.component';
import { Item9Component } from './content/showcase/showcase-carousel/item9/item9.component';
import { Item10Component } from './content/showcase/showcase-carousel/item10/item10.component';
import { Item11Component } from './content/showcase/showcase-carousel/item11/item11.component';
import { Item12Component } from './content/showcase/showcase-carousel/item12/item12.component';
import { ServicesComponent } from './content/services/services.component';
import { ServicesItem1Component } from './content/services/services-item1/services-item1.component';
import { ServicesItem2Component } from './content/services/services-item2/services-item2.component';
import { ServicesItem3Component } from './content/services/services-item3/services-item3.component';
import { PlansComponent } from './content/plans/plans.component';
import { PlansItem1Component } from './content/plans/plans-item1/plans-item1.component';
import { PlansItem2Component } from './content/plans/plans-item2/plans-item2.component';
import { PlansItem3Component } from './content/plans/plans-item3/plans-item3.component';
import { PlansItem4Component } from './content/plans/plans-item4/plans-item4.component';
import { HappyCustomersComponent } from './content/happy-customers/happy-customers.component';
import { TestimonialsComponent } from './content/testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './footer/comment/comment.component';
import { FollowusComponent } from './footer/followus/followus.component';
import { SubfooterComponent } from './footer/subfooter/subfooter.component';
import { CopyrightComponent } from './footer/subfooter/copyright/copyright.component';
import { CopyrightListComponent } from './footer/subfooter/copyright-list/copyright-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderHiddenComponent,
    ContactUsComponent,
    ThemeVariationsComponent,
    ThemeBackgroundsComponent,
    ThemeColorsComponent,
    HeaderComponent,
    HeaderNameComponent,
    HeaderSloganComponent,
    HeaderLinkmenusComponent,
    ContainerComponent,
    NavbarComponent,
    SocialComponent,
    NavbarTextComponent,
    HighlightedComponent,
    HighlightedSliderComponent,
    Slide1Component,
    Slide2Component,
    ContentComponent,
    MissionTextComponent,
    ShowcaseComponent,
    ShowcaseTextComponent,
    ShowcaseCarouselComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
    Item5Component,
    Item6Component,
    Item7Component,
    Item8Component,
    Item9Component,
    Item10Component,
    Item11Component,
    Item12Component,
    ServicesComponent,
    ServicesItem1Component,
    ServicesItem2Component,
    ServicesItem3Component,
    PlansComponent,
    PlansItem1Component,
    PlansItem2Component,
    PlansItem3Component,
    PlansItem4Component,
    HappyCustomersComponent,
    TestimonialsComponent,
    ClientsComponent,
    FooterComponent,
    CommentComponent,
    FollowusComponent,
    SubfooterComponent,
    CopyrightComponent,
    CopyrightListComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
