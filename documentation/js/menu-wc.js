'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mon-ster documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApplicationModule.html" data-type="entity-link" >ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' : 'data-target="#xs-components-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' :
                                            'id="xs-components-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' }>
                                            <li class="link">
                                                <a href="components/ApplicationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' : 'data-target="#xs-injectables-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' :
                                        'id="xs-injectables-links-module-ApplicationModule-70103620235941166f9dfd6511a096f277c7d0cc7ba74588eecc8588b6302f0c95e4c087d57ec2c029529ca6f53b079c231e90059ca3efe92d13916b04868845"' }>
                                        <li class="link">
                                            <a href="injectables/ApplicationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c0570ec21d904382d5c3be7d60a5cc02e8b8293974c264804b5ff819979ca6b0e4ffdaf2cbb9fa707257952a4898717bd06d2be0ff14794dd35dbcd136802acf"' : 'data-target="#xs-components-links-module-AppModule-c0570ec21d904382d5c3be7d60a5cc02e8b8293974c264804b5ff819979ca6b0e4ffdaf2cbb9fa707257952a4898717bd06d2be0ff14794dd35dbcd136802acf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c0570ec21d904382d5c3be7d60a5cc02e8b8293974c264804b5ff819979ca6b0e4ffdaf2cbb9fa707257952a4898717bd06d2be0ff14794dd35dbcd136802acf"' :
                                            'id="xs-components-links-module-AppModule-c0570ec21d904382d5c3be7d60a5cc02e8b8293974c264804b5ff819979ca6b0e4ffdaf2cbb9fa707257952a4898717bd06d2be0ff14794dd35dbcd136802acf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenTestsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenTestsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BatchesModule.html" data-type="entity-link" >BatchesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' : 'data-target="#xs-components-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' :
                                            'id="xs-components-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' }>
                                            <li class="link">
                                                <a href="components/AllBatchesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllBatchesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' : 'data-target="#xs-injectables-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' :
                                        'id="xs-injectables-links-module-BatchesModule-56a54de76513caf7394e38917143bfc9d2ec1290663aff3993b3861870e603927fffcef39cb3faa3d8612492ccc5cb4767212d427df0872428839752bc620a0c"' }>
                                        <li class="link">
                                            <a href="injectables/BatchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link" >CompanyModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SecurityModule-85bab838b5224ef4afed0c11597dab4427cd6cadf697b2dc047d44a3f44f9c6fc8ae4c34b80e6f86e0d18eb5eda9ffe097ba5bc3b9cd975c26a51b90099e98c4"' : 'data-target="#xs-components-links-module-SecurityModule-85bab838b5224ef4afed0c11597dab4427cd6cadf697b2dc047d44a3f44f9c6fc8ae4c34b80e6f86e0d18eb5eda9ffe097ba5bc3b9cd975c26a51b90099e98c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecurityModule-85bab838b5224ef4afed0c11597dab4427cd6cadf697b2dc047d44a3f44f9c6fc8ae4c34b80e6f86e0d18eb5eda9ffe097ba5bc3b9cd975c26a51b90099e98c4"' :
                                            'id="xs-components-links-module-SecurityModule-85bab838b5224ef4afed0c11597dab4427cd6cadf697b2dc047d44a3f44f9c6fc8ae4c34b80e6f86e0d18eb5eda9ffe097ba5bc3b9cd975c26a51b90099e98c4"' }>
                                            <li class="link">
                                                <a href="components/SecurityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VacanciesModule.html" data-type="entity-link" >VacanciesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' : 'data-target="#xs-components-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' :
                                            'id="xs-components-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                            <li class="link">
                                                <a href="components/AllVacanciesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllVacanciesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacancyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacancyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacancyDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacancyDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' : 'data-target="#xs-injectables-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' :
                                        'id="xs-injectables-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                        <li class="link">
                                            <a href="injectables/VacancyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacancyService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' : 'data-target="#xs-pipes-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' :
                                            'id="xs-pipes-links-module-VacanciesModule-ca5d111fef8f557f03dac30e6300480a6e9443bd325b896611c0968f13c21f1ef726c9a3eb8a76c47f3e1827cf2cf47b0d0950fd7f669e7c5a862676f19988a4"' }>
                                            <li class="link">
                                                <a href="pipes/FilterListPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterListPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ApplicationFormComponent-1.html" data-type="entity-link" >ApplicationFormComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApplicationService.html" data-type="entity-link" >ApplicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppModule.html" data-type="entity-link" >AppModule</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchService.html" data-type="entity-link" >BatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VacancyService.html" data-type="entity-link" >VacancyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SecurityInterceptor.html" data-type="entity-link" >SecurityInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Application.html" data-type="entity-link" >Application</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Batch.html" data-type="entity-link" >Batch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link" >UserResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacancy.html" data-type="entity-link" >Vacancy</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});