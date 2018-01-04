﻿function RoutePath( path, templateUrl, controller, menuTitle, role )
{
    if( path[0] !== '/' )
        path = "/" + path;

    this.path = path;
    this.templateUrl = templateUrl;
    this.controller = controller;
    this.menuTitle = menuTitle;
    this.role = role || Role_Authorized;
    // authorized, all, manager, admin
    this.controllerAs = typeof controller === "function" ? "vm" : null;
}

function RoutePath_v2( routeOptions )
{
    if( routeOptions.path[0] !== '/' )
        routeOptions.path = "/" + routeOptions.path;

    this.path = routeOptions.path;
    this.templateUrl = routeOptions.templateUrl;
    this.templateHtml = routeOptions.templateHtml;
    this.controller = routeOptions.controller;
    this.menuTitle = routeOptions.menuTitle;
    this.role = routeOptions.role || Role_Authorized;
    // authorized, all, manager, admin
    this.controllerAs = typeof routeOptions.controller === "function" ? "vm" : null;
}


// For use with the newer Angular component objects
function RoutePath_v3( routeOptions )
{
    if( routeOptions.path[0] !== '/' )
        routeOptions.path = "/" + routeOptions.path;

    this.path = routeOptions.path;
    this.templateHtml = routeOptions.templateHtml;
    this.menuTitle = routeOptions.menuTitle;
    this.role = routeOptions.role || Role_Authorized;
}

var Role_Authorized = "authorized";
var Role_All = "all";
var Role_Manager = "manager";
var Role_Admin = "admin";


// The names need to match the PeriodicPaymentFrequency enum
var PeriodicPaymentFrequencies = [
    { name: "Monthly", intervalName: "month", id: 50 },
    { name: "Quarterly", intervalName: "quarter", id: 51 },
    { name: "Semiannually", intervalName: "half-year", id: 52 },
    { name: "Annually", intervalName: "year", id: 53 }
];

