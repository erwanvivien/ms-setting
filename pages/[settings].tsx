import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Settings.module.css";
import styleshome from "../styles/Home.module.css";

import SettingMore from "../components/SettingMore";
import SettingPanel from "../components/SettingPanel";

import SettingImage from "../components/SettingImage";

// Account
const AccountConnexionIcon = "/icons/categories/acc_connexions.svg";
const AccountEmailIcon = "/icons/categories/acc_email.svg";
const AccountFamilyIcon = "/icons/categories/acc_family.svg";
const AccountInfoIcon = "/icons/categories/acc_info.svg";
const AccountSchoolIcon = "/icons/categories/acc_school.svg";
const AccountSyncIcon = "/icons/categories/acc_sync.svg";
// Access
const AccessAudioIcon = "/icons/categories/access_audio.svg";
const AccessColorsIcon = "/icons/categories/access_colors.svg";
const AccessComputerIcon = "/icons/categories/access_computer.svg";
const AccessContrastIcon = "/icons/categories/access_contrast.svg";
const AccessCursorIcon = "/icons/categories/access_cursor.svg";
const AccessKeyboardIcon = "/icons/categories/access_keyboard.svg";
const AccessMouseIcon = "/icons/categories/access_mouse.svg";
const AccessNarratorIcon = "/icons/categories/access_narrator.svg";
const AccessSearchIcon = "/icons/categories/access_search.svg";
const AccessSubtitlesIcon = "/icons/categories/access_subtitles.svg";
const AccessTextCursorIcon = "/icons/categories/access_text_cursor.svg";
const AccessVisualControlsIcon = "/icons/categories/access_visual_control.svg";
const AccessVoiceIcon = "/icons/categories/access_voice.svg";
// App
const AppDefaultIcon = "/icons/categories/app_default.svg";
const AppFunctionnalitiesIcon = "/icons/categories/app_functionnalities.svg";
const AppMapIcon = "/icons/categories/app_map.svg";
const AppStartupIcon = "/icons/categories/app_startup.svg";
const AppvideoPlayerIcon = "/icons/categories/app_video_player.svg";
const AppWebIcon = "/icons/categories/app_web.svg";
// Custom
const CustomBackgroundIcon = "/icons/categories/cust_background.svg";
const CustomColorsIcon = "/icons/categories/cust_colors.svg";
const CustomFontIcon = "/icons/categories/cust_font.svg";
const CustomLockscreenIcon = "/icons/categories/cust_lockscreen.svg";
const CustomStartupIcon = "/icons/categories/cust_startup.svg";
const CustomTaskbarIcon = "/icons/categories/cust_taskbar.svg";
const CustomThemesIcon = "/icons/categories/cust_themes.svg";
// Games
const GamesBarIcon = "/icons/categories/games_bar.svg";
const GamesCaptureIcon = "/icons/categories/games_capture.svg";
const GamesModeIcon = "/icons/categories/games_mode.svg";
const GamesXboxIcon = "/icons/categories/games_xbox.svg";
// Time
const TimeDateIcon = "/icons/categories/hour_date.svg";
const TimeLanguageIcon = "/icons/categories/hour_lang.svg";
const TimeRegionIcon = "/icons/categories/hour_region.svg";
const TimeVoiceIcon = "/icons/categories/hour_voice.svg";
// Network
const NetworkAccessIcon = "/icons/categories/net_access.svg";
const NetworkAccessPointIcon = "/icons/categories/net_access_point.svg";
const NetworkAirplaneIcon = "/icons/categories/net_airplane.svg";
const NetworkEthernetIcon = "/icons/categories/net_ethernet.svg";
const NetworkProxyIcon = "/icons/categories/net_proxy.svg";
const NetworkStateIcon = "/icons/categories/net_state.svg";
const NetworkVpnIcon = "/icons/categories/net_vpn.svg";
const NetworkWifiIcon = "/icons/categories/net_wifi.svg";
// Periph
const PeriphDevicesIcon = "/icons/categories/periph_devices.svg";
const PeriphPrintersIcon = "/icons/categories/periph_printers.svg";
const PeriphMouseIcon = "/icons/categories/periph_mouse.svg";
const PeriphTypingIcon = "/icons/categories/periph_keyboard.svg";
const PeriphPenIcon = "/icons/categories/periph_stylet.svg";
const PeriphAutoPlayIcon = "/icons/categories/periph_automated.svg";
const PeriphUsbIcon = "/icons/categories/periph_usb.svg";
// Privacy
const PrivacyAutoDownloadIcon = "/icons/categories/priv_automatic_download.svg";
const PrivacyBackgroundAppIcon = "/icons/categories/priv_background_app.svg";
const PrivacyCalendarIcon = "/icons/categories/priv_calendar.svg";
const PrivacyCallIcon = "/icons/categories/priv_call.svg";
const PrivacyCamIcon = "/icons/categories/priv_cam.svg";
const PrivacyContactIcon = "/icons/categories/priv_contact.svg";
const PrivacyDiagnoIcon = "/icons/categories/priv_diagno.svg";
const PrivacyIcon = "/icons/categories/priv_diagno_app.svg";
const PrivacyDocumentsIcon = "/icons/categories/priv_documents.svg";
const PrivacyFilesystemIcon = "/icons/categories/priv_filesystem.svg";
const PrivacyGeneralIcon = "/icons/categories/priv_general.svg";
const PrivacyHistoIcon = "/icons/categories/priv_histo.svg";
const PrivacyHisto_callIcon = "/icons/categories/priv_histo_call.svg";
const PrivacyInfoIcon = "/icons/categories/priv_info.svg";
const PrivacyLocationIcon = "/icons/categories/priv_location.svg";
const PrivacyMailIcon = "/icons/categories/priv_mail.svg";
const PrivacyManuscritIcon = "/icons/categories/priv_manuscrit.svg";
const PrivacyMessageIcon = "/icons/categories/priv_message.svg";
const PrivacyMicIcon = "/icons/categories/priv_mic.svg";
const PrivacyNotifIcon = "/icons/categories/priv_notif.svg";
const PrivacyOther_devicesIcon = "/icons/categories/priv_other_devices.svg";
const PrivacyPicturesIcon = "/icons/categories/priv_pictures.svg";
const PrivacyRadiosIcon = "/icons/categories/priv_radios.svg";
const PrivacyTasksIcon = "/icons/categories/priv_tasks.svg";
const PrivacyVideosIcon = "/icons/categories/priv_videos.svg";
const PrivacyVoiceIcon = "/icons/categories/priv_voice.svg";
const PrivacyVoice_activationIcon =
  "/icons/categories/priv_voice_activation.svg";
