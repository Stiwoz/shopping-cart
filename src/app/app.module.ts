import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getInitialState, IAppState } from './app.state';
import { getRootReducer } from './app.store';
import { GlobalActions } from './actions';
import { DbService } from './services/db.service';

@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [

	],
	imports: [
		BrowserModule,
		NgReduxModule,
		IonicModule.forRoot(),
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,

		GlobalActions,

		DbService,

		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	constructor(
		ngRedux: NgRedux<IAppState>,
		devTools: DevToolsExtension,
	) {
		// Tell @angular-redux/store about our rootReducer and our initial state.
		// It will use this to create a redux store for us and wire up all the
		// events.
		const storeEnhancers = devTools.isEnabled() && environment.production ? [devTools.enhancer()] : [];

		ngRedux.configureStore(
			getRootReducer(),
			getInitialState(),
			[],
			storeEnhancers
		);
	}
}