function FrequencyIdToInfo( frequencyId )
{
    return PeriodicPaymentFrequencies[frequencyId - 50];
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Condo Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var CondoAllyAppConfig =
{
    appShortName: "condo",
    appName: "Condo Ally",
    baseTld: "condoally.com",
    baseUrl: "https://condoally.com/",
    segmentWriteKey: "GnlZNd8jKCpDgFqRKbA4nftkuFIaqKPQ",
    homeName: "Unit",
    menu: [
        new RoutePath_v3( { path: "Home", templateHtml: "<chtn-home></chtn-home>", menuTitle: "Home" } ),
        new RoutePath_v3( { path: "BuildingInfo", templateHtml: "<association-info></association-info>", menuTitle: "Documents & Info" } ),
        new RoutePath_v3( { path: "Logbook", templateHtml: "<logbook-page></logbook-page>", controller: "LogbookController", menuTitle: "Calendar" } ),
        new RoutePath_v3( { path: "Map", templateHtml: "<chtn-map></chtn-map>", menuTitle: "Map" } ),
        new RoutePath_v3( { path: "BuildingResidents", templateHtml: "<group-members></group-members>", menuTitle: "Residents" } ),
        new RoutePath_v3( { path: "Committee/:committeeId/:viewName", templateHtml: "<committee-parent></committee-parent>" } ),

        new RoutePath_v3( { path: "ForgotPassword", templateHtml: "<forgot-password></forgot-password>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Login", templateHtml: "<login-page></login-page>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Help", templateHtml: "<help-form></help-form>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "SignUp", templateHtml: "<condo-sign-up-wizard></condo-sign-up-wizard>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "EmailAbuse/:idValue", templateHtml: "<email-abuse></email-abuse>", role: Role_All } ),
        new RoutePath_v3( { path: "DiscussionManage/:idValue", templateHtml: "<discussion-manage></discussion-manage>" } ),
        new RoutePath_v3( { path: "NeighborSignUp", templateHtml: "<neighbor-sign-up></neighbor-sign-up>", role: Role_All } ),
        
        new RoutePath_v3( { path: "MyProfile", templateHtml: "<my-profile></my-profile>" } ),
        new RoutePath_v3( { path: "ManageResidents", templateHtml: "<manage-residents></manage-residents>", menuTitle: "Residents", role: Role_Manager } ),
        //new RoutePath_v3( { path: "ManageCommittees", templateHtml: "<manage-committees></manage-committees>", menuTitle: "Committees", role: Role_Manager } ),
        new RoutePath_v3( { path: "ManagePolls", templateHtml: "<manage-polls></manage-polls>", menuTitle: "Polls", role: Role_Manager } ),
        new RoutePath_v3( { path: "ManagePayments", templateHtml: "<manage-payments></manage-payments>", menuTitle: "Online Payments", role: Role_Manager } ),
        new RoutePath_v3( { path: "AssessmentHistory", templateHtml: "<assessment-history></assessment-history>", menuTitle: "Assessment History", role: Role_Manager } ),
        new RoutePath_v3( { path: "Settings", templateHtml: "<chtn-settings></chtn-settings>", menuTitle: "Settings", role: Role_Manager } ),

        new RoutePath_v3( { path: "/Admin/ManageGroups", templateHtml: "<manage-groups></manage-groups>", menuTitle: "Manage Associations", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ManageHomes", templateHtml: "<manage-homes></manage-homes>", menuTitle: "Manage Homes", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ViewActivityLog", templateHtml: "<view-activity-log></view-activity-log>", menuTitle: "View Activity Log", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ManageAddressPolys", templateHtml: "<manage-address-polys></manage-address-polys>", menuTitle: "Edit Addresses", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ViewPolys", templateHtml: "<view-polys></view-polys>", menuTitle: "View Polygons", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ViewResearch", templateHtml: "<view-research></view-research>", menuTitle: "View Research", role: Role_Admin } ),
    ]
};


///////////////////////////////////////////////////////////////////////////////////////////////////
// Neighborhood Watch Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var WatchAppConfig =
{
    appShortName: "watch",
    appName: "Neighborhood Watch Ally",
    baseTld: "watchally.org",
    baseUrl: "https://watchally.org/",
    menu: [
        new RoutePath( "Home", "/ngApp/watch/member/WatchHome.html", WatchHomeCtrl, "Home" ),
        new RoutePath( "Members", "/ngApp/watch/member/WatchMembers.html", WatchMembersCtrl, "Members" ),
        new RoutePath( "Calendar", "/ngApp/watch/member/WatchCalendar.html", WatchCalendarCtrl, "Calendar" ),

        new RoutePath_v3( { path: "ForgotPassword", templateHtml: "<forgot-password></forgot-password>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Login", templateHtml: "<login-page></login-page>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Help", templateHtml: "<help-form></help-form>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "MyProfile", templateHtml: "<my-profile></my-profile>" } ),

        new RoutePath( "ManageMembers", "/ngApp/watch/manager/ManageMembers.html", ManageMembersCtrl, "Members", Role_Manager ),
        new RoutePath( "Settings", "/ngApp/watch/manager/Settings.html", WatchSettingsCtrl, "Settings", Role_Manager ),

        new RoutePath( "/Admin/ManageWatchGroups", "/ngApp/Admin/ManageAssociations.html", "ManageAssociationsController", "Manage Groups", Role_Admin ),
        new RoutePath_v3( { path: "/Admin/ViewActivityLog", templateHtml: "<view-activity-log></view-activity-log>", menuTitle: "View Activity Log", role: Role_Admin } ),
        new RoutePath_v3( { path: "/Admin/ManageAddressPolys", templateHtml: "<manage-address-polys></manage-address-polys>", menuTitle: "Edit Addresses", role: Role_Admin } ),
    ]
};


///////////////////////////////////////////////////////////////////////////////////////////////////
// Service Professional Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var ServiceAppConfig =
{
    appShortName: "service",
    appName: "Service Professional Ally",
    baseTld: "serviceally.org",
    baseUrl: "https://serviceally.org/",
    menu: [
        new RoutePath( "Jobs", "/ngApp/service/Jobs.html", ServiceJobsCtrl, "Jobs" ),
        new RoutePath( "BusinessInfo", "/ngApp/service/BusinessInfo.html", ServiceBusinessInfoCtrl, "Business Info" ),
        new RoutePath( "Banking", "/ngApp/service/BankInfo.html", ServiceBankInfoCtrl, "Banking" ),

        new RoutePath_v3( { path: "ForgotPassword", templateHtml: "<forgot-password></forgot-password>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Login", templateHtml: "<login-page></login-page>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Help", templateHtml: "<help-form></help-form>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "MyProfile", templateHtml: "<my-profile></my-profile>" } ),
        
        new RoutePath_v3( { path: "/Admin/ViewActivityLog", templateHtml: "<view-activity-log></view-activity-log>", menuTitle: "View Activity Log", role: Role_Admin } ),
    ]
};


///////////////////////////////////////////////////////////////////////////////////////////////////
// Home Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var HomeAppConfig =
{
    appShortName: "home",
    appName: "Home Ally",
    baseTld: "homeally.org",
    baseUrl: "https://homeally.org/",
    menu: [
        new RoutePath_v3( { path: "Home", templateHtml: "<home-group-home></home-group-home>", menuTitle: "Home" } ),
        new RoutePath_v2( { path: "ToDo", templateUrl: "/ngApp/home/ToDos.html", controller: ServiceJobsCtrl, menuTitle: "Jobs" } ),
        new RoutePath_v3( { path: "SignUp", templateHtml: "<home-sign-up></home-sign-up>", role: Role_All } ),
        new RoutePath_v3( { path: "ForgotPassword", templateHtml: "<forgot-password></forgot-password>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Login", templateHtml: "<login-page></login-page>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "Help", templateHtml: "<help-form></help-form>", menuTitle: null, role: Role_All } ),
        new RoutePath_v3( { path: "MyProfile", templateHtml: "<my-profile></my-profile>" } ),

        new RoutePath_v3( { path: "/Admin/ViewActivityLog", templateHtml: "<view-activity-log></view-activity-log>", menuTitle: "View Activity Log", role: Role_Admin } ),
    ]
};


///////////////////////////////////////////////////////////////////////////////////////////////////
// HOA Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var HOAAppConfig = _.clone( CondoAllyAppConfig );
HOAAppConfig.appShortName = "hoa";
HOAAppConfig.appName = "HOA Ally";
HOAAppConfig.baseTld = "hoaally.org";
HOAAppConfig.baseUrl = "https://hoaally.org/";
HOAAppConfig.homeName = "Home";

HOAAppConfig.menu.push( new RoutePath_v3( { path: "HoaSignUp", templateHtml: "<hoa-sign-up-wizard></hoa-sign-up-wizard>", role: Role_All } ) );


///////////////////////////////////////////////////////////////////////////////////////////////////
// Neighborhood Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var NeighborhoodAppConfig = _.clone( CondoAllyAppConfig );
NeighborhoodAppConfig.appShortName = "neighborhood";
NeighborhoodAppConfig.appName = "Neighborhood Ally";
NeighborhoodAppConfig.baseTld = "neighborhoodally.org";
NeighborhoodAppConfig.baseUrl = "https://neighborhoodally.org/";
NeighborhoodAppConfig.homeName = "Home";

// Remove Residents and Manage Residents
NeighborhoodAppConfig.menu = _.reject( NeighborhoodAppConfig.menu, function( mi ) { return mi.menuTitle === "Residents"; } );

// Add them back under the name "Members"
NeighborhoodAppConfig.menu.push( new RoutePath_v3( { path: "BuildingResidents", templateHtml: "<group-members></group-members>", menuTitle: "Members" } ) );
NeighborhoodAppConfig.menu.splice( 0, 0, new RoutePath_v3( { path: "ManageResidents", templateHtml: "<manage-residents></manage-residents>", menuTitle: "Residents", role: Role_Manager } ) );

// Remove assessment history and add dues history
NeighborhoodAppConfig.menu = _.reject( NeighborhoodAppConfig.menu, function( mi ) { return mi.menuTitle === "Assessment History"; } );
NeighborhoodAppConfig.menu.splice( 3, 0, new RoutePath_v3( { path: "DuesHistory", menuTitle:"Dues History", templateHtml: "<dues-history></dues-history>", role: Role_Manager } ) );

NeighborhoodAppConfig.menu.push( new RoutePath_v3( { path: "NeighborhoodSignUp", templateHtml: "<neighborhood-sign-up-wizard></neighborhood-sign-up-wizard>", role: Role_All } ) );


///////////////////////////////////////////////////////////////////////////////////////////////////
// Block Club Ally
///////////////////////////////////////////////////////////////////////////////////////////////////
var BlockClubAppConfig = _.clone( CondoAllyAppConfig );
BlockClubAppConfig.appShortName = "block-club";
BlockClubAppConfig.appName = "Block Club Ally";
BlockClubAppConfig.baseTld = "chicagoblock.club";
BlockClubAppConfig.baseUrl = "https://chicagoblock.club/";
BlockClubAppConfig.homeName = "Home";

// Remove Residents and Manage Residents
BlockClubAppConfig.menu = _.reject( BlockClubAppConfig.menu, function( mi ) { return mi.menuTitle === "Residents"; } );

// Add them back under the name "Members"
BlockClubAppConfig.menu.push( new RoutePath_v3( { path: "BuildingResidents", templateHtml: "<group-members></group-members>", menuTitle: "Members" } ) );
BlockClubAppConfig.menu.splice( 0, 0, new RoutePath_v3( { path: "ManageResidents", templateHtml: "<manage-residents></manage-residents>", menuTitle: "Residents", role: Role_Manager } ) );

// Remove assessment history and add dues history
BlockClubAppConfig.menu = _.reject( BlockClubAppConfig.menu, function( mi ) { return mi.menuTitle === "Assessment History"; } );
BlockClubAppConfig.menu.splice( 3, 0, new RoutePath_v3( { path: "DuesHistory", menuTitle: "Dues History", templateHtml: "<dues-history></dues-history>", role: Role_Manager } ) );

BlockClubAppConfig.menu.push( new RoutePath_v3( { path: "NeighborhoodSignUp", templateHtml: "<neighborhood-sign-up-wizard></neighborhood-sign-up-wizard>", role: Role_All } ) );



var AppConfig = null;

var lowerDomain = document.domain.toLowerCase();
if( !HtmlUtil.isNullOrWhitespace( OverrideBaseApiPath ) )
    lowerDomain = OverrideBaseApiPath.toLowerCase();

if( lowerDomain.indexOf( "condoally" ) !== -1
    || lowerDomain.indexOf( "hellocondo" ) !== -1)
    AppConfig = CondoAllyAppConfig;
else if( lowerDomain.indexOf( "watchally" ) !== -1 )
    AppConfig = WatchAppConfig;
else if( lowerDomain.indexOf( "serviceally" ) !== -1 )
    AppConfig = ServiceAppConfig;
else if( lowerDomain.indexOf( "homeally" ) !== -1
    || lowerDomain.indexOf( "helloathome" ) !== -1)
    AppConfig = HomeAppConfig;
else if( lowerDomain.indexOf( "hoaally" ) !== -1
    || lowerDomain.indexOf( "hellohoa" ) !== -1)
    AppConfig = HOAAppConfig;
else if( lowerDomain.indexOf( "neighborhoodally" ) !== -1
    || lowerDomain.indexOf( "helloneighborhood" ) !== -1)
    AppConfig = NeighborhoodAppConfig;
else if( lowerDomain.indexOf( "chicagoblock" ) !== -1
    || lowerDomain.indexOf( "blockclub" ) !== -1 )
    AppConfig = BlockClubAppConfig;
else
{
    console.log( "Unknown ally app" );
    AppConfig = CondoAllyAppConfig;
}

// This is redundant due to how JS works, but we have it anyway to prevent confusion
window.AppConfig = AppConfig;


AppConfig.isPublicRoute = function( path )
{
    if( !path )
        path = window.location.hash;

    if( HtmlUtil.startsWith( path, "#!" ) )
        path = path.substr( 2 );

    // If the path has a parameter, only test the first word
    var hasParameter = path.indexOf( "/", 1 ) !== -1;
    if( hasParameter )
        path = path.substr( 0, path.indexOf( "/", 1 ) );

    var route = _.find( AppConfig.menu, function( m )
    {
        var testPath = m.path;
        if( !testPath )
            return false;

        // Only test the first part of paths with parameters
        if( hasParameter && testPath.indexOf( "/", 1 ) !== -1 )
            testPath = testPath.substr( 0, testPath.indexOf( "/", 1 ) );

        return testPath === path;
    } );

    if( !route )
        return false;

    return route.role === Role_All;
};


document.title = AppConfig.appName;
$( document ).ready( function()
{
    $( "header" ).css( "background-image", "url(/assets/images/header-img-" + AppConfig.appShortName + ".jpg)" );
} );