﻿declare function FrequencyIdToInfo( frequencyId: number ):any;


namespace Ally
{
    /**
     * The controller for the group site home page
     */
    export class ChtnHomeController implements ng.IController
    {
        static $inject = ["$http", "$rootScope", "SiteInfo", "$timeout", "$scope"];

        welcomeMessage: string;
        canMakePayment: boolean;
        canSendEmail: boolean;
        cantDoAnything: boolean;
        isFirstVisit: boolean;
        isSiteManager: boolean;
        showFirstVisitModal: boolean;
        allyAppName: string;
        homeRightColumnType: string;                
        shouldShowAlertSection: boolean;


        /**
         * The constructor for the class
         */
        constructor( private $http: ng.IHttpService, private $rootScope: ng.IRootScopeService, private siteInfo: Ally.SiteInfoService, private $timeout: ng.ITimeoutService, private $scope:ng.IScope )
        {
        }


        /**
        * Called on each controller after all the controllers on an element have been constructed
        */
        $onInit()
        {
            this.welcomeMessage = this.siteInfo.privateSiteInfo.welcomeMessage;

            this.canMakePayment = this.siteInfo.privateSiteInfo.isPaymentEnabled && !this.siteInfo.userInfo.isRenter;
            this.canSendEmail = this.siteInfo.privateSiteInfo.canSendEmail;
            this.cantDoAnything = !( this.canMakePayment || this.canSendEmail );
            
            this.isFirstVisit = this.siteInfo.userInfo.lastLoginDateUtc === null;
            this.isSiteManager = this.siteInfo.userInfo.isSiteManager;
            this.showFirstVisitModal = this.isFirstVisit && !this.$rootScope.hasClosedFirstVisitModal && this.siteInfo.privateSiteInfo.siteLaunchedDateUtc === null;

            this.allyAppName = AppConfig.appName;

            this.homeRightColumnType = this.siteInfo.privateSiteInfo.homeRightColumnType;
            if( !this.homeRightColumnType )
                this.homeRightColumnType = "localnews";
            
            var subDomain = HtmlUtil.getSubdomain( window.location.host );

            var innerThis = this;
            this.$scope.$on( "homeHasActivePolls", () => innerThis.shouldShowAlertSection = true );
        }


        hideFirstVisit()
        {
            this.$rootScope.hasClosedFirstVisitModal = true;
            this.showFirstVisitModal = false;
        }
    }
}


CA.angularApp.component( "chtnHome", {
    templateUrl: "/ngApp/chtn/member/chtn-home.html",
    controller: Ally.ChtnHomeController
} );