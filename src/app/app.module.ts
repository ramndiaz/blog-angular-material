import { environment } from './../environments/environment';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* routes */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* angular material */
import { MaterialModule } from './material.module';

/*  Firebase */
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule
  ],
  providers: [
    {provide:BUCKET, useValue:'gs://blog-447e9.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
