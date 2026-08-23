import SettingsBanner from "./SettingsBanner"
import SettingsDescription from "./SettingsDescription"
import SettingsPaymentGateways from "./SettingsPaymentGateways"
import SettingsPlatformInfo from "./SettingsPlatformInfo"
import SettingsSaveButton from "./SettingsSaveButton"

const DashboardSettings = () => {
  return (
    <div className="mb-10">
      <SettingsBanner/>
      <SettingsPlatformInfo />
      <SettingsDescription />
      <SettingsPaymentGateways />
      <SettingsSaveButton/>
    </div>
  )
}

export default DashboardSettings