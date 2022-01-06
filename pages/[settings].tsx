import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
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
}

interface SettingMap {
  [key: string]: Setting[];
}

const createSettings = <M extends SettingMap>(o: M) => o;

const settingsPanel = createSettings({
  // Ok
  accounts: [
    {
      icon: AccountInfoIcon,
      text: "Your info",
      setting: "ms-settings:yourinfo",
    },
    {
      icon: AccountEmailIcon,
      text: "Email & accounts",
      setting: "ms-settings:emailandaccounts",
    },
    {
      icon: AccountConnexionIcon,
      text: "Sign-in options",
      setting: "ms-settings:signinoptions",
    },
    {
      icon: AccountSchoolIcon,
      text: "Access work or school",
      setting: "ms-settings:workplace",
    },
    {
      icon: AccountFamilyIcon,
      text: "Family & other users",
      setting: "ms-settings:otherusers",
    },
    {
      icon: AccountSyncIcon,
      text: "Sync you settings",
      setting: "ms-settings:sync",
    },
  ],
  // Ok
  ease: [
    {
      icon: AccessComputerIcon,
      text: "Display",
      setting: "ms-settings:easeofaccess-display",
    },
    {
      icon: AccessCursorIcon,
      text: "Mouse pointer",
      setting: "ms-settings:easeofaccess-cursorandpointersize",
    },
    {
      icon: AccessTextCursorIcon,
      text: "Text Cursor",
      setting: "ms-settings:easeofaccess-cursor",
    },
    {
      icon: AccessSearchIcon,
      text: "Magnifier",
      setting: "ms-settings:easeofaccess-magnifier",
    },
    {
      icon: AccessColorsIcon,
      text: "Color Filters",
      setting: "ms-settings:easeofaccess-colorfilter",
    },
    {
      icon: AccessContrastIcon,
      setting: "ms-settings:easeofaccess-highcontrast",
      text: "High Contrast",
    },
    {
      icon: AccessNarratorIcon,
      setting: "ms-settings:easeofaccess-narrator",
      text: "Narrator",
    },
    { icon: undefined, setting: "", text: "ease-spacer1" },
    {
      icon: AccessAudioIcon,
      setting: "ms-settings:easeofaccess-audio",
      text: "Audio",
    },
    {
      icon: AccessSubtitlesIcon,
      setting: "ms-settings:easeofaccess-closedcaptioning",
      text: "Closed captions",
    },
    { icon: undefined, setting: "", text: "ease-spacer2" },
    {
      icon: AccessVoiceIcon,
      setting: "ms-settings:easeofaccess-speechrecognition",
      text: "Speech",
    },
    {
      icon: AccessKeyboardIcon,
      setting: "ms-settings:easeofaccess-keyboard",
      text: "Keyboard",
    },
    {
      icon: AccessMouseIcon,
      setting: "ms-settings:easeofaccess-mouse",
      text: "Mouse",
    },
    {
      icon: AccessVisualControlsIcon,
      setting: "ms-settings:easeofaccess-eyecontrol",
      text: "Eye Control",
    },
  ],
  // Ok
  apps: [
    {
      icon: AppFunctionnalitiesIcon,
      setting: "ms-settings:appsfeatures",
      text: "Apps & features",
    },
    {
      icon: AppDefaultIcon,
      setting: "ms-settings:defaultapps",
      text: "Default apps",
    },
    { icon: AppMapIcon, setting: "ms-settings:maps", text: "Offline maps" },
    {
      icon: AppWebIcon,
      setting: "ms-settings:appsforwebsites",
      text: "Apps for websites",
    },
    {
      icon: AppvideoPlayerIcon,
      setting: "ms-settings:videoplayback",
      text: "Video playback",
    },
    {
      icon: AppStartupIcon,
      setting: "ms-settings:startupapps",
      text: "Startup",
    },
  ],
  // Ok
  personalization: [
    {
      icon: CustomBackgroundIcon,
      setting: "ms-settings:personalization-background",
      text: "Background",
    },
    {
      icon: CustomColorsIcon,
      setting: "ms-settings:personalization-colors",
      text: "Colors",
    },
    {
      icon: CustomLockscreenIcon,
      setting: "ms-settings:lockscreen",
      text: "Lock screen",
    },
    { icon: CustomThemesIcon, setting: "ms-settings:themes", text: "Themes" },
    { icon: CustomFontIcon, setting: "ms-settings:fonts", text: "Fonts" },
    {
      icon: CustomStartupIcon,
      setting: "ms-settings:personalization-start",
      text: "Start",
    },
    {
      icon: CustomTaskbarIcon,
      setting: "ms-settings:taskbar",
      text: "Taskbar",
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
    },
    {
      icon: GamesCaptureIcon,
      setting: "ms-settings:gaming-gamedvr",
      text: "Captures",
    },
    {
      icon: GamesModeIcon,
      setting: "ms-settings:gaming-gamemode",
      text: "Game Mode",
    },
    {
      icon: GamesXboxIcon,
      setting: "ms-settings:gaming-xboxnetworking",
      text: "Xbox Networking",
    },
  ],
  // Ok
  time: [
    {
      icon: TimeDateIcon,
      setting: "ms-settings:dateandtime",
      text: "Date & time",
    },
    {
      icon: TimeRegionIcon,
      setting: "ms-settings:regionformatting",
      text: "Region",
    },
    {
      icon: TimeLanguageIcon,
      setting: "ms-settings:regionlanguage",
      text: "Language",
    },
    { icon: TimeVoiceIcon, setting: "ms-settings:speech", text: "Speech" },
  ],
  // Ok
  network: [
    {
      icon: NetworkStateIcon,
      setting: "ms-settings:network-status",
      text: "Status",
    },
    {
      icon: NetworkWifiIcon,
      setting: "ms-settings:network-wifi",
      text: "Wi-Fi",
    },
    {
      icon: NetworkEthernetIcon,
      setting: "ms-settings:network-ethernet",
      text: "Ethernet",
    },
    {
      icon: NetworkAccessIcon,
      setting: "ms-settings:network-dialup",
      text: "Dial-up",
    },
    { icon: NetworkVpnIcon, setting: "ms-settings:network-vpn", text: "VPN" },
    {
      icon: NetworkAirplaneIcon,
      setting: "ms-settings:network-airplanemode",
      text: "Airplane mode",
    },
    {
      icon: NetworkAccessPointIcon,
      setting: "ms-settings:network-mobilehotspot",
      text: "Mobile hotspot",
    },
    {
      icon: NetworkProxyIcon,
      setting: "ms-settings:network-proxy",
      text: "Proxy",
    },
  ],
  // Ok
  devices: [
    {
      icon: PeriphDevicesIcon,
      text: "Bluetooth & other devices",
      setting: "ms-settings:connecteddevices",
    },
    {
      icon: PeriphPrintersIcon,
      text: "Printers & scanners",
      setting: "ms-settings:printers",
    },
    {
      icon: PeriphMouseIcon,
      text: "Mouse",
      setting: "ms-settings:mousetouchpad",
    },
    { icon: PeriphTypingIcon, text: "Typing", setting: "ms-settings:typing" },
    {
      icon: PeriphPenIcon,
      text: "Pen & Windows Ink",
      setting: "ms-settings:pen",
    },
    {
      icon: PeriphAutoPlayIcon,
      text: "AutoPlay",
      setting: "ms-settings:autoplay",
    },
    { icon: PeriphUsbIcon, text: "USB", setting: "ms-settings:usb" },
  ],
  // Ok
  privacy: [
    {
      icon: PrivacyGeneralIcon,
      setting: "ms-settings:privacy",
      text: "General",
    },
    {
      icon: PrivacyTasksIcon,
      setting: "ms-settings:privacy-speechtyping",
      text: "Inking & typing...",
    },
    {
      icon: PrivacyDiagnoIcon,
      setting: "ms-settings:privacy-feedback",
      text: "Diagnostics & feedback",
    },
    {
      icon: PrivacyHistoIcon,
      setting: "ms-settings:privacy-activityhistory",
      text: "Activity history",
    },

    { icon: undefined, setting: "", text: "privacy-spacer2" },

    {
      icon: PrivacyVoiceIcon,
      setting: "ms-settings:privacy-speech",
      text: "Speech",
    },

    { icon: undefined, setting: "", text: "privacy-spacer3" },

    {
      icon: PrivacyLocationIcon,
      setting: "ms-settings:privacy-location",
      text: "Location",
    },
    {
      icon: PrivacyCamIcon,
      setting: "ms-settings:privacy-webcam",
      text: "Camera",
    },
    {
      icon: PrivacyMicIcon,
      setting: "ms-settings:privacy-microphone",
      text: "Microphone",
    },
    {
      icon: PrivacyVoice_activationIcon,
      setting: "ms-settings:privacy-voiceactivation",
      text: "Voice activation",
    },
    {
      icon: PrivacyNotifIcon,
      setting: "ms-settings:privacy-notifications",
      text: "Notifications",
    },
    {
      icon: PrivacyInfoIcon,
      setting: "ms-settings:privacy-accountinfo",
      text: "Account info",
    },
    {
      icon: PrivacyContactIcon,
      setting: "ms-settings:privacy-contacts",
      text: "Contacts",
    },
    {
      icon: PrivacyCalendarIcon,
      setting: "ms-settings:privacy-calendar",
      text: "Calendar",
    },
    {
      icon: PrivacyCallIcon,
      setting: "ms-settings:privacy-phonecalls",
      text: "Phone calls",
    },
    {
      icon: PrivacyHisto_callIcon,
      setting: "ms-settings:privacy-callhistory",
      text: "Call history",
    },
    {
      icon: PrivacyMailIcon,
      setting: "ms-settings:privacy-email",
      text: "Email",
    },
    {
      icon: PrivacyManuscritIcon,
      setting: "ms-settings:privacy-tasks",
      text: "Tasks",
    },
    {
      icon: PrivacyMessageIcon,
      setting: "ms-settings:privacy-messaging",
      text: "Messaging",
    },
    {
      icon: PrivacyRadiosIcon,
      setting: "ms-settings:privacy-radios",
      text: "Radios",
    },
    {
      icon: PrivacyOther_devicesIcon,
      setting: "ms-settings:privacy-customdevices",
      text: "Other devices",
    },
    {
      icon: PrivacyBackgroundAppIcon,
      setting: "ms-settings:privacy-backgroundapps",
      text: "Background apps",
    },
    {
      icon: PrivacyIcon,
      setting: "ms-settings:privacy-appdiagnostics",
      text: "App diagnostics",
    },
    {
      icon: PrivacyAutoDownloadIcon,
      setting: "ms-settings:privacy-automaticfiledownloads",
      text: "Automatic file downloads",
    },
    {
      icon: PrivacyDocumentsIcon,
      setting: "ms-settings:privacy-documents",
      text: "Documents",
    },
    {
      icon: PrivacyPicturesIcon,
      setting: "ms-settings:privacy-pictures",
      text: "Pictures",
    },
    {
      icon: PrivacyVideosIcon,
      setting: "ms-settings:privacy-documents",
      text: "Videos",
    },
    {
      icon: PrivacyFilesystemIcon,
      setting: "ms-settings:privacy-broadfilesystemaccess",
      text: "File system",
    },
  ],
  // Ok
  search: [
    {
      icon: SearchAuthIcon,
      setting: "ms-settings:search-permissions",
      text: "Permissions & history",
    },
    {
      icon: SearchSearchIcon,
      setting: "ms-settings:cortana-windowssearch",
      text: "Searching Windows",
    },
  ],
  // Ok
  system: [
    {
      icon: SystemDisplayIcon,
      text: "Display",
      setting: "ms-settings:display",
    },
    { icon: SystemSoundIcon, text: "Sound", setting: "ms-settings:sound" },
    {
      icon: SystemNotifIcon,
      text: "Notification & actions",
      setting: "ms-settings:notifications",
    },
    {
      icon: SystemConcentrationIcon,
      text: "Focus assist",
      setting: "ms-settings:quiethours",
    },
    {
      icon: SystemAlimIcon,
      text: "Power & sleep",
      setting: "ms-settings:powersleep",
    },
    {
      icon: SystemBatteryIcon,
      text: "Battery Saver",
      setting: "ms-settings:batterysaver",
    },
    {
      icon: SystemStorageIcon,
      text: "Storage",
      setting: "ms-settings:storagesense",
    },
    {
      icon: SystemTabletIcon,
      text: "Tablet",
      setting: "ms-settings:tabletmode",
    },
    {
      icon: SystemMultitaskIcon,
      text: "Multitasking",
      setting: "ms-settings:multitasking",
    },
    {
      icon: SystemProjectionIcon,
      text: "Projecting to this PC",
      setting: "ms-settings:project",
    },
    {
      icon: SystemSharedIcon,
      text: "Shared experiences",
      setting: "ms-settings:crossdevice",
    },
    {
      icon: SystemCopyIcon,
      text: "Clipboard",
      setting: "ms-settings:clipboard",
    },
    {
      icon: SystemDistantIcon,
      text: "Remote Desktop",
      setting: "ms-settings:remotedesktop",
    },

    { icon: SystemAproposIcon, text: "About", setting: "ms-settings:about" },
  ],
  // Ok
  update: [
    {
      icon: UpdateWindowsIcon,
      setting: "ms-settings:windowsupdate",
      text: "Windows Update",
    },
    {
      icon: UpdateOptiIcon,
      setting: "ms-settings:delivery-optimization",
      text: "Delivery Optimization",
    },
    {
      icon: UpdateSecurityIcon,
      setting: "ms-settings:windowsdefender",
      text: "Windows Security",
    },
    { icon: UpdateSaveIcon, setting: "ms-settings:backup", text: "Backup" },
    {
      icon: UpdateSolveIcon,
      setting: "ms-settings:troubleshoot",
      text: "Troubleshoot",
    },
    {
      icon: UpdateRecoverIcon,
      setting: "ms-settings:recovery",
      text: "Recovery",
    },
    {
      icon: UpdateActivateIcon,
      setting: "ms-settings:activation",
      text: "Activation",
    },
    {
      icon: UpdateLocateIcon,
      setting: "ms-settings:findmydevice",
      text: "Find My Device",
    },
    {
      icon: UpdateDevIcon,
      setting: "ms-settings:developers",
      text: "For developers",
    },
    {
      icon: UpdateinsiderIcon,
      setting: "ms-settings:windowsinsider",
      text: "Windows Insider Program",
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

    const setting = text.substring(text.indexOf("ms-settings:"));

    clearTimeout(myTimeout);
    navigator.clipboard.writeText(text);

    const t = setTimeout(() => {
      setContent("");
    }, 1000);

    setContent(setting);
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

      <div style={{ display: "flex", flexDirection: "row" }}>
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
