import SettingsBanner from "./SettingsBanner"
import SettingsDescription from "./SettingsDescription"
import SettingsPaymentGateways from "./SettingsPaymentGateways"
import SettingsPlatformInfo from "./SettingsPlatformInfo"
import SettingsSaveButton from "./SettingsSaveButton"

const DashboardSettings = () => {
  return (
    <div className="mb-10 space-y-6">
      <SettingsBanner/>
      <SettingsPlatformInfo />
      <SettingsDescription />
      <SettingsPaymentGateways />
      <SettingsSaveButton/>
    </div>
  )
}

export default DashboardSettings