// Search
const SearchAuthIcon = "/icons/categories/search_auth.svg";
const SearchSearchIcon = "/icons/categories/search_search.svg";
// System
const SystemAlimIcon = "/icons/categories/sys_alim.svg";
const SystemAproposIcon = "/icons/categories/sys_apropos.svg";
const SystemBatteryIcon = "/icons/categories/sys_battery.svg";
const SystemConcentrationIcon = "/icons/categories/sys_concentration.svg";
const SystemCopyIcon = "/icons/categories/sys_copy.svg";
const SystemDisplayIcon = "/icons/categories/sys_display.svg";
const SystemDistantIcon = "/icons/categories/sys_distant.svg";
const SystemMultitaskIcon = "/icons/categories/sys_multitask.svg";
const SystemNotifIcon = "/icons/categories/sys_notif.svg";
const SystemProjectionIcon = "/icons/categories/sys_projection.svg";
const SystemSharedIcon = "/icons/categories/sys_shared.svg";
const SystemSoundIcon = "/icons/categories/sys_sound.svg";
const SystemStorageIcon = "/icons/categories/sys_storage.svg";
const SystemTabletIcon = "/icons/categories/sys_tablet.svg";
// Update
const UpdateActivateIcon = "/icons/categories/updates_activate.svg";
const UpdateDevIcon = "/icons/categories/updates_dev.svg";
const UpdateinsiderIcon = "/icons/categories/updates_insider.svg";
const UpdateLocateIcon = "/icons/categories/updates_locate.svg";
const UpdateOptiIcon = "/icons/categories/updates_opti.svg";
const UpdateRecoverIcon = "/icons/categories/updates_recover.svg";
const UpdateSaveIcon = "/icons/categories/updates_save.svg";
const UpdateSecurityIcon = "/icons/categories/updates_security.svg";
const UpdateSolveIcon = "/icons/categories/updates_solve.svg";
const UpdateWindowsIcon = "/icons/categories/updates_windows.svg";

// Image for setting content
// Account
const AccountsAccessWorkOrSchool = "/settings/accounts/accessworkorschool.png";
const AccountsEmailAccounts = "/settings/accounts/emailaccounts.png";
const AccountsFamilyOtherUsers = "/settings/accounts/familyotherusers.png";
const AccountsSignInOptions = "/settings/accounts/signinoptions.png";
const AccountsSyncYourSettings = "/settings/accounts/syncyoursettings.png";
const AccountsYourInfo = "/settings/accounts/yourinfo.png";
// App
const AppsAppsFeatures = "/settings/apps/appsfeatures.png";
const AppsAppsForWebsites = "/settings/apps/appsforwebsites.png";
const AppsDefaultApps = "/settings/apps/defaultapps.png";
const AppsOfflineMaps = "/settings/apps/offlinemaps.png";
const AppsStartup = "/settings/apps/startup.png";
const AppsVideoPlayback = "/settings/apps/videoplayback.png";
// Periph
const DevicesAutoplay = "/settings/devices/autoplay.png";
const DevicesBluetoothOtherDevices =
  "/settings/devices/bluetoothotherdevices.png";
const DevicesMouse = "/settings/devices/mouse.png";
const DevicesPenWindowsInk = "/settings/devices/penwindowsink.png";
const DevicesPrintersScanners = "/settings/devices/printersscanners.png";
const DevicesTyping = "/settings/devices/typing.png";
const DevicesUsb = "/settings/devices/usb.png";
// Access
const EaseAudio = "/settings/ease/audio.png";
const EaseClosedCaptions = "/settings/ease/closedcaptions.png";
const EaseColorFilters = "/settings/ease/colorfilters.png";
const EaseDisplay = "/settings/ease/display.png";
const EaseEyeControl = "/settings/ease/eyecontrol.png";
const EaseHighContrast = "/settings/ease/highcontrast.png";
const EaseKeyboard = "/settings/ease/keyboard.png";
const EaseMagnifier = "/settings/ease/magnifier.png";
const EaseMouse = "/settings/ease/mouse.png";
const EaseMousePointer = "/settings/ease/mousepointer.png";
const EaseNarrator = "/settings/ease/narrator.png";
const EaseSpeech = "/settings/ease/speech.png";
const EaseTextCursor = "/settings/ease/textcursor.png";
// Games
const GamingCaptures = "/settings/gaming/captures.png";
const GamingGamemode = "/settings/gaming/gamemode.png";
const GamingXboxGameBar = "/settings/gaming/xboxgamebar.png";
const GamingXboxNetworking = "/settings/gaming/xboxnetworking.png";
// Network
const NetworkAirplaneMode = "/settings/network/airplanemode.png";
const NetworkDialup = "/settings/network/dialup.png";
const NetworkEthernet = "/settings/network/ethernet.png";
const NetworkMobileHotspot = "/settings/network/mobilehotspot.png";
const NetworkProxy = "/settings/network/proxy.png";
const NetworkStatus = "/settings/network/status.png";
const NetworkVpn = "/settings/network/vpn.png";
const NetworkWifi = "/settings/network/wifi.png";
// Custom
const PersonalizationBackground = "/settings/personalization/background.png";
const PersonalizationColors = "/settings/personalization/colors.png";
const PersonalizationFonts = "/settings/personalization/fonts.png";
const PersonalizationLockscreen = "/settings/personalization/lockscreen.png";
const PersonalizationStart = "/settings/personalization/start.png";
const PersonalizationTaskbar = "/settings/personalization/taskbar.png";
const PersonalizationThemes = "/settings/personalization/themes.png";
// Privacy
const PrivacyAccountInfo = "/settings/privacy/accountinfo.png";
const PrivacyActivityHistory = "/settings/privacy/activityhistory.png";
const PrivacyAppDiagnostics = "/settings/privacy/appdiagnostics.png";
const PrivacyAutomaticFileDownloads =
  "/settings/privacy/automaticfiledownloads.png";
const PrivacyBackgroundApps = "/settings/privacy/backgroundapps.png";
const PrivacyCalendar = "/settings/privacy/calendar.png";
const PrivacyCallHistory = "/settings/privacy/callhistory.png";
const PrivacyCamera = "/settings/privacy/camera.png";
const PrivacyContacts = "/settings/privacy/contacts.png";
const PrivacyDiagnosticsFeedback = "/settings/privacy/diagnosticsfeedback.png";
const PrivacyDocuments = "/settings/privacy/documents.png";
const PrivacyEmail = "/settings/privacy/email.png";
const PrivacyFilesystem = "/settings/privacy/filesystem.png";
const PrivacyGeneral = "/settings/privacy/general.png";
const PrivacyInkingTypingPersonalization =
  "/settings/privacy/inkingtypingpersonalization.png";
const PrivacyLocation = "/settings/privacy/location.png";
const PrivacyMessaging = "/settings/privacy/messaging.png";
const PrivacyMicrophone = "/settings/privacy/microphone.png";
const PrivacyNotifications = "/settings/privacy/notifications.png";
const PrivacyOtherDevices = "/settings/privacy/otherdevices.png";
const PrivacyPhoneCalls = "/settings/privacy/phonecalls.png";
const PrivacyPictures = "/settings/privacy/pictures.png";
const PrivacyRadios = "/settings/privacy/radios.png";
const PrivacySpeech = "/settings/privacy/speech.png";
const PrivacyTasks = "/settings/privacy/tasks.png";
const PrivacyVideos = "/settings/privacy/videos.png";
const PrivacyVoiceActivation = "/settings/privacy/voiceactivation.png";
// Search
const SearchPermissionsHistory = "/settings/search/permissionshistory.png";
const SearchSearchingWindows = "/settings/search/searchingwindows.png";
// System
const SystemAbout = "/settings/system/about.png";
const SystemClipboard = "/settings/system/clipboard.png";
const SystemDisplay = "/settings/system/display.png";
const SystemFocusAssist = "/settings/system/focusassist.png";
const SystemMultitasking = "/settings/system/multitasking.png";
const SystemNotificationsActions = "/settings/system/notificationsactions.png";
const SystemPowerSleep = "/settings/system/powersleep.png";
const SystemProjectingToThisPc = "/settings/system/projectingtothispc.png";
const SystemRemoteDesktop = "/settings/system/remotedesktop.png";
const SystemSharedEexperiences = "/settings/system/sharedexperiences.png";
const SystemSound = "/settings/system/sound.png";
const SystemStorage = "/settings/system/storage.png";
const SystemTablet = "/settings/system/tablet.png";
// Time
const TimeDatetime = "/settings/time/datetime.png";
const TimeLanguage = "/settings/time/language.png";
const TimeRegion = "/settings/time/region.png";
const TimeSpeech = "/settings/time/speech.png";
// Update
const UpdateActivation = "/settings/update/activation.png";
const UpdateBackup = "/settings/update/backup.png";
const UpdateDeliveryOptimization = "/settings/update/deliveryoptimization.png";
const UpdateFindMydevice = "/settings/update/findmydevice.png";
const UpdateForDevelopers = "/settings/update/fordevelopers.png";
const UpdateRecovery = "/settings/update/recovery.png";
const UpdateTroubleshoot = "/settings/update/troubleshoot.png";
const UpdateWindowsInsiderProgram =
  "/settings/update/windowsinsiderprogram.png";
const UpdateWindowsSecurity = "/settings/update/windowssecurity.png";
const UpdateWindowsUpdate = "/settings/update/windowsupdate.png";

export interface Setting {
  icon: any;
  text: string;
  setting: string;
  keywords: string[];
  image: string;
}

export type PossibleSettings =
  | "accounts"
  | "ease"
  | "apps"
  | "personalization"
  | "gaming"
  | "time"
  | "network"
  | "devices"
  | "phone"
  | "privacy"
  | "search"
  | "system"
  | "update";

export const settingsPanel: { [K in PossibleSettings]: Setting[] } = {
  // Ok
  accounts: [
    {
      icon: AccountInfoIcon,
      text: "Your info",
      setting: "ms-settings:yourinfo",
      keywords: ["account", "info", "information", "avatar", "microsoft"],
      image: AccountsYourInfo,
    },
    {
      icon: AccountEmailIcon,
      text: "Email & accounts",
      setting: "ms-settings:emailandaccounts",
      keywords: ["account", "email", "mail"],
      image: AccountsEmailAccounts,
    },
    {
      icon: AccountConnexionIcon,
      text: "Sign-in options",
      setting: "ms-settings:signinoptions",
      keywords: ["account", "sign", "sign-in", "log", "log-in"],
      image: AccountsSignInOptions,
    },
    {
      icon: AccountSchoolIcon,
      text: "Access work or school",
      setting: "ms-settings:workplace",
      keywords: ["account", "workplace", "school"],
      image: AccountsAccessWorkOrSchool,
    },
    {
      icon: AccountFamilyIcon,
      text: "Family & other users",
      setting: "ms-settings:otherusers",
      keywords: ["account", "family", "user"],
      image: AccountsFamilyOtherUsers,
    },
    {
      icon: AccountSyncIcon,
      text: "Sync you settings",
      setting: "ms-settings:sync",
      keywords: ["account", "sync", "setting"],
      image: AccountsSyncYourSettings,
    },
  ],
  // Ok
  ease: [
    {
      icon: AccessComputerIcon,
      text: "Display",
      setting: "ms-settings:easeofaccess-display",
      keywords: ["ease", "display", "ease"],
      image: EaseDisplay,
    },
    {
      icon: AccessCursorIcon,
      text: "Mouse pointer",
      setting: "ms-settings:easeofaccess-cursorandpointersize",
      keywords: ["ease", "cursor", "pointer", "mouse"],
      image: EaseMousePointer,
    },
    {
      icon: AccessTextCursorIcon,
      text: "Text Cursor",
      setting: "ms-settings:easeofaccess-cursor",
      keywords: ["ease", "cursor", "text"],
      image: EaseTextCursor,
    },
    {
      icon: AccessSearchIcon,
      text: "Magnifier",
      setting: "ms-settings:easeofaccess-magnifier",
      keywords: ["ease", "magnifier", "mag"],
      image: EaseMagnifier,
    },
    {
      icon: AccessColorsIcon,
      text: "Color Filters",
      setting: "ms-settings:easeofaccess-colorfilter",
      keywords: ["ease", "color", "filter"],
      image: EaseColorFilters,
    },
    {
      icon: AccessContrastIcon,
      setting: "ms-settings:easeofaccess-highcontrast",
      text: "High Contrast",
      keywords: ["ease", "contrast"],
      image: EaseHighContrast,
    },
    {
      icon: AccessNarratorIcon,
      setting: "ms-settings:easeofaccess-narrator",
      text: "Narrator",
      keywords: ["ease", "narrator"],
      image: EaseNarrator,
    },
    {
      icon: undefined,
      setting: "",
      text: "ease-spacer1",
      keywords: [],
      image: undefined as any,
    },
    {
      icon: AccessAudioIcon,
      setting: "ms-settings:easeofaccess-audio",
      text: "Audio",
      keywords: ["ease", "audio"],
      image: EaseAudio,
    },
    {
      icon: AccessSubtitlesIcon,
      setting: "ms-settings:easeofaccess-closedcaptioning",
      text: "Closed captions",
      keywords: ["ease", "caption"],
      image: EaseClosedCaptions,
    },
    {
      icon: undefined,
      setting: "",
      text: "ease-spacer2",
      keywords: [],
      image: undefined as any,
    },

    {
      icon: AccessVoiceIcon,
      setting: "ms-settings:easeofaccess-speechrecognition",
      text: "Speech",
      keywords: ["ease", "speech"],
      image: EaseSpeech,
    },
    {
      icon: AccessKeyboardIcon,
      setting: "ms-settings:easeofaccess-keyboard",
      text: "Keyboard",
      keywords: ["ease", "keyboard"],
      image: EaseKeyboard,
    },
    {
      icon: AccessMouseIcon,
      setting: "ms-settings:easeofaccess-mouse",
      text: "Mouse",
      keywords: ["ease", "mouse"],
      image: EaseMouse,
    },
    {
      icon: AccessVisualControlsIcon,
      setting: "ms-settings:easeofaccess-eyecontrol",
      text: "Eye Control",
      keywords: ["ease", "eye", "control"],
      image: EaseEyeControl,
    },
  ],
  // Ok
  apps: [
    {
      icon: AppFunctionnalitiesIcon,
      setting: "ms-settings:appsfeatures",
      text: "Apps & features",
      keywords: ["app", "application", "feature"],
      image: AppsAppsFeatures,
    },
    {
      icon: AppDefaultIcon,
      setting: "ms-settings:defaultapps",
      text: "Default apps",
      keywords: ["app", "application", "default"],
      image: AppsDefaultApps,
    },
    {
      icon: AppMapIcon,
      setting: "ms-settings:maps",
      text: "Offline maps",
      keywords: ["app", "application", "map"],
      image: AppsOfflineMaps,
    },
    {
      icon: AppWebIcon,
      setting: "ms-settings:appsforwebsites",
      text: "Apps for websites",
      keywords: ["app", "application", "site", "web"],
      image: AppsAppsForWebsites,
    },
    {
      icon: AppvideoPlayerIcon,
      setting: "ms-settings:videoplayback",
      text: "Video playback",
      keywords: ["app", "application", "video", "playback"],
      image: AppsVideoPlayback,
    },
    {
      icon: AppStartupIcon,
      setting: "ms-settings:startupapps",
      text: "Startup",
      keywords: ["app", "application", "startup"],
      image: AppsStartup,
    },
  ],
  // Ok
  personalization: [
    {
      icon: CustomBackgroundIcon,
      setting: "ms-settings:personalization-background",
      text: "Background",
      keywords: ["personalization", "background"],
      image: PersonalizationBackground,
    },
    {
      icon: CustomColorsIcon,
      setting: "ms-settings:personalization-colors",
      text: "Colors",
      keywords: ["personalization", "color"],
      image: PersonalizationColors,
    },
    {
      icon: CustomLockscreenIcon,
      setting: "ms-settings:lockscreen",
      text: "Lock screen",
      keywords: ["personalization", "lock", "lockscreen"],
      image: PersonalizationLockscreen,
    },
    {
      icon: CustomThemesIcon,
      setting: "ms-settings:themes",
      text: "Themes",
      keywords: ["personalization", "theme"],
      image: PersonalizationThemes,
    },
    {
      icon: CustomFontIcon,
      setting: "ms-settings:fonts",
      text: "Fonts",
      keywords: ["personalization", "font"],
      image: PersonalizationFonts,
    },
    {
      icon: CustomStartupIcon,
      setting: "ms-settings:personalization-start",
      text: "Start",
      keywords: ["personalization", "start"],
      image: PersonalizationStart,
    },
    {
      icon: CustomTaskbarIcon,
      setting: "ms-settings:taskbar",
      text: "Taskbar",
      keywords: ["personalization", "taskbar"],
      image: PersonalizationTaskbar,
    },
  ],
  // Ok
  phone: [
    {
      icon: undefined,
      setting: "ms-settings:mobile-devices",
      text: "phone-temp",
      keywords: [],
      image: undefined as any,
    },
  ],
  // Ok
  gaming: [
    {
      icon: GamesBarIcon,
      setting: "ms-settings:gaming-gamebar",
      text: "Game bar",
      keywords: ["game", "bar"],
      image: GamingXboxGameBar,
    },
    {
      icon: GamesCaptureIcon,
      setting: "ms-settings:gaming-gamedvr",
      text: "Captures",
      keywords: ["game", "capture"],
      image: GamingCaptures,
    },
    {
      icon: GamesModeIcon,
      setting: "ms-settings:gaming-gamemode",
      text: "Game Mode",
      keywords: ["game", "mode"],
      image: GamingGamemode,
    },
    {
      icon: GamesXboxIcon,
      setting: "ms-settings:gaming-xboxnetworking",
      text: "Xbox Networking",
      keywords: ["game", "xbox", "network"],
      image: GamingXboxNetworking,
    },
  ],
  // Ok
  time: [
    {
      icon: TimeDateIcon,
      setting: "ms-settings:dateandtime",
      text: "Date & time",
      keywords: ["time", "date"],
      image: TimeDatetime,
    },
    {
      icon: TimeRegionIcon,
      setting: "ms-settings:regionformatting",
      text: "Region",
      keywords: ["time", "region", "formatting"],
      image: TimeRegion,
    },
    {
      icon: TimeLanguageIcon,
      setting: "ms-settings:regionlanguage",
      text: "Language",
      keywords: ["time", "region", "language"],
      image: TimeLanguage,
    },
    {
      icon: TimeVoiceIcon,
      setting: "ms-settings:speech",
      text: "Speech",
      keywords: ["time", "speech"],
      image: TimeSpeech,
    },
  ],
  // Ok
  network: [
    {
      icon: NetworkStateIcon,
      setting: "ms-settings:network-status",
      text: "Status",
      keywords: ["network", "status"],
      image: NetworkStatus,
    },
    {
      icon: NetworkWifiIcon,
      setting: "ms-settings:network-wifi",
      text: "Wi-Fi",
      keywords: ["network", "wifi", "wi-fi"],
      image: NetworkWifi,
    },
    {
      icon: NetworkEthernetIcon,
      setting: "ms-settings:network-ethernet",
      text: "Ethernet",
      keywords: ["network", "ethernet"],
      image: NetworkEthernet,
    },
    {
      icon: NetworkAccessIcon,
      setting: "ms-settings:network-dialup",
      text: "Dial-up",
      keywords: ["network", "dial", "dial-up"],
      image: NetworkDialup,
    },
    {
      icon: NetworkVpnIcon,
      setting: "ms-settings:network-vpn",
      text: "VPN",
      keywords: ["network", "vpn"],
      image: NetworkVpn,
    },
    {
      icon: NetworkAirplaneIcon,
      setting: "ms-settings:network-airplanemode",
      text: "Airplane mode",
      keywords: ["network", "airplane", "mode"],
      image: NetworkAirplaneMode,
    },
    {
      icon: NetworkAccessPointIcon,
      setting: "ms-settings:network-mobilehotspot",
      text: "Mobile hotspot",
      keywords: ["network", "mobile", "hotstop"],
      image: NetworkMobileHotspot,
    },
    {
      icon: NetworkProxyIcon,
      setting: "ms-settings:network-proxy",
      text: "Proxy",
      keywords: ["network", "proxy"],
      image: NetworkProxy,
    },
  ],
  // Ok
  devices: [
    {
      icon: PeriphDevicesIcon,
      text: "Bluetooth & other devices",
      setting: "ms-settings:connecteddevices",
      keywords: ["device", "bluetooth", "other"],
      image: DevicesBluetoothOtherDevices,
    },
    {
      icon: PeriphPrintersIcon,
      text: "Printers & scanners",
      setting: "ms-settings:printers",
      keywords: ["device", "printer", "scanner"],
      image: DevicesPrintersScanners,
    },
    {
      icon: PeriphMouseIcon,
      text: "Mouse",
      setting: "ms-settings:mousetouchpad",
      keywords: ["device", "mouse", "touchpad"],
      image: DevicesMouse,
    },
    {
      icon: PeriphTypingIcon,
      text: "Typing",
      setting: "ms-settings:typing",
      keywords: ["device", "typing"],
      image: DevicesTyping,
    },
    {
      icon: PeriphPenIcon,
      text: "Pen & Windows Ink",
      setting: "ms-settings:pen",
      keywords: ["device", "pen", "ink"],
      image: DevicesPenWindowsInk,
    },
    {
      icon: PeriphAutoPlayIcon,
      text: "AutoPlay",
      setting: "ms-settings:autoplay",
      keywords: ["device", "autoplay"],
      image: DevicesAutoplay,
    },
    {
      icon: PeriphUsbIcon,
      text: "USB",
      setting: "ms-settings:usb",
      keywords: ["device", "usb"],
      image: DevicesUsb,
    },
  ],
  // Ok
  privacy: [
    {
      icon: PrivacyGeneralIcon,
      setting: "ms-settings:privacy",
      text: "General",
      keywords: ["privacy"],
      image: PrivacyGeneral,
    },
    {
      icon: PrivacyTasksIcon,
      setting: "ms-settings:privacy-speechtyping",
      text: "Inking & typing...",
      keywords: ["privacy", "ink", "typing"],
      image: PrivacyInkingTypingPersonalization,
    },
    {
      icon: PrivacyDiagnoIcon,
      setting: "ms-settings:privacy-feedback",
      text: "Diagnostics & feedback",
      keywords: ["privacy", "diagnostic", "feedback"],
      image: PrivacyDiagnosticsFeedback,
    },
    {
      icon: PrivacyHistoIcon,
      setting: "ms-settings:privacy-activityhistory",
      text: "Activity history",
      keywords: ["privacy", "activity", "history"],
      image: PrivacyActivityHistory,
    },

    {
      icon: undefined,
      setting: "",
      text: "privacy-spacer2",
      keywords: [],
      image: undefined as any,
    },

    {
      icon: PrivacyVoiceIcon,
      setting: "ms-settings:privacy-speech",
      text: "Speech",
      keywords: ["privacy", "speech"],
      image: PrivacySpeech,
    },

    {
      icon: undefined,
      setting: "",
      text: "privacy-spacer3",
      keywords: [],
      image: undefined as any,
    },

    {
      icon: PrivacyLocationIcon,
      setting: "ms-settings:privacy-location",
      text: "Location",
      keywords: ["privacy", "location"],
      image: PrivacyLocation,
    },
    {
      icon: PrivacyCamIcon,
      setting: "ms-settings:privacy-webcam",
      text: "Camera",
      keywords: ["privacy", "webcam", "camera"],
      image: PrivacyCamera,
    },
    {
      icon: PrivacyMicIcon,
      setting: "ms-settings:privacy-microphone",
      text: "Microphone",
      keywords: ["privacy", "microphone"],
      image: PrivacyMicrophone,
    },
    {
      icon: PrivacyVoice_activationIcon,
      setting: "ms-settings:privacy-voiceactivation",
      text: "Voice activation",
      keywords: ["privacy", "voice", "activation"],
      image: PrivacyVoiceActivation,
    },
    {
      icon: PrivacyNotifIcon,
      setting: "ms-settings:privacy-notifications",
      text: "Notifications",
      keywords: ["privacy", "notification"],
      image: PrivacyNotifications,
    },
    {
      icon: PrivacyInfoIcon,
      setting: "ms-settings:privacy-accountinfo",
      text: "Account info",
      keywords: ["privacy", "account", "info"],
      image: PrivacyAccountInfo,
    },
    {
      icon: PrivacyContactIcon,
      setting: "ms-settings:privacy-contacts",
      text: "Contacts",
      keywords: ["privacy", "contact"],
      image: PrivacyContacts,
    },
    {
      icon: PrivacyCalendarIcon,
      setting: "ms-settings:privacy-calendar",
      text: "Calendar",
      keywords: ["privacy", "calendar"],
      image: PrivacyCalendar,
    },
    {
      icon: PrivacyCallIcon,
      setting: "ms-settings:privacy-phonecalls",
      text: "Phone calls",
      keywords: ["privacy", "phone", "call"],
      image: PrivacyPhoneCalls,
    },
    {
      icon: PrivacyHisto_callIcon,
      setting: "ms-settings:privacy-callhistory",
      text: "Call history",
      keywords: ["privacy", "history", "call"],
      image: PrivacyCallHistory,
    },
    {
      icon: PrivacyMailIcon,
      setting: "ms-settings:privacy-email",
      text: "Email",
      keywords: ["privacy", "email", "mail"],
      image: PrivacyEmail,
    },
    {
      icon: PrivacyManuscritIcon,
      setting: "ms-settings:privacy-tasks",
      text: "Tasks",
      keywords: ["privacy", "task"],
      image: PrivacyTasks,
    },
    {
      icon: PrivacyMessageIcon,
      setting: "ms-settings:privacy-messaging",
      text: "Messaging",
      keywords: ["privacy", "messaging", "message"],
      image: PrivacyMessaging,
    },
    {
      icon: PrivacyRadiosIcon,
      setting: "ms-settings:privacy-radios",
      text: "Radios",
      keywords: ["privacy", "radio"],
      image: PrivacyRadios,
    },
    {
      icon: PrivacyOther_devicesIcon,
      setting: "ms-settings:privacy-customdevices",
      text: "Other devices",
      keywords: ["privacy", "custom", "device"],
      image: PrivacyOtherDevices,
    },
    {
      icon: PrivacyBackgroundAppIcon,
      setting: "ms-settings:privacy-backgroundapps",
      text: "Background apps",
      keywords: ["privacy", "background", "app"],
      image: PrivacyBackgroundApps,
    },
    {
      icon: PrivacyIcon,
      setting: "ms-settings:privacy-appdiagnostics",
      text: "App diagnostics",
      keywords: ["privacy", "diagnostic", "app"],
      image: PrivacyAppDiagnostics,
    },
    {
      icon: PrivacyAutoDownloadIcon,
      setting: "ms-settings:privacy-automaticfiledownloads",
      text: "Automatic file downloads",
      keywords: ["privacy", "file", "download", "automatic"],
      image: PrivacyAutomaticFileDownloads,
    },
    {
      icon: PrivacyDocumentsIcon,
      setting: "ms-settings:privacy-documents",
      text: "Documents",
      keywords: ["privacy", "document"],
      image: PrivacyDocuments,
    },
    {
      icon: PrivacyPicturesIcon,
      setting: "ms-settings:privacy-pictures",
      text: "Pictures",
      keywords: ["privacy", "picture"],
      image: PrivacyPictures,
    },
    {
      icon: PrivacyVideosIcon,
      setting: "ms-settings:privacy-videos",
      text: "Videos",
      keywords: ["privacy", "video"],
      image: PrivacyVideos,
    },
    {
      icon: PrivacyFilesystemIcon,
      setting: "ms-settings:privacy-broadfilesystemaccess",
      text: "File system",
      keywords: ["privacy", "file", "system"],
      image: PrivacyFilesystem,
    },
  ],
  // Ok
  search: [
    {
      icon: SearchAuthIcon,
      setting: "ms-settings:search-permissions",
      text: "Permissions & history",
      keywords: ["search", "permission", "history"],
      image: SearchPermissionsHistory,
    },
    {
      icon: SearchSearchIcon,
      setting: "ms-settings:cortana-windowssearch",
      text: "Searching Windows",
      keywords: ["search", "cortana", "window"],
      image: SearchSearchingWindows,
    },
  ],
  // Ok
  system: [
    {
      icon: SystemDisplayIcon,
      text: "Display",
      setting: "ms-settings:display",
      keywords: ["system", "display"],
      image: SystemDisplay,
    },
    {
      icon: SystemSoundIcon,
      text: "Sound",
      setting: "ms-settings:sound",
      keywords: ["system", "sound"],
      image: SystemSound,
    },
    {
      icon: SystemNotifIcon,
      text: "Notification & actions",
      setting: "ms-settings:notifications",
      keywords: ["system", "notification", "action"],
      image: SystemNotificationsActions,
    },
    {
      icon: SystemConcentrationIcon,
      text: "Focus assist",
      setting: "ms-settings:quiethours",
      keywords: ["system", "focus", "assist", "quiet"],
      image: SystemFocusAssist,
    },
    {
      icon: SystemAlimIcon,
      text: "Power & sleep",
      setting: "ms-settings:powersleep",
      keywords: ["system", "power", "sleep"],
      image: SystemPowerSleep,
    },
    {
      icon: SystemBatteryIcon,
      text: "Battery Saver",
      setting: "ms-settings:batterysaver",
      keywords: ["system", "battery", "saver"],
      image: undefined as any, // TODO
    },
    {
      icon: SystemStorageIcon,
      text: "Storage",
      setting: "ms-settings:storagesense",
      keywords: ["system", "storage"],
      image: SystemStorage,
    },
    {
      icon: SystemTabletIcon,
      text: "Tablet",
      setting: "ms-settings:tabletmode",
      keywords: ["system", "tablet"],
      image: SystemTablet,
    },
    {
      icon: SystemMultitaskIcon,
      text: "Multitasking",
      setting: "ms-settings:multitasking",
      keywords: ["system", "multitasking"],
      image: SystemMultitasking,
    },
    {
      icon: SystemProjectionIcon,
      text: "Projecting to this PC",
      setting: "ms-settings:project",
      keywords: ["system", "project"],
      image: SystemProjectingToThisPc,
    },
    {
      icon: SystemSharedIcon,
      text: "Shared experiences",
      setting: "ms-settings:crossdevice",
      keywords: ["system", "shared", "experience", "crossdevice"],
      image: SystemSharedEexperiences,
    },
    {
      icon: SystemCopyIcon,
      text: "Clipboard",
      setting: "ms-settings:clipboard",
      keywords: ["system", "clipboard"],
      image: SystemClipboard,
    },
    {
      icon: SystemDistantIcon,
      text: "Remote Desktop",
      setting: "ms-settings:remotedesktop",
      keywords: ["system", "remote", "desktop"],
      image: SystemRemoteDesktop,
    },
    {
      icon: SystemAproposIcon,
      text: "About",
      setting: "ms-settings:about",
      keywords: ["system", "about"],
      image: SystemAbout,
    },
  ],
  // Ok
  update: [
    {
      icon: UpdateWindowsIcon,
      setting: "ms-settings:windowsupdate",
      text: "Windows Update",
      keywords: ["update", "window", "update"],
      image: UpdateWindowsUpdate,
    },
    {
      icon: UpdateOptiIcon,
      setting: "ms-settings:delivery-optimization",
      text: "Delivery Optimization",
      keywords: ["update", "delivery", "optimization"],
      image: UpdateDeliveryOptimization,
    },
    {
      icon: UpdateSecurityIcon,
      setting: "ms-settings:windowsdefender",
      text: "Windows Security",
      keywords: ["update", "window", "defender", "security"],
      image: UpdateWindowsSecurity,
    },
    {
      icon: UpdateSaveIcon,
      setting: "ms-settings:backup",
      text: "Backup",
      keywords: ["update", "backup"],
      image: UpdateBackup,
    },
    {
      icon: UpdateSolveIcon,
      setting: "ms-settings:troubleshoot",
      text: "Troubleshoot",
      keywords: ["update", "troubleshoot", "trouble"],
      image: UpdateTroubleshoot,
    },
    {
      icon: UpdateRecoverIcon,
      setting: "ms-settings:recovery",
      text: "Recovery",
      keywords: ["update", "recovery"],
      image: UpdateRecovery,
    },
    {
      icon: UpdateActivateIcon,
      setting: "ms-settings:activation",
      text: "Activation",
      keywords: ["update", "activation"],
      image: UpdateActivation,
    },
    {
      icon: UpdateLocateIcon,
      setting: "ms-settings:findmydevice",
      text: "Find My Device",
      keywords: ["update", "device", "find"],
      image: UpdateFindMydevice,
    },
    {
      icon: UpdateDevIcon,
      setting: "ms-settings:developers",
      text: "For developers",
      keywords: ["update", "dev", "developer"],
      image: UpdateForDevelopers,
    },
    {
      icon: UpdateinsiderIcon,
      setting: "ms-settings:windowsinsider",
      text: "Windows Insider Program",
      keywords: ["update", "window", "insider"],
      image: UpdateWindowsInsiderProgram,
    },
  ],
};

