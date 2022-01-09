import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Settings.module.css";
import styleshome from "../styles/Home.module.css";

import SettingMore from "../components/SettingMore";
import SettingPanel from "../components/SettingPanel";

// Account
import AccountConnexionIcon from "../public/icons/categories/acc_connexions.svg";
import AccountEmailIcon from "../public/icons/categories/acc_email.svg";
import AccountFamilyIcon from "../public/icons/categories/acc_family.svg";
import AccountInfoIcon from "../public/icons/categories/acc_info.svg";
import AccountSchoolIcon from "../public/icons/categories/acc_school.svg";
import AccountSyncIcon from "../public/icons/categories/acc_sync.svg";
// Access
import AccessAudioIcon from "../public/icons/categories/access_audio.svg";
import AccessColorsIcon from "../public/icons/categories/access_colors.svg";
import AccessComputerIcon from "../public/icons/categories/access_computer.svg";
import AccessContrastIcon from "../public/icons/categories/access_contrast.svg";
import AccessCursorIcon from "../public/icons/categories/access_cursor.svg";
import AccessKeyboardIcon from "../public/icons/categories/access_keyboard.svg";
import AccessMouseIcon from "../public/icons/categories/access_mouse.svg";
import AccessNarratorIcon from "../public/icons/categories/access_narrator.svg";
import AccessSearchIcon from "../public/icons/categories/access_search.svg";
import AccessSubtitlesIcon from "../public/icons/categories/access_subtitles.svg";
import AccessTextCursorIcon from "../public/icons/categories/access_text_cursor.svg";
import AccessVisualControlsIcon from "../public/icons/categories/access_visual_control.svg";
import AccessVoiceIcon from "../public/icons/categories/access_voice.svg";
// App
import AppDefaultIcon from "../public/icons/categories/app_default.svg";
import AppFunctionnalitiesIcon from "../public/icons/categories/app_functionnalities.svg";
import AppMapIcon from "../public/icons/categories/app_map.svg";
import AppStartupIcon from "../public/icons/categories/app_startup.svg";
import AppvideoPlayerIcon from "../public/icons/categories/app_video_player.svg";
import AppWebIcon from "../public/icons/categories/app_web.svg";
// Custom
import CustomBackgroundIcon from "../public/icons/categories/cust_background.svg";
import CustomColorsIcon from "../public/icons/categories/cust_colors.svg";
import CustomFontIcon from "../public/icons/categories/cust_font.svg";
import CustomLockscreenIcon from "../public/icons/categories/cust_lockscreen.svg";
import CustomStartupIcon from "../public/icons/categories/cust_startup.svg";
import CustomTaskbarIcon from "../public/icons/categories/cust_taskbar.svg";
import CustomThemesIcon from "../public/icons/categories/cust_themes.svg";
// Games
import GamesBarIcon from "../public/icons/categories/games_bar.svg";
import GamesCaptureIcon from "../public/icons/categories/games_capture.svg";
import GamesModeIcon from "../public/icons/categories/games_mode.svg";
import GamesXboxIcon from "../public/icons/categories/games_xbox.svg";
// Time
import TimeDateIcon from "../public/icons/categories/hour_date.svg";
import TimeLanguageIcon from "../public/icons/categories/hour_lang.svg";
import TimeRegionIcon from "../public/icons/categories/hour_region.svg";
import TimeVoiceIcon from "../public/icons/categories/hour_voice.svg";
// Network
import NetworkAccessIcon from "../public/icons/categories/net_access.svg";
import NetworkAccessPointIcon from "../public/icons/categories/net_access_point.svg";
import NetworkAirplaneIcon from "../public/icons/categories/net_airplane.svg";
import NetworkEthernetIcon from "../public/icons/categories/net_ethernet.svg";
import NetworkProxyIcon from "../public/icons/categories/net_proxy.svg";
import NetworkStateIcon from "../public/icons/categories/net_state.svg";
import NetworkVpnIcon from "../public/icons/categories/net_vpn.svg";
import NetworkWifiIcon from "../public/icons/categories/net_wifi.svg";
// Periph
import PeriphDevicesIcon from "../public/icons/categories/periph_devices.svg";
import PeriphPrintersIcon from "../public/icons/categories/periph_printers.svg";
import PeriphMouseIcon from "../public/icons/categories/periph_mouse.svg";
import PeriphTypingIcon from "../public/icons/categories/periph_keyboard.svg";
import PeriphPenIcon from "../public/icons/categories/periph_stylet.svg";
import PeriphAutoPlayIcon from "../public/icons/categories/periph_automated.svg";
import PeriphUsbIcon from "../public/icons/categories/periph_usb.svg";
// Privacy
import PrivacyAutoDownloadIcon from "../public/icons/categories/priv_automatic_download.svg";
import PrivacyBackgroundAppIcon from "../public/icons/categories/priv_background_app.svg";
import PrivacyCalendarIcon from "../public/icons/categories/priv_calendar.svg";
import PrivacyCallIcon from "../public/icons/categories/priv_call.svg";
import PrivacyCamIcon from "../public/icons/categories/priv_cam.svg";
import PrivacyContactIcon from "../public/icons/categories/priv_contact.svg";
import PrivacyDiagnoIcon from "../public/icons/categories/priv_diagno.svg";
import PrivacyIcon from "../public/icons/categories/priv_diagno_app.svg";
import PrivacyDocumentsIcon from "../public/icons/categories/priv_documents.svg";
import PrivacyFilesystemIcon from "../public/icons/categories/priv_filesystem.svg";
import PrivacyGeneralIcon from "../public/icons/categories/priv_general.svg";
import PrivacyHistoIcon from "../public/icons/categories/priv_histo.svg";
import PrivacyHisto_callIcon from "../public/icons/categories/priv_histo_call.svg";
import PrivacyInfoIcon from "../public/icons/categories/priv_info.svg";
import PrivacyLocationIcon from "../public/icons/categories/priv_location.svg";
import PrivacyMailIcon from "../public/icons/categories/priv_mail.svg";
import PrivacyManuscritIcon from "../public/icons/categories/priv_manuscrit.svg";
import PrivacyMessageIcon from "../public/icons/categories/priv_message.svg";
import PrivacyMicIcon from "../public/icons/categories/priv_mic.svg";
import PrivacyNotifIcon from "../public/icons/categories/priv_notif.svg";
import PrivacyOther_devicesIcon from "../public/icons/categories/priv_other_devices.svg";
import PrivacyPicturesIcon from "../public/icons/categories/priv_pictures.svg";
import PrivacyRadiosIcon from "../public/icons/categories/priv_radios.svg";
import PrivacyTasksIcon from "../public/icons/categories/priv_tasks.svg";
import PrivacyVideosIcon from "../public/icons/categories/priv_videos.svg";
import PrivacyVoiceIcon from "../public/icons/categories/priv_voice.svg";
import PrivacyVoice_activationIcon from "../public/icons/categories/priv_voice_activation.svg";
// Search
import SearchAuthIcon from "../public/icons/categories/search_auth.svg";
import SearchSearchIcon from "../public/icons/categories/search_search.svg";
// System
import SystemAlimIcon from "../public/icons/categories/sys_alim.svg";
import SystemAproposIcon from "../public/icons/categories/sys_apropos.svg";
import SystemBatteryIcon from "../public/icons/categories/sys_battery.svg";
import SystemConcentrationIcon from "../public/icons/categories/sys_concentration.svg";
import SystemCopyIcon from "../public/icons/categories/sys_copy.svg";
import SystemDisplayIcon from "../public/icons/categories/sys_display.svg";
import SystemDistantIcon from "../public/icons/categories/sys_distant.svg";
import SystemMultitaskIcon from "../public/icons/categories/sys_multitask.svg";
import SystemNotifIcon from "../public/icons/categories/sys_notif.svg";
import SystemProjectionIcon from "../public/icons/categories/sys_projection.svg";
import SystemSharedIcon from "../public/icons/categories/sys_shared.svg";
import SystemSoundIcon from "../public/icons/categories/sys_sound.svg";
import SystemStorageIcon from "../public/icons/categories/sys_storage.svg";
import SystemTabletIcon from "../public/icons/categories/sys_tablet.svg";
// Update
import UpdateActivateIcon from "../public/icons/categories/updates_activate.svg";
import UpdateDevIcon from "../public/icons/categories/updates_dev.svg";
import UpdateinsiderIcon from "../public/icons/categories/updates_insider.svg";
import UpdateLocateIcon from "../public/icons/categories/updates_locate.svg";
import UpdateOptiIcon from "../public/icons/categories/updates_opti.svg";
import UpdateRecoverIcon from "../public/icons/categories/updates_recover.svg";
import UpdateSaveIcon from "../public/icons/categories/updates_save.svg";
import UpdateSecurityIcon from "../public/icons/categories/updates_security.svg";
import UpdateSolveIcon from "../public/icons/categories/updates_solve.svg";
import UpdateWindowsIcon from "../public/icons/categories/updates_windows.svg";
import SettingImage from "../components/SettingImage";

