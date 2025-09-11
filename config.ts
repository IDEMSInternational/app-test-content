import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("test")

config.google_drive = {
  sheets_folder_ids: ["15StZK4ejasGm2ce5c2aULwROnOP_zBsQ"],
  assets_folder_ids: ["1_HH_VjSErxe01bew5NknMlGFls7PUDKO"],
}


config.git = {
  content_repo: "https://github.com/IDEMSInternational/app-test-content",
  content_tag_latest: "1.0.4",
}

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "test"
config.app_config.APP_SIDEMENU_DEFAULTS.title = "test"

config.useReactiveTemplates = true;

export default config;