export const titleMap = {
  accounts: "Accounts",
  ease: "Ease of Access",
  apps: "Apps",
  personalization: "Personalization",
  gaming: "Gaming",
  time: "Time & Language",
  network: "Network & Internet",
  devices: "Devices",
  privacy: "Privacy",
  search: "Search",
  system: "System",
  update: "Update & Security",
  phone: "Phone",
} as const;

const Template = ({ page }: { page: PossibleSettings }) => {
  const [icons, setIcons] = React.useState<Setting[]>([]);
  const [title, setTitle] = React.useState("");

  const [selected, setSelected] = React.useState<number>(0);

  const [myTimeout, setMyTimeout] = React.useState<NodeJS.Timeout>(null as any);
  const [content, setContent] = React.useState("");

  const [anchor, setAnchorPoint] = React.useState({ x: 0, y: 0 });
  const [show, setShow] = React.useState(false);
  const [contextMenu, setContextMenu] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIcons(settingsPanel[page]);
    setTitle(titleMap[page]);
  }, [page]);

  const copySetting = (text: string) => {
    if (!text.includes("ms-settings:")) {
      return;
    }

    const redirect = text.substring(text.indexOf("ms-settings:"));

    clearTimeout(myTimeout);
    navigator.clipboard.writeText(text);

    const t = setTimeout(() => {
      setContent("");
    }, 1500);

    setContent(redirect);
    setMyTimeout(t);
  };

  const copyCurrent = () =>
    copySetting(
      `${window.location.protocol}//` +
        `${window.location.host}/` +
        `${page}?` +
        `redirect=${settingsPanel[page][selected].setting}`
    );

  React.useEffect(() => {
    const current = ref.current;

    const listener: (event: MouseEvent | TouchEvent) => any = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      let isLeft = (event.which || (event as MouseEvent).button) === 1;
      if (isLeft) {
        setShow(false);
        return;
      }

      const target = event.target as HTMLElement;

      let text = "";
      if (target.className === styles.header_list_item) {
        text = target.querySelector("p")?.innerText || "";
      } else if (target.className === styles.header_list_item_text) {
        text = target.innerText;
      } else if (target.className === styles.header_list_item_image) {
        text = target.getAttribute("alt")?.replaceAll(" Icon", "") || "";
      }

      text = text || settingsPanel[page][selected].text;

      const setting =
        settingsPanel[page].findIndex((t) => t.text === text) || selected;

      setContextMenu(setting);

      setShow(false);
    };

    current?.addEventListener("mousedown", listener);
    current?.addEventListener("touchstart", listener);

    return () => {
      current?.removeEventListener("mousedown", listener);
      current?.removeEventListener("touchstart", listener);
    };
  }, [ref, show, page, selected]);

  const headTitle = `MS Settings ${title} — Provide accurate help`;

  return (
    <>
      {show && (
        <div
          style={{
            top: anchor.y,
            left: anchor.x,
          }}
          className={styles.context_menu}
          onClick={() => {
            copySetting(
              `${window.location.protocol}//` +
                `${window.location.host}/` +
                `${page}?` +
                `redirect=${settingsPanel[page][contextMenu].setting}`
            );
            setShow(false);
          }}
        >
          <p>Copy url for {settingsPanel[page][contextMenu].text}</p>
        </div>
      )}
      <div
        ref={ref}
        onContextMenu={(event) => {
          event.preventDefault();
          // console.log(`Right click`);
          setAnchorPoint({ x: event.pageX, y: event.pageY });
          setShow(true);
        }}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Head>
          <title>{headTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={`https://ms-setting.com/${page}`} />
        </Head>
        {content && (
          <div className={styleshome.modal}>Copied url for {content}</div>
        )}
        <div className={styles.main_container}>
          <header className={styles.header}>
            <SettingPanel icons={icons} title={title} select={setSelected} />
          </header>
          <main className={styles.main}>
            <SettingImage
              page={page}
              copyCurrent={copyCurrent}
              image={settingsPanel[page][selected].image}
            />
          </main>
          <footer className={styles.footer}>
            <SettingMore />
          </footer>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = [
    { params: { settings: "accounts" } },
    { params: { settings: "ease" } },
    { params: { settings: "apps" } },
    { params: { settings: "personalization" } },
    { params: { settings: "gaming" } },
    { params: { settings: "time" } },
    { params: { settings: "network" } },
    { params: { settings: "devices" } },
    { params: { settings: "phone" } },
    { params: { settings: "privacy" } },
    { params: { settings: "search" } },
    { params: { settings: "system" } },
    { params: { settings: "update" } },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      page: context.params?.settings,
    },
  };
};

export default Template;
