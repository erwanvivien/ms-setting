import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Settings.module.css";
import styleshome from "../styles/Home.module.css";

import SettingMore from "../components/SettingMore";
import SettingBuilder from "../components/SettingBuilder";
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

export interface Setting {
  icon: any;
  text: string;
  setting: string;
  keywords: string[];
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
    },
    {
      icon: AccountEmailIcon,
      text: "Email & accounts",
      setting: "ms-settings:emailandaccounts",
      keywords: ["account", "email", "mail"],
    },
    {
      icon: AccountConnexionIcon,
      text: "Sign-in options",
      setting: "ms-settings:signinoptions",
      keywords: ["account", "sign", "sign-in", "log", "log-in"],
    },
    {
      icon: AccountSchoolIcon,
      text: "Access work or school",
      setting: "ms-settings:workplace",
      keywords: ["account", "workplace", "school"],
    },
    {
      icon: AccountFamilyIcon,
      text: "Family & other users",
      setting: "ms-settings:otherusers",
      keywords: ["account", "family", "user"],
    },
    {
      icon: AccountSyncIcon,
      text: "Sync you settings",
      setting: "ms-settings:sync",
      keywords: ["account", "sync", "setting"],
    },
  ],
  // Ok
  ease: [
    {
      icon: AccessComputerIcon,
      text: "Display",
      setting: "ms-settings:easeofaccess-display",
      keywords: ["ease", "display", "ease"],
    },
    {
      icon: AccessCursorIcon,
      text: "Mouse pointer",
      setting: "ms-settings:easeofaccess-cursorandpointersize",
      keywords: ["ease", "cursor", "pointer", "mouse"],
    },
    {
      icon: AccessTextCursorIcon,
      text: "Text Cursor",
      setting: "ms-settings:easeofaccess-cursor",
      keywords: ["ease", "cursor", "text"],
    },
    {
      icon: AccessSearchIcon,
      text: "Magnifier",
      setting: "ms-settings:easeofaccess-magnifier",
      keywords: ["ease", "magnifier", "mag"],
    },
    {
      icon: AccessColorsIcon,
      text: "Color Filters",
      setting: "ms-settings:easeofaccess-colorfilter",
      keywords: ["ease", "color", "filter"],
    },
    {
      icon: AccessContrastIcon,
      setting: "ms-settings:easeofaccess-highcontrast",
      text: "High Contrast",
      keywords: ["ease", "contrast"],
    },
    {
      icon: AccessNarratorIcon,
      setting: "ms-settings:easeofaccess-narrator",
      text: "Narrator",
      keywords: ["ease", "narrator"],
    },
    { icon: undefined, setting: "", text: "ease-spacer1", keywords: [] },
    {
      icon: AccessAudioIcon,
      setting: "ms-settings:easeofaccess-audio",
      text: "Audio",
      keywords: ["ease", "audio"],
    },
    {
      icon: AccessSubtitlesIcon,
      setting: "ms-settings:easeofaccess-closedcaptioning",
      text: "Closed captions",
      keywords: ["ease", "caption"],
    },
    { icon: undefined, setting: "", text: "ease-spacer2", keywords: [] },
    {
      icon: AccessVoiceIcon,
      setting: "ms-settings:easeofaccess-speechrecognition",
      text: "Speech",
      keywords: ["ease", "speech"],
    },
    {
      icon: AccessKeyboardIcon,
      setting: "ms-settings:easeofaccess-keyboard",
      text: "Keyboard",
      keywords: ["ease", "keyboard"],
    },
    {
      icon: AccessMouseIcon,
      setting: "ms-settings:easeofaccess-mouse",
      text: "Mouse",
      keywords: ["ease", "mouse"],
    },
    {
      icon: AccessVisualControlsIcon,
      setting: "ms-settings:easeofaccess-eyecontrol",
      text: "Eye Control",
      keywords: ["ease", "eye", "control"],
    },
  ],
  // Ok
  apps: [
    {
      icon: AppFunctionnalitiesIcon,
      setting: "ms-settings:appsfeatures",
      text: "Apps & features",
      keywords: ["app", "application", "feature"],
    },
    {
      icon: AppDefaultIcon,
      setting: "ms-settings:defaultapps",
      text: "Default apps",
      keywords: ["app", "application", "default"],
    },
    {
      icon: AppMapIcon,
      setting: "ms-settings:maps",
      text: "Offline maps",
      keywords: ["app", "application", "map"],
    },
    {
      icon: AppWebIcon,
      setting: "ms-settings:appsforwebsites",
      text: "Apps for websites",
      keywords: ["app", "application", "site", "web"],
    },
    {
      icon: AppvideoPlayerIcon,
      setting: "ms-settings:videoplayback",
      text: "Video playback",
      keywords: ["app", "application", "video", "playback"],
    },
    {
      icon: AppStartupIcon,
      setting: "ms-settings:startupapps",
      text: "Startup",
      keywords: ["app", "application", "startup"],
    },
  ],
  // Ok
  personalization: [
    {
      icon: CustomBackgroundIcon,
      setting: "ms-settings:personalization-background",
      text: "Background",
      keywords: ["personalization", "background"],
    },
    {
      icon: CustomColorsIcon,
      setting: "ms-settings:personalization-colors",
      text: "Colors",
      keywords: ["personalization", "color"],
    },
    {
      icon: CustomLockscreenIcon,
      setting: "ms-settings:lockscreen",
      text: "Lock screen",
      keywords: ["personalization", "lock", "lockscreen"],
    },
    {
      icon: CustomThemesIcon,
      setting: "ms-settings:themes",
      text: "Themes",
      keywords: ["personalization", "theme"],
    },
    {
      icon: CustomFontIcon,
      setting: "ms-settings:fonts",
      text: "Fonts",
      keywords: ["personalization", "font"],
    },
    {
      icon: CustomStartupIcon,
      setting: "ms-settings:personalization-start",
      text: "Start",
      keywords: ["personalization", "start"],
    },
    {
      icon: CustomTaskbarIcon,
      setting: "ms-settings:taskbar",
      text: "Taskbar",
      keywords: ["personalization", "taskbar"],
    },
  ],
  // Ok
  phone: [],
  // Ok
  gaming: [
    {
      icon: GamesBarIcon,
      setting: "ms-settings:gaming-gamebar",
      text: "Game bar",
      keywords: ["game", "bar"],
    },
    {
      icon: GamesCaptureIcon,
      setting: "ms-settings:gaming-gamedvr",
      text: "Captures",
      keywords: ["game", "capture"],
    },
    {
      icon: GamesModeIcon,
      setting: "ms-settings:gaming-gamemode",
      text: "Game Mode",
      keywords: ["game", "mode"],
    },
    {
      icon: GamesXboxIcon,
      setting: "ms-settings:gaming-xboxnetworking",
      text: "Xbox Networking",
      keywords: ["game", "xbox", "network"],
    },
  ],
  // Ok
  time: [
    {
      icon: TimeDateIcon,
      setting: "ms-settings:dateandtime",
      text: "Date & time",
      keywords: ["time", "date"],
    },
    {
      icon: TimeRegionIcon,
      setting: "ms-settings:regionformatting",
      text: "Region",
      keywords: ["time", "region", "formatting"],
    },
    {
      icon: TimeLanguageIcon,
      setting: "ms-settings:regionlanguage",
      text: "Language",
      keywords: ["time", "region", "language"],
    },
    {
      icon: TimeVoiceIcon,
      setting: "ms-settings:speech",
      text: "Speech",
      keywords: ["time", "speech"],
    },
  ],
  // Ok
  network: [
    {
      icon: NetworkStateIcon,
      setting: "ms-settings:network-status",
      text: "Status",
      keywords: ["network", "status"],
    },
    {
      icon: NetworkWifiIcon,
      setting: "ms-settings:network-wifi",
      text: "Wi-Fi",
      keywords: ["network", "wifi", "wi-fi"],
    },
    {
      icon: NetworkEthernetIcon,
      setting: "ms-settings:network-ethernet",
      text: "Ethernet",
      keywords: ["network", "ethernet"],
    },
    {
      icon: NetworkAccessIcon,
      setting: "ms-settings:network-dialup",
      text: "Dial-up",
      keywords: ["network", "dial", "dial-up"],
    },
    {
      icon: NetworkVpnIcon,
      setting: "ms-settings:network-vpn",
      text: "VPN",
      keywords: ["network", "vpn"],
    },
    {
      icon: NetworkAirplaneIcon,
      setting: "ms-settings:network-airplanemode",
      text: "Airplane mode",
      keywords: ["network", "airplane", "mode"],
    },
    {
      icon: NetworkAccessPointIcon,
      setting: "ms-settings:network-mobilehotspot",
      text: "Mobile hotspot",
      keywords: ["network", "mobile", "hotstop"],
    },
    {
      icon: NetworkProxyIcon,
      setting: "ms-settings:network-proxy",
      text: "Proxy",
      keywords: ["network", "proxy"],
    },
  ],
  // Ok
  devices: [
    {
      icon: PeriphDevicesIcon,
      text: "Bluetooth & other devices",
      setting: "ms-settings:connecteddevices",
      keywords: ["device", "bluetooth", "other"],
    },
    {
      icon: PeriphPrintersIcon,
      text: "Printers & scanners",
      setting: "ms-settings:printers",
      keywords: ["device", "printer", "scanner"],
    },
    {
      icon: PeriphMouseIcon,
      text: "Mouse",
      setting: "ms-settings:mousetouchpad",
      keywords: ["device", "mouse", "touchpad"],
    },
    {
      icon: PeriphTypingIcon,
      text: "Typing",
      setting: "ms-settings:typing",
      keywords: ["device", "typing"],
    },
    {
      icon: PeriphPenIcon,
      text: "Pen & Windows Ink",
      setting: "ms-settings:pen",
      keywords: ["device", "pen", "ink"],
    },
    {
      icon: PeriphAutoPlayIcon,
      text: "AutoPlay",
      setting: "ms-settings:autoplay",
      keywords: ["device", "autoplay"],
    },
    {
      icon: PeriphUsbIcon,
      text: "USB",
      setting: "ms-settings:usb",
      keywords: ["device", "usb"],
    },
  ],
  // Ok
  privacy: [
    {
      icon: PrivacyGeneralIcon,
      setting: "ms-settings:privacy",
      text: "General",
      keywords: ["privacy"],
    },
    {
      icon: PrivacyTasksIcon,
      setting: "ms-settings:privacy-speechtyping",
      text: "Inking & typing...",
      keywords: ["privacy", "ink", "typing"],
    },
    {
      icon: PrivacyDiagnoIcon,
      setting: "ms-settings:privacy-feedback",
      text: "Diagnostics & feedback",
      keywords: ["privacy", "diagnostic", "feedback"],
    },
    {
      icon: PrivacyHistoIcon,
      setting: "ms-settings:privacy-activityhistory",
      text: "Activity history",
      keywords: ["privacy", "activity", "history"],
    },

    { icon: undefined, setting: "", text: "privacy-spacer2", keywords: [] },

    {
      icon: PrivacyVoiceIcon,
      setting: "ms-settings:privacy-speech",
      text: "Speech",
      keywords: ["privacy", "speech"],
    },

    { icon: undefined, setting: "", text: "privacy-spacer3", keywords: [] },

    {
      icon: PrivacyLocationIcon,
      setting: "ms-settings:privacy-location",
      text: "Location",
      keywords: ["privacy", "location"],
    },
    {
      icon: PrivacyCamIcon,
      setting: "ms-settings:privacy-webcam",
      text: "Camera",
      keywords: ["privacy", "webcam", "camera"],
    },
    {
      icon: PrivacyMicIcon,
      setting: "ms-settings:privacy-microphone",
      text: "Microphone",
      keywords: ["privacy", "microphone"],
    },
    {
      icon: PrivacyVoice_activationIcon,
      setting: "ms-settings:privacy-voiceactivation",
      text: "Voice activation",
      keywords: ["privacy", "voice", "activation"],
    },
    {
      icon: PrivacyNotifIcon,
      setting: "ms-settings:privacy-notifications",
      text: "Notifications",
      keywords: ["privacy", "notification"],
    },
    {
      icon: PrivacyInfoIcon,
      setting: "ms-settings:privacy-accountinfo",
      text: "Account info",
      keywords: ["privacy", "account", "info"],
    },
    {
      icon: PrivacyContactIcon,
      setting: "ms-settings:privacy-contacts",
      text: "Contacts",
      keywords: ["privacy", "contact"],
    },
    {
      icon: PrivacyCalendarIcon,
      setting: "ms-settings:privacy-calendar",
      text: "Calendar",
      keywords: ["privacy", "calendar"],
    },
    {
      icon: PrivacyCallIcon,
      setting: "ms-settings:privacy-phonecalls",
      text: "Phone calls",
      keywords: ["privacy", "phone", "call"],
    },
    {
      icon: PrivacyHisto_callIcon,
      setting: "ms-settings:privacy-callhistory",
      text: "Call history",
      keywords: ["privacy", "history", "call"],
    },
    {
      icon: PrivacyMailIcon,
      setting: "ms-settings:privacy-email",
      text: "Email",
      keywords: ["privacy", "email", "mail"],
    },
    {
      icon: PrivacyManuscritIcon,
      setting: "ms-settings:privacy-tasks",
      text: "Tasks",
      keywords: ["privacy", "task"],
    },
    {
      icon: PrivacyMessageIcon,
      setting: "ms-settings:privacy-messaging",
      text: "Messaging",
      keywords: ["privacy", "messaging", "message"],
    },
    {
      icon: PrivacyRadiosIcon,
      setting: "ms-settings:privacy-radios",
      text: "Radios",
      keywords: ["privacy", "radio"],
    },
    {
      icon: PrivacyOther_devicesIcon,
      setting: "ms-settings:privacy-customdevices",
      text: "Other devices",
      keywords: ["privacy", "custom", "device"],
    },
    {
      icon: PrivacyBackgroundAppIcon,
      setting: "ms-settings:privacy-backgroundapps",
      text: "Background apps",
      keywords: ["privacy", "background", "app"],
    },
    {
      icon: PrivacyIcon,
      setting: "ms-settings:privacy-appdiagnostics",
      text: "App diagnostics",
      keywords: ["privacy", "diagnostic", "app"],
    },
    {
      icon: PrivacyAutoDownloadIcon,
      setting: "ms-settings:privacy-automaticfiledownloads",
      text: "Automatic file downloads",
      keywords: ["privacy", "file", "download", "automatic"],
    },
    {
      icon: PrivacyDocumentsIcon,
      setting: "ms-settings:privacy-documents",
      text: "Documents",
      keywords: ["privacy", "document"],
    },
    {
      icon: PrivacyPicturesIcon,
      setting: "ms-settings:privacy-pictures",
      text: "Pictures",
      keywords: ["privacy", "picture"],
    },
    {
      icon: PrivacyVideosIcon,
      setting: "ms-settings:privacy-videos",
      text: "Videos",
      keywords: ["privacy", "document"],
    },
    {
      icon: PrivacyFilesystemIcon,
      setting: "ms-settings:privacy-broadfilesystemaccess",
      text: "File system",
      keywords: ["privacy", "file", "system"],
    },
  ],
  // Ok
  search: [
    {
      icon: SearchAuthIcon,
      setting: "ms-settings:search-permissions",
      text: "Permissions & history",
      keywords: ["search", "permission", "history"],
    },
    {
      icon: SearchSearchIcon,
      setting: "ms-settings:cortana-windowssearch",
      text: "Searching Windows",
      keywords: ["search", "cortana", "window"],
    },
  ],
  // Ok
  system: [
    {
      icon: SystemDisplayIcon,
      text: "Display",
      setting: "ms-settings:display",
      keywords: ["system", "display"],
    },
    {
      icon: SystemSoundIcon,
      text: "Sound",
      setting: "ms-settings:sound",
      keywords: ["system", "sound"],
    },
    {
      icon: SystemNotifIcon,
      text: "Notification & actions",
      setting: "ms-settings:notifications",
      keywords: ["system", "notification", "action"],
    },
    {
      icon: SystemConcentrationIcon,
      text: "Focus assist",
      setting: "ms-settings:quiethours",
      keywords: ["system", "focus", "assist", "quiet"],
    },
    {
      icon: SystemAlimIcon,
      text: "Power & sleep",
      setting: "ms-settings:powersleep",
      keywords: ["system", "power", "sleep"],
    },
    {
      icon: SystemBatteryIcon,
      text: "Battery Saver",
      setting: "ms-settings:batterysaver",
      keywords: ["system", "battery", "saver"],
    },
    {
      icon: SystemStorageIcon,
      text: "Storage",
      setting: "ms-settings:storagesense",
      keywords: ["system", "storage"],
    },
    {
      icon: SystemTabletIcon,
      text: "Tablet",
      setting: "ms-settings:tabletmode",
      keywords: ["system", "tablet"],
    },
    {
      icon: SystemMultitaskIcon,
      text: "Multitasking",
      setting: "ms-settings:multitasking",
      keywords: ["system", "multitasking"],
    },
    {
      icon: SystemProjectionIcon,
      text: "Projecting to this PC",
      setting: "ms-settings:project",
      keywords: ["system", "project"],
    },
    {
      icon: SystemSharedIcon,
      text: "Shared experiences",
      setting: "ms-settings:crossdevice",
      keywords: ["system", "shared", "experience", "crossdevice"],
    },
    {
      icon: SystemCopyIcon,
      text: "Clipboard",
      setting: "ms-settings:clipboard",
      keywords: ["system", "clipboard"],
    },
    {
      icon: SystemDistantIcon,
      text: "Remote Desktop",
      setting: "ms-settings:remotedesktop",
      keywords: ["system", "remote", "desktop"],
    },
    {
      icon: SystemAproposIcon,
      text: "About",
      setting: "ms-settings:about",
      keywords: ["system", "about"],
    },
  ],
  // Ok
  update: [
    {
      icon: UpdateWindowsIcon,
      setting: "ms-settings:windowsupdate",
      text: "Windows Update",
      keywords: ["update", "window", "update"],
    },
    {
      icon: UpdateOptiIcon,
      setting: "ms-settings:delivery-optimization",
      text: "Delivery Optimization",
      keywords: ["update", "delivery", "optimization"],
    },
    {
      icon: UpdateSecurityIcon,
      setting: "ms-settings:windowsdefender",
      text: "Windows Security",
      keywords: ["update", "window", "defender", "security"],
    },
    {
      icon: UpdateSaveIcon,
      setting: "ms-settings:backup",
      text: "Backup",
      keywords: ["update", "backup"],
    },
    {
      icon: UpdateSolveIcon,
      setting: "ms-settings:troubleshoot",
      text: "Troubleshoot",
      keywords: ["update", "troubleshoot", "trouble"],
    },
    {
      icon: UpdateRecoverIcon,
      setting: "ms-settings:recovery",
      text: "Recovery",
      keywords: ["update", "recovery"],
    },
    {
      icon: UpdateActivateIcon,
      setting: "ms-settings:activation",
      text: "Activation",
      keywords: ["update", "activation"],
    },
    {
      icon: UpdateLocateIcon,
      setting: "ms-settings:findmydevice",
      text: "Find My Device",
      keywords: ["update", "device", "find"],
    },
    {
      icon: UpdateDevIcon,
      setting: "ms-settings:developers",
      text: "For developers",
      keywords: ["update", "dev", "developer"],
    },
    {
      icon: UpdateinsiderIcon,
      setting: "ms-settings:windowsinsider",
      text: "Windows Insider Program",
      keywords: ["update", "window", "insider"],
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

  React.useEffect(() => {
    setIcons(settingsPanel[page]);
    setTitle(titleMap[page]);
  }, [page]);

  const [myTimeout, setMyTimeout] = React.useState<NodeJS.Timeout>(null as any);
  const [content, setContent] = React.useState("");

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

  return (
    <>
      <Head>
        <title>MS Settings {title} — Provide accurate help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {content && (
        <div className={styleshome.modal}>Copied url for {content}</div>
      )}

      <div className={styles.main_container}>
        <header className={styles.header}>
          <SettingPanel
            page={page}
            icons={icons}
            title={title}
            copy={copySetting}
          />
        </header>
        <main className={styles.main}>
          {icons && icons.length !== 0 && (
            <SettingBuilder
              title={title}
              page={page}
              setting={icons[0].setting}
              copy={copySetting}
            />
          )}
        </main>
        <footer className={styles.footer}>
          <SettingMore />
        </footer>
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