// Image for setting content
// Account
import AccountsAccessWorkOrSchool from "../public/settings/accounts/accessworkorschool.png";
import AccountsEmailAccounts from "../public/settings/accounts/emailaccounts.png";
import AccountsFamilyOtherUsers from "../public/settings/accounts/familyotherusers.png";
import AccountsSignInOptions from "../public/settings/accounts/signinoptions.png";
import AccountsSyncYourSettings from "../public/settings/accounts/syncyoursettings.png";
import AccountsYourInfo from "../public/settings/accounts/yourinfo.png";
// App
import AppsAppsFeatures from "../public/settings/apps/appsfeatures.png";
import AppsAppsForWebsites from "../public/settings/apps/appsforwebsites.png";
import AppsDefaultApps from "../public/settings/apps/defaultapps.png";
import AppsOfflineMaps from "../public/settings/apps/offlinemaps.png";
import AppsStartup from "../public/settings/apps/startup.png";
import AppsVideoPlayback from "../public/settings/apps/videoplayback.png";
// Periph
import DevicesAutoplay from "../public/settings/devices/autoplay.png";
import DevicesBluetoothOtherDevices from "../public/settings/devices/bluetoothotherdevices.png";
import DevicesMouse from "../public/settings/devices/mouse.png";
import DevicesPenWindowsInk from "../public/settings/devices/penwindowsink.png";
import DevicesPrintersScanners from "../public/settings/devices/printersscanners.png";
import DevicesTyping from "../public/settings/devices/typing.png";
import DevicesUsb from "../public/settings/devices/usb.png";
// Access
import EaseAudio from "../public/settings/ease/audio.png";
import EaseClosedCaptions from "../public/settings/ease/closedcaptions.png";
import EaseColorFilters from "../public/settings/ease/colorfilters.png";
import EaseDisplay from "../public/settings/ease/display.png";
import EaseEyeControl from "../public/settings/ease/eyecontrol.png";
import EaseHighContrast from "../public/settings/ease/highcontrast.png";
import EaseKeyboard from "../public/settings/ease/keyboard.png";
import EaseMagnifier from "../public/settings/ease/magnifier.png";
import EaseMouse from "../public/settings/ease/mouse.png";
import EaseMousePointer from "../public/settings/ease/mousepointer.png";
import EaseNarrator from "../public/settings/ease/narrator.png";
import EaseSpeech from "../public/settings/ease/speech.png";
import EaseTextCursor from "../public/settings/ease/textcursor.png";
// Games
import GamingCaptures from "../public/settings/gaming/captures.png";
import GamingGamemode from "../public/settings/gaming/gamemode.png";
import GamingXboxGameBar from "../public/settings/gaming/xboxgamebar.png";
import GamingXboxNetworking from "../public/settings/gaming/xboxnetworking.png";
// Network
import NetworkAirplaneMode from "../public/settings/network/airplanemode.png";
import NetworkDialup from "../public/settings/network/dialup.png";
import NetworkEthernet from "../public/settings/network/ethernet.png";
import NetworkMobileHotspot from "../public/settings/network/mobilehotspot.png";
import NetworkProxy from "../public/settings/network/proxy.png";
import NetworkStatus from "../public/settings/network/status.png";
import NetworkVpn from "../public/settings/network/vpn.png";
import NetworkWifi from "../public/settings/network/wifi.png";
// Custom
import PersonalizationBackground from "../public/settings/personalization/background.png";
import PersonalizationColors from "../public/settings/personalization/colors.png";
import PersonalizationFonts from "../public/settings/personalization/fonts.png";
import PersonalizationLockscreen from "../public/settings/personalization/lockscreen.png";
import PersonalizationStart from "../public/settings/personalization/start.png";
import PersonalizationTaskbar from "../public/settings/personalization/taskbar.png";
import PersonalizationThemes from "../public/settings/personalization/themes.png";
// Privacy
import PrivacyAccountInfo from "../public/settings/privacy/accountinfo.png";
import PrivacyActivityHistory from "../public/settings/privacy/activityhistory.png";
import PrivacyAppDiagnostics from "../public/settings/privacy/appdiagnostics.png";
import PrivacyAutomaticFileDownloads from "../public/settings/privacy/automaticfiledownloads.png";
import PrivacyBackgroundApps from "../public/settings/privacy/backgroundapps.png";
import PrivacyCalendar from "../public/settings/privacy/calendar.png";
import PrivacyCallHistory from "../public/settings/privacy/callhistory.png";
import PrivacyCamera from "../public/settings/privacy/camera.png";
import PrivacyContacts from "../public/settings/privacy/contacts.png";
import PrivacyDiagnosticsFeedback from "../public/settings/privacy/diagnosticsfeedback.png";
import PrivacyDocuments from "../public/settings/privacy/documents.png";
import PrivacyEmail from "../public/settings/privacy/email.png";
import PrivacyFilesystem from "../public/settings/privacy/filesystem.png";
import PrivacyGeneral from "../public/settings/privacy/general.png";
import PrivacyInkingTypingPersonalization from "../public/settings/privacy/inkingtypingpersonalization.png";
import PrivacyLocation from "../public/settings/privacy/location.png";
import PrivacyMessaging from "../public/settings/privacy/messaging.png";
import PrivacyMicrophone from "../public/settings/privacy/microphone.png";
import PrivacyNotifications from "../public/settings/privacy/notifications.png";
import PrivacyOtherDevices from "../public/settings/privacy/otherdevices.png";
import PrivacyPhoneCalls from "../public/settings/privacy/phonecalls.png";
import PrivacyPictures from "../public/settings/privacy/pictures.png";
import PrivacyRadios from "../public/settings/privacy/radios.png";
import PrivacySpeech from "../public/settings/privacy/speech.png";
import PrivacyTasks from "../public/settings/privacy/tasks.png";
import PrivacyVideos from "../public/settings/privacy/videos.png";
import PrivacyVoiceActivation from "../public/settings/privacy/voiceactivation.png";
// Search
import SearchPermissionsHistory from "../public/settings/search/permissionshistory.png";
import SearchSearchingWindows from "../public/settings/search/searchingwindows.png";
// System
import SystemAbout from "../public/settings/system/about.png";
import SystemClipboard from "../public/settings/system/clipboard.png";
import SystemDisplay from "../public/settings/system/display.png";
import SystemFocusAssist from "../public/settings/system/focusassist.png";
import SystemMultitasking from "../public/settings/system/multitasking.png";
import SystemNotificationsActions from "../public/settings/system/notificationsactions.png";
import SystemPowerSleep from "../public/settings/system/powersleep.png";
import SystemProjectingToThisPc from "../public/settings/system/projectingtothispc.png";
import SystemRemoteDesktop from "../public/settings/system/remotedesktop.png";
import SystemSharedEexperiences from "../public/settings/system/sharedexperiences.png";
import SystemSound from "../public/settings/system/sound.png";
import SystemStorage from "../public/settings/system/storage.png";
import SystemTablet from "../public/settings/system/tablet.png";
// Time
import TimeDatetime from "../public/settings/time/datetime.png";
import TimeLanguage from "../public/settings/time/language.png";
import TimeRegion from "../public/settings/time/region.png";
import TimeSpeech from "../public/settings/time/speech.png";
// Update
import UpdateActivation from "../public/settings/update/activation.png";
import UpdateBackup from "../public/settings/update/backup.png";
import UpdateDeliveryOptimization from "../public/settings/update/deliveryoptimization.png";
import UpdateFindMydevice from "../public/settings/update/findmydevice.png";
import UpdateForDevelopers from "../public/settings/update/fordevelopers.png";
import UpdateRecovery from "../public/settings/update/recovery.png";
import UpdateTroubleshoot from "../public/settings/update/troubleshoot.png";
import UpdateWindowsInsiderProgram from "../public/settings/update/windowsinsiderprogram.png";
import UpdateWindowsSecurity from "../public/settings/update/windowssecurity.png";
import UpdateWindowsUpdate from "../public/settings/update/windowsupdate.png";

export interface Setting {
  icon: any;
  text: string;
  setting: string;
  keywords: string[];
  image: StaticImageData;
}

interface SettingMap {
  [key: string]: Setting[];
}

const createSettings = <M extends SettingMap>(o: M) => o;

export const settingsPanel = createSettings({
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
});

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
};

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
          <title>MS Settings {title} — Provide accurate help</